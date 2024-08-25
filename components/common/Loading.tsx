import { SafeAreaView, ActivityIndicator, StyleSheet, Dimensions } from 'react-native'
import React from 'react'

export const Loading = () => (
  <SafeAreaView style={styles.loadingContainer}>
    <ActivityIndicator size='large' />
  </SafeAreaView>
)

const styles = StyleSheet.create({
  loadingContainer: {
    height: Dimensions.get('window').height / 1.5,
    justifyContent: 'center'
  }
})