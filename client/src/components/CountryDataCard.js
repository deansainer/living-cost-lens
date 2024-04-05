import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import {Bar, Pie, Line} from "react-chartjs-2";
import Comments from './Comments';
import Chart from 'chart.js/auto';

const CountryDataCard = ({countryData}) => {

    const [chartType, setChartType] = useState('bar')
    
    const {countryName} = useParams()
    
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
 
    function getSumOfPrices(array){
      return array.reduce((sum, item) => sum + parseFloat(item.price), 0)
    }

    const chartData = {
      labels: [
        'Financing', 'Markets', 'Rent', 
        'Utilities', 'Buy Apartment Price', 'Restaurants', 
        'Clothing', 'Sports', 'Childcare' 
      ],
      datasets: [
        {
          label: `${countryName}`,
          data: [getSumOfPrices(salariesAndFinancing), getSumOfPrices(markets), getSumOfPrices(rentPerMonth),
            getSumOfPrices(utilities), getSumOfPrices(buyApartmentPrice), getSumOfPrices(restaurants), 
            getSumOfPrices(clothingAndShoes), getSumOfPrices(sportsAndLeisure), getSumOfPrices(childcare), ]
        }
      ]
    }

    let chartComponent;
    let chartStyle;

    if (chartType === 'bar'){
      chartComponent = <Bar data={chartData}/>
      chartStyle={'width': '1000px'}

    } else if (chartType === 'line'){
      chartComponent = <Line data={chartData}/>
      chartStyle={'width': '1000px'}

    } else if (chartType === 'pie'){
      chartComponent = <Pie data={chartData}/>
      chartStyle={'width': '600px'}
    }


  return (
    
<>
<div className='country_data_card'>
  <span className='country_title'>{countryName}</span>
  <div className='country_data_table'>
  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th className='w-25' scope="col"><img alt='img' className='expenses_type_img' src='https://i.ibb.co/S50kZHd/money.png'/><span className='expenses_type'>Financing</span></th>
        <th className='w-25' scope="col">Price</th>
      </tr>
    </thead>
    <tbody>
    {salariesAndFinancing.map((item) => (
              <tr className='table_row'>
              <td>{item.description}</td>
              {item.description === 'Mortgage Interest Rate in Percentages (%), Yearly, for 20 Years Fixed-Rate' ? <td>{item.price} %</td> : <td>{item.price} €</td>}
            </tr>
          ))}
    </tbody>
  </table>

  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th className='w-25' scope="col"><img alt='img' className='expenses_type_img' src='https://i.ibb.co/r2DgrNp/grocery-store.png'/><span className='expenses_type'>Markets</span></th>
        <th className='w-25' scope="col"></th>
      </tr>
    </thead>
    <tbody>
    {markets.map((item) => (
              <tr className='table_row'>
              <td className='w-25'>{item.description}</td>
              <td className='w-25'>{item.price} €</td>
            </tr>
          ))}
    </tbody>
  </table>

  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th scope="col"><img alt='img' className='expenses_type_img' src='https://i.ibb.co/FDKjTmr/key.png'/><span className='expenses_type'>Rent Per Month</span></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
    {rentPerMonth.map((item) => (
              <tr className='table_row'>
              <td className='w-25'>{item.description}</td>
              <td className='w-25'>{item.price} €</td>
            </tr>
          ))}
    </tbody>
  </table>

  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th scope="col"><img alt='img' className='expenses_type_img' src='https://i.ibb.co/tZNP8C0/plug.png'/><span className='expenses_type'>Utilities</span></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
    {utilities.map((item) => (
              <tr className='table_row'>
              <td className='w-25'>{item.description}</td>
              <td className='w-25'>{item.price} €</td>
            </tr>
          ))}
    </tbody>
  </table>

  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th scope="col"><img alt='img' className='expenses_type_img' src='https://i.ibb.co/bKYbG6B/residential-2.png'/><span className='expenses_type'>Buy Apartment Price</span></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
    {buyApartmentPrice.map((item) => (
              <tr className='table_row'>
              <td className='w-25'>{item.description}</td>
              <td className='w-25'>{item.price} €</td>
            </tr>
          ))}
    </tbody>
  </table>

  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th scope="col"><img alt='img' className='expenses_type_img' src='https://i.ibb.co/9chNRMM/dinner.png'/><span className='expenses_type'>Restaurants</span></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
    {restaurants.map((item) => (
              <tr className='table_row'>
              <td className='w-25'>{item.description}</td>
              <td className='w-25'>{item.price} €</td>
            </tr>
          ))}
    </tbody>
  </table>

  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th scope="col"><img alt='img' className='expenses_type_img' src='https://i.ibb.co/1qzcKp3/hanger.png'/><span className='expenses_type'>Clothing And Shoes</span></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
    {clothingAndShoes.map((item) => (
              <tr className='table_row'>
              <td className='w-25'>{item.description}</td>
              <td className='w-25'>{item.price} €</td>
            </tr>
          ))}
    </tbody>
  </table>

  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th scope="col"><img alt='img' className='expenses_type_img' src='https://i.ibb.co/2SN6MHh/ball-of-basketball.png'/><span className='expenses_type'>Sports And Leisure</span></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
    {sportsAndLeisure.map((item) => (
              <tr className='table_row'>
              <td className='w-25'>{item.description}</td>
              <td className='w-25'>{item.price} €</td>
            </tr>
          ))}
    </tbody>
  </table>

  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th scope="col"><img alt='img' className='expenses_type_img' src='https://i.ibb.co/HrRHTP9/bus.png'/><span className='expenses_type'>Transportation</span></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
    {transportation.map((item) => (
              <tr className='table_row'>
              <td className='w-25'>{item.description}</td>
              <td className='w-25'>{item.price} €</td>
            </tr>
          ))}
    </tbody>
  </table>

  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th scope="col"><img alt='img' className='expenses_type_img' src='https://i.ibb.co/SXwSbPf/baby.png'/><span className='expenses_type'>Childcare</span></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
    {childcare.map((item) => (
              <tr className='table_row'>
              <td className='w-25'>{item.description}</td>
              <td className='w-25'>{item.price} €</td>
            </tr>
          ))}
    </tbody>
  </table>
  </div>

  <div className='chart_type_buttons'>
    <button style={chartType === 'pie' ? {backgroundColor: '#2C3034'} : {backgroundColor: '#212529'}} className='btn2' onClick={() => setChartType('pie')}>Pie</button>
    <button style={chartType === 'bar' ? {backgroundColor: '#2C3034'} : {backgroundColor: '#212529'}} className='btn1' onClick={() => setChartType('bar')}>Bar</button>
    <button style={chartType === 'line' ? {backgroundColor: '#2C3034'} : {backgroundColor: '#212529'}} className='btn1' onClick={() => setChartType('line')}>Line</button>
  </div>

  <div className='chart_card'>
    <div style={chartStyle} className='chart_component'>{chartComponent}</div>
  </div>
  <Comments countryName={countryName}/>
</div>
</>
  )
}

export default CountryDataCard