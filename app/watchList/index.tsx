import { View, StyleSheet } from 'react-native'
import { useState, useEffect } from 'react'
import { Loading } from '../../components/common/Loading'
import { Error } from '../../components/common/Error'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { IMovie, ILocalMovie } from '../../interfaces/interfaces'
import { MovieTile } from '../../components/MovieTile'
import axios from 'axios'
import { url } from '../../utils/utils'
import { WatchLater } from '../../components/WatchLater'
import { useRouter } from 'expo-router'
import { ToastContainer } from '../../components/common/ToastContainer'
import { Toast } from 'toastify-react-native'

export default function WatchList() {

  const router = useRouter();

  const [local, setLocal] = useState<ILocalMovie[] | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>('')
  const [movies, setMovies] = useState<IMovie [] | null>(null)

  useEffect(() => {
    const getStorageData = async () => {
      try{
        const list = await AsyncStorage.getItem('watchLaterList')

        const parsed = JSON.parse(list!)

        if(parsed.length === 0){
          setError('No movies saved')
          setLoading(false)
          return
        } 

        setLocal(JSON.parse(list!))
      }catch(err){
        setError('Error while loading watch list')
      }
    }

    getStorageData()
  }, [])

  useEffect(() => {

    if(local){
      const getMovies = async () => {
        try{
          const res = await Promise.all([...local.map((movie:ILocalMovie) => axios.get(`${url}/${movie.id}`)
          )])
        
          if(res.length === local.length){
            setMovies(res.map((movie) => movie.data))
            setLoading(false)
          } 
          else {
            setError('Cannot load movies')
            setLoading(false)
          }

        }catch(err){
          setError('Cannot load movies')
          setLoading(false)
        }
      }
      getMovies()
    }
  }, [local])

  const removeMovie = async (id:string) => {
    try{
      let list = await AsyncStorage.getItem('watchLaterList')
      const parsed = JSON.parse(list!)
      await AsyncStorage.setItem('watchLaterList', JSON.stringify(parsed.filter((movie:ILocalMovie) =>  movie.id !== id)))
      router.replace('/watchList')
      Toast.success('Movie removed')
    }catch(err){
      setError('Error while removing movie')
    }
  }


  const list = movies?.map((movie, index) => (
    <View key={`movie-${index}`}>
      <MovieTile film={movie} id={parseInt(local![index].id)-1} />
      <View style={styles.removeMovie}>
        <WatchLater onPress={() => removeMovie(local![index].id)} id={local![index].id} remove={true} />
      </View>
    </View>
  ))

  return (
    <View>
      <ToastContainer />
      {
        error ? <Error text={error} /> : loading ? <Loading /> : list
      }
    </View>
  )
}

const styles = StyleSheet.create({
  removeMovie: {
    marginLeft: 10
  }
})