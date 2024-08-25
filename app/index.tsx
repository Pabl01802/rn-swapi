import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { url } from '../utils/utils'
import axios from 'axios'
import { IMovie } from '../interfaces/interfaces'
import MovieList from '../components/MoviesList'
import { Loading } from '../components/common/Loading'
import { SearchBar } from '../components/SearchBar'

export default function Home() {

  const [data, setData] = useState<IMovie[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const getData = async () => {
      try{
        const res = await axios.get(url)
        setData(res.data.results)
        setLoading(false)
      }catch(err){
        console.log(err)
        setError('An error occured')
      }
    }

    getData()
  }, [])

  return (
    <View>
      <SearchBar setMovies={setData} setLoading={setLoading} setError={setError} />
      {
        error ? <Text>{error}</Text> : loading ? <Loading /> : <MovieList films={data!} />
      }
    </View>
  )
}