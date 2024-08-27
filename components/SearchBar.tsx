import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { useDebounce } from '../hooks/useDebounce'
import { ISearchBarProps } from '../interfaces/interfaces'
import axios from 'axios'
import { url, colors } from '../utils/utils'

export const SearchBar = ({ setMovies, setLoading, setError, error }:ISearchBarProps) => {

  const [searchValue, setSearchValue] = useState<string>('')
  const search = useDebounce(searchValue)
  const wasRendered = useRef(false)

  const getData = async () => {
    try{
      setLoading(true)
      const res = await axios.get(`${url}?search=${search}`)

      if(res.data.results.length === 0){
        setLoading(false)
        setError('No movies have been found.')
        return
      }

      setMovies(res.data.results)
      setLoading(false)
    }catch(err){
      setError('An error occured')
    }
  }

  useEffect(() => {
    if(wasRendered.current){
      if(error) setError('')
      getData()
    }else{
      wasRendered.current = true
    }
  }, [search])

  const clearInput = async () => setSearchValue('')

  return (
    <View style={styles.searchBarContainer}>
      <TextInput 
        style={styles.input}
        onChangeText={e => setSearchValue(e)}
        value={searchValue}
        placeholder='Search for movie'
      />
      {
        searchValue.trim() && (
          <TouchableOpacity style={styles.touchableClear} onPress={clearInput}>
            <Text style={styles.touchableText}>Clear</Text>
          </TouchableOpacity>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  searchBarContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    position: 'relative',
    width: 200
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, .3)',
    width: 200,
    height: 30,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 6,
    padding: 3,
  },
  touchableClear: {
    backgroundColor: colors.primary,
    padding: 2,
    borderRadius: 6,
    height: 30,
    justifyContent: 'center',
    right: -120,
    bottom: 30
  },
  touchableText: {
    color: colors.secondary,
    fontSize: 12,
    padding: 2,
  }
})