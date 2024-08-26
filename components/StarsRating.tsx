import { View, Text } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import Stars from 'react-native-stars'
import { IStarsRatingProps, IMovieRatingLocal } from '../interfaces/interfaces'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Error } from './common/Error'

export const StarsRating = ({ id }:IStarsRatingProps) => {

  const [rating, setRating] = useState<number>(0)
  const [defaultRating, setDefaultRating] = useState<number | null>(null)
  const [error, setError] = useState<string>('')

  const starsRef = useRef<React.JSX.Element | null>(null)

  const handleStarsRating = (value:number) => setRating(value)

  useEffect(() => {
    const handleDefaultRating = async () => {
      try{
        const ratingList = await AsyncStorage.getItem('starsRating')

        if(!ratingList) return

        const parsed = JSON.parse(ratingList)

        const found = parsed.find((movie:IMovieRatingLocal) => movie.id === id)

        if(!found) return

        if(found.rating > starsRef.current?.props.count) setDefaultRating(starsRef.current?.props.count)
        else setDefaultRating(found.rating)
      }catch(err){
        setError('Error while loading movie rating.')
      }
    }

    handleDefaultRating()
  }, [starsRef])

  useEffect(() => {
    const saveRating = async () => {
      try{
        const ratingList = await AsyncStorage.getItem('starsRating')

        if(!ratingList){
          await AsyncStorage.setItem('starsRating', JSON.stringify([{ id, rating }]))
          return
        }

        const parsed = JSON.parse(ratingList)

        let found = parsed.find((movie:IMovieRatingLocal) => movie.id === id)

        if(!found) await AsyncStorage.setItem('starsRating', JSON.stringify([...parsed, { id, rating }]))
        else{
          const index = parsed.indexOf(found)
          parsed[index].rating = rating

          await AsyncStorage.setItem('starsRating', JSON.stringify(parsed))
        }
      }catch(err){
        setError('Error while trying to save movie rating.')
      }
    }

    saveRating()
  }, [rating])

  return (
    <View>
      {
        error ? <Error text={error} /> : (
          <View>
            <Stars 
              update={(val:number) => handleStarsRating(val)}
              count={10}
              default={defaultRating || 0}
              ref={starsRef}
            />
            {
              rating !== 0 && <Text style={{ textAlign: 'center' }}>Your rating: {rating} out of {starsRef.current?.props.count}</Text>
            }  
        </View>
        )
      }
    </View>
  )
}