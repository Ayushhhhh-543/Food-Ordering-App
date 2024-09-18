import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const ProductDetailScreen = () =>{
    const {id} = useLocalSearchParams();
    return (
      <View>
        <Stack.Screen options={{title:'Details'}} />
        <Text style = {{fontSize:20}}>Product Details for id: {id}</Text>
      </View>
    )
  }


export default ProductDetailScreen