import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../utils/utils'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ILocalMovie, IWatchLaterProps } from '../interfaces/interfaces'

export const WatchLater = ({ id, remove, onPress }:IWatchLaterProps) => {

  const handleWatchLaterList = async () => {
    try{
      const list = await AsyncStorage.getItem('watchLaterList')

      if(!list) await AsyncStorage.setItem('watchLaterList', JSON.stringify([{ id }]))
      else{
        const parsed = JSON.parse(list)
        if(list){
          const found = parsed.find(( movie:ILocalMovie ) => movie.id === id)

          if(!found) await AsyncStorage.setItem('watchLaterList', JSON.stringify([...parsed, { id }]))
          else return alert('Movie already in list')
        }
      }

      alert('Movie added to the list')
    }catch(err){
      console.log(err)
      alert('Error while adding to watch list')
    }
  }

  return(
    <TouchableOpacity style={styles.watchLaterTouchable} onPress={onPress || handleWatchLaterList}>
      <Text style={styles.watchLaterText}>{remove ? 'Remove from list' : 'Watch Later'}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  watchLaterTouchable: {
    backgroundColor: colors.primary,
    width: 120,
    padding: 5
  },
  watchLaterText: {
    color: colors.secondary,
    textAlign: 'center'
  }
})