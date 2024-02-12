import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import CountryDataCard from '../components/CountryDataCard';

const CountryDataPage = () => {
  const [countryData, setCountryData] = useState([])
  

  useEffect(() => {
    async function fetchCountryData(){
      const response = await axios.get(`http://localhost:3001/api/${countryName}`)
      setCountryData(response.data)
    }
    fetchCountryData()
  }, [])
  const {countryName} = useParams();


  return (
    <div className='country_data_page'>
      <div>
        <CountryDataCard countryData={countryData} countryName={countryName}/>
      </div>
  </div>
  )
}

export default CountryDataPage