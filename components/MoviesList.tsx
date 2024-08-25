import { View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { IMoviesListProps, IMovie } from '../interfaces/interfaces'
import { MovieTile } from './MovieTile'

export const MoviesList = ({ films }:IMoviesListProps) => {

  const [data] = useState<IMovie[]>(films)

  return (
    <View>
      {
        data 
        && 
        <FlatList 
          data={data}
          renderItem={({item, index}) => <MovieTile film={item} id={index} />}
          keyExtractor={(item, index) => `film-${index}`}
        />
      }
    </View>
  )
}