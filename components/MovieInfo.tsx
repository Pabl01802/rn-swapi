import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { IMovieInfoProps } from '../interfaces/interfaces'
import { WatchLater } from '../components/WatchLater'
import { useLocalSearchParams } from 'expo-router'
import { StarsRating } from '../components/StarsRating'
import { ToastContainer } from '../components/common/ToastContainer'
 
export const MovieInfo = ({ movie }:IMovieInfoProps) => {

  const { id } = useLocalSearchParams()

  return (
    <View style={styles.infoContainer}>
      <ToastContainer />
      <Text style={styles.movieTitle}>{movie.title}</Text>
      <Text style={styles.openingCrawl}>{movie.opening_crawl}</Text>
      <WatchLater id={id as string} />
      <StarsRating id={id as string} />
    </View>
  )
}

const styles = StyleSheet.create({
  infoContainer: {
    padding: 10,
    gap: 10,
  },
  movieTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  openingCrawl: {
    fontSize: 14,
    textAlign: 'center'
  }
})