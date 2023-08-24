import React from 'react'
import LottieView from "lottie-react-native";


export default function Loading() {
  return <LottieView source={require('../src/assests/loading.json')} autoPlay/>
}
