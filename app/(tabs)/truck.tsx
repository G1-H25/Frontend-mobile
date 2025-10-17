import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import Background from '../components/Background'
import GetPackages from '../components/GetPackages'
import ShowLocation from '../components/ShowLocation'

const truck = () => {
  return (
    <Background>
      <ScrollView>
        <ShowLocation/>
        <GetPackages/>
      </ScrollView>
    </Background>
  )
}

export default truck

const styles = StyleSheet.create({})