import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { url } from '../utils/utils'
import axios from 'axios'
import { IMovie } from '../interfaces/interfaces'
import { MoviesList } from '../components/MoviesList'
import { Loading } from '../components/common/Loading'
import { SearchBar } from '../components/SearchBar'
import { Error } from '../components/common/Error'

export default function Home() {

  const [data, setData] = useState<IMovie[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')

  useEffect(() => {
    const getData = async () => {
      try{
        const res = await axios.get(`${url}`)

        if(res.data.results.length === 0){
          setLoading(false)
          setError('No movies have been found.')
          return
        }

        setData(res.data.results)
        setLoading(false)
      }catch(err){
        setError('An error occured. Try again later.')
      }
    }

    getData()
  }, [])

  return (
    <View>
      <SearchBar setMovies={setData} setLoading={setLoading} setError={setError} error={error} />
      {
        error ? <Error text={error} /> : loading ? <Loading /> : <MoviesList films={data!} />
      }
    </View>
  )
}