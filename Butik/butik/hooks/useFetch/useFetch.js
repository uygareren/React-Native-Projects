import React, { useEffect, useState } from 'react'
import { StyleSheet} from 'react-native'
import axios from 'axios';


export default function useFetch(url) {
  const [data, setData] = useState([]); // State for storing products
  const [loading, setloading] = useState(true)
  const [error, seterror] = useState(false)

  async function fetchData(){
    try {
      const response = await axios.get(url); 
      setData(response.data); 
      setloading(false)
    } catch (error) {
      console.error("Error fetching data:", error);
      seterror(true)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])


  return {error, loading, data}

}

const styles = StyleSheet.create({})