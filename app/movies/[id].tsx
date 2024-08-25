import { View, Text } from "react-native"
import { useLocalSearchParams } from "expo-router"
import { useState, useEffect } from 'react'
import { Loading } from '../../components/common/Loading'
import { IMovie } from "../../interfaces/interfaces"
import axios from 'axios'
import { url } from '../../utils/utils'
import MovieInfo from '../../components/MovieInfo'

const MovieInfoPage = () => {

  const { id } = useLocalSearchParams()

  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  const [data, setData] = useState<IMovie | null>(null)

  useEffect(() => {
    const getData = async () => {
      try{
        const res = await axios.get(`${url}/${id}`)
        setData(res.data)
        setLoading(false)
      }catch(err){
        console.log(err)
        setError('An error occured')
      }
    }

    getData()
  }, [id])

  return(
    <View>
      {
        error ? error : loading ? <Loading /> : <MovieInfo movie={data!} />
      }
    </View>
  )  
}

export default MovieInfoPage