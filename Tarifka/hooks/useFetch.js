import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetch(){

    const [data, setdata] = useState([])
    const [detailData, setdetailData] = useState([])

        
    const fetchData = async (url) => {
        const response = await axios.get(url);
        
        setdata(response.data);
    }
    
    return {data,fetchData}
}