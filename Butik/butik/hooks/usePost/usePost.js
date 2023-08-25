import React, {useState } from 'react'
import { StyleSheet} from 'react-native'
import axios from 'axios';


export default function usePost() {
  const [data, setData] = useState([]); // State for storing products
  const [loading, setloading] = useState(false)
  const [error, seterror] = useState([])

  async function post(url, apiData){
    try {
      setloading(true)

      const response = await axios.post(url, apiData); 
      setData(response.data); 
      
      setloading(false)
    } catch (error) {
    
      seterror(error);
      setloading(false);
    }
  }


  return {error, loading, data, post};

}

const styles = StyleSheet.create({})