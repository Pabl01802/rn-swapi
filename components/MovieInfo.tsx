import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { IMovieInfoProps } from '../interfaces/interfaces'

export const MovieInfo = ({ movie }:IMovieInfoProps) => {

  return (
    <View style={styles.infoContainer}>
      <Text style={styles.movieTitle}>{movie.title}</Text>
      <Text style={styles.openingCrawl}>{movie.opening_crawl}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  infoContainer: {
    padding: 10,
    gap: 10
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