import { View, Text, StyleSheet  } from 'react-native'
import { Link } from 'expo-router'
import React from 'react'
import { IMovieTileProps } from '../interfaces/interfaces'
 
export const MovieTile = ({ film, id }:IMovieTileProps) => (
  <View style={styles.movieTileContainer}>
    <Text style={styles.titleText}>{film.title}</Text>
    <Link href={`/movies/${id}`} style={styles.link}>
      Check out
    </Link>
  </View>
)

const styles = StyleSheet.create({
  movieTileContainer: {
    padding: 10,
    gap: 5
  },
  link: {
    backgroundColor: '#A02334',
    width: 100,
    padding: 4,
    color: '#fff',
    textAlign: 'center'
  },
  titleText: {
    fontSize: 20
  },
})