import { View } from "react-native"
import { useLocalSearchParams } from "expo-router"
import { useState, useEffect } from 'react'
import { Loading } from '../../components/common/Loading'
import { IMovie } from "../../interfaces/interfaces"
import axios from 'axios'
import { url } from '../../utils/utils'
import { MovieInfo } from "../../components/MovieInfo"
import { Error } from '../../components/common/Error'

const MovieInfoPage = () => {

  const { id } = useLocalSearchParams()

  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  const [data, setData] = useState<IMovie | null>(null)

  useEffect(() => {
    const getData = async () => {
      if(!loading) setLoading(true)
      try{
        const res = await axios.get(`${url}/${id}`)

        setData(res.data)
        setLoading(false)
      }catch(err){
        setError('Movie not found.')
      }
    }

    getData()
  }, [id])

  return(
    <View>
      {
        error ? <Error text={error} /> : loading ? <Loading /> : <MovieInfo movie={data!} />
      }
    </View>
  )  
}

export default MovieInfoPage