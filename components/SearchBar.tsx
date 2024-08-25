import { View, TextInput, StyleSheet } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { useDebounce } from '../hooks/useDebounce'
import { ISearchBarProps } from '../interfaces/interfaces'
import axios from 'axios'
import { url, colors } from '../utils/utils'

export const SearchBar = ({ setMovies, setLoading, setError }:ISearchBarProps) => {

  const [searchValue, setSearchValue] = useState<string>('')
  const search = useDebounce(searchValue)
  const wasRendered = useRef(false)

  useEffect(() => {
    if(wasRendered.current) setLoading(true)
  }, [searchValue])

  useEffect(() => {
    if(wasRendered.current){
      setLoading(true)
      const getData = async () => {
        try{
          const res = await axios.get(`${url}?search=${search}`)
          setMovies(res.data.results)
          setLoading(false)
        }catch(err){
          console.log(err)
          setError('An error occured')
        }
      }
  
      getData()
    }else{
      wasRendered.current = true
    }
  }, [search])

  return (
    <View style={styles.searchBarContainer}>
      <TextInput 
        style={styles.input}
        onChangeText={e => setSearchValue(e)}
        placeholder='Search for movie'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  searchBarContainer: {
    alignItems: 'center',
    padding: 20
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255, .3)',
    width: 200,
    height: 30,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 6,
    padding: 3
  }
})