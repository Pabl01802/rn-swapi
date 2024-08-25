import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { IErrorProps } from '../../interfaces/interfaces'
import { colors } from '../../utils/utils'

export const Error = ({ text }:IErrorProps) => {
  return (
    <View style={styles.errorContainer}>
      <Text style={styles.errorText}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  errorContainer: {
    padding: 10,
  },
  errorText: {
    color: colors.primary,
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 22
  }
})