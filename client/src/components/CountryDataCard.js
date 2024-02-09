import React from 'react'
import { useParams } from 'react-router-dom'

const CountryDataCard = ({countryData, countryName}) => {
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
    
    <div className='country_data_card'>
        <h1>{countryName}</h1>
        <h5>Salaries And Financing</h5>
        {salariesAndFinancing.map((item) => (
            <div className='item_values'>
                {item.description} - {item.price}€
            </div>
        ))}
        </div>
  )
}

export default CountryDataCard