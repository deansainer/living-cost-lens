import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CompareCard from '../components/CompareCard'
import { useParams } from 'react-router-dom'

const CompareDataPage = () => {
  const {firstCountry, secondCountry} = useParams();
  const [compareData, setCompareData] = useState([]);

  useEffect(() => {
    async function fetchComparsionData(){
      const response = await axios.get(`http://localhost:3001/api/compare/${firstCountry}/${secondCountry}`)
      setCompareData(response.data)
      console.log(compareData);
    }
    fetchComparsionData()
  }, [])
  

  return (
    <div className='compare_data_page'>
      <CompareCard compareData={compareData}/>
    </div>
  )
}

export default CompareDataPage