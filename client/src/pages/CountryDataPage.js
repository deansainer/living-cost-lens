import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import CountryDataCard from '../components/CountryDataCard';
import CountryForm from '../components/CountryForm';

const CountryDataPage = () => {
  const [countryData, setCountryData] = useState([])
  const {countryName} = useParams();


  useEffect(() => {
    async function fetchCountryData(){
      const response = await axios.get(`http://localhost:3001/api/${countryName}`)
      setCountryData(response.data)
    }
    fetchCountryData()
  }, [])


  return (
    <div>
    <CountryForm/>
    {Object.keys(countryData).length > 0 && (
    <div className='country_data_page'>
      <div>
        <CountryDataCard countryData={countryData} countryName={countryName}/>
      </div>
    </div>)}
    
  </div>
  )
}

export default CountryDataPage