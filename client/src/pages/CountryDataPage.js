import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'

const CountryDataPage = () => {
  const {countryName} = useParams();
  const [countryData, setCountryData] = useState([])

  

  useEffect(() => {
    async function fetchCountryData(){
      const response = await axios.get(`http://localhost:3001/api/${countryName}`)
      setCountryData(response.data)
    }
    fetchCountryData()
  }, [])

  const salariesAndFinancing = countryData.filter((item) => item.type === 'Salaries And Financing')
  const markets = countryData.filter((item) => item.type === 'Markets')
  const rentPerMonth = countryData.filter((item) => item.type === 'Rent Per Month')
  const utilities = countryData.filter((item) => item.type === 'Utilities')
  const buyApartmentPrice = countryData.filter((item) => item.type === 'Buy Apartment Price')
  const restaurants = countryData.filter((item) => item.type === 'Restaurants')
  const clothingAndShoes = countryData.filter((item) => item.type === 'Clothing And Shoes')
  const sportsAndLeisure = countryData.filter((item) => item.type === 'Sports And Leisure')
  const transportation = countryData.filter((item) => item.type === 'Transportation')
  const childcare = countryData.filter((item) => item.type === 'Childcare')


  return (
    <div>
    {countryData.map((item) => (
      <div>
        {item.country_name} - {item.type} - {item.description} - {item.price}
      </div>
    ))}
  </div>
  )
}

export default CountryDataPage