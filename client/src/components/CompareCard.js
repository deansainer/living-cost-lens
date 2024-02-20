import React from 'react'
import { useParams } from 'react-router-dom'
const CompareCard = ({compareData}) => {
    const {firstCountry, secondCountry} = useParams()

    const salariesAndFinancing = compareData.filter((item) => item.type === 'Salaries And Financing')
    const markets = compareData.filter((item) => item.type === 'Markets')
    const rentPerMonth = compareData.filter((item) => item.type === 'Rent Per Month')
    const utilities = compareData.filter((item) => item.type === 'Utilities')
    const buyApartmentPrice = compareData.filter((item) => item.type === 'Buy Apartment Price')
    const restaurants = compareData.filter((item) => item.type === 'Restaurants')
    const clothingAndShoes = compareData.filter((item) => item.type === 'Clothing And Shoes')
    const sportsAndLeisure = compareData.filter((item) => item.type === 'Sports And Leisure')
    const transportation = compareData.filter((item) => item.type === 'Transportation')
    const childcare = compareData.filter((item) => item.type === 'Childcare')

  return (
    <div className='country_data_card'>
  <span className='country_title'>{firstCountry} - {secondCountry}</span>
  <div className='country_data_table'>
  <table class="table table-striped">
    <thead>
      <tr>
        <th className='w-25' scope="col"><img className='expenses_type_img' src='https://cdn-icons-png.flaticon.com/128/1077/1077976.png'/><span className='expenses_type'>Financing</span></th>
        <th className='w-25' scope="col">{firstCountry}</th>
        <th className='w-25' scope="col">{secondCountry}</th>
        <th className='w-25' scope="col">Difference</th>
      </tr>
    </thead>
    <tbody>
    {salariesAndFinancing.map((item) => (
              <tr className='table_row'>
              <td>{item.description}</td>
              {item.description === 'Mortgage Interest Rate in Percentages (%), Yearly, for 20 Years Fixed-Rate' ? <td>{item.firstCountryPrice} %</td> : <td>{item.firstCountryPrice} €</td>}
              {item.description === 'Mortgage Interest Rate in Percentages (%), Yearly, for 20 Years Fixed-Rate' ? <td>{item.secondCountryPrice} %</td> : <td>{item.secondCountryPrice} €</td>}
              {/* <td style={{ color: item.priceDifference >= 0 ? 'green' : 'red' }} className='w-25'>{item.priceDifference}%</td> */}
              {item.priceDifference >= 0 ? <td style={{ color:'green'}} className='w-25'>+{item.priceDifference}%</td> : <td style={{ color:'red'}} className='w-25'>{item.priceDifference}%</td>}
            </tr>
          ))}
    </tbody>
  </table>

  <table class="table table-striped">
    <thead>
      <tr>
        <th className='w-25' scope="col"><img className='expenses_type_img' src='https://cdn-icons-png.flaticon.com/128/3514/3514371.png'/><span className='expenses_type'>Markets</span></th>
        <th className='w-25' scope="col"></th>
      </tr>
    </thead>
    <tbody>
    {markets.map((item) => (
              <tr className='table_row'>
              <td className='w-25'>{item.description}</td>
              <td className='w-25'>{item.firstCountryPrice} €</td>
              <td className='w-25'>{item.secondCountryPrice} €</td>
              {item.priceDifference >= 0 ? <td style={{ color:'red'}} className='w-25'>+{item.priceDifference}%</td> : <td style={{ color:'green'}} className='w-25'>{item.priceDifference}%</td>}
              
            </tr>
          ))}
    </tbody>
  </table>

  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col"><img className='expenses_type_img' src='https://cdn-icons-png.flaticon.com/128/1769/1769483.png'/><span className='expenses_type'>Rent Per Month</span></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
    {rentPerMonth.map((item) => (
              <tr className='table_row'>
              <td className='w-25'>{item.description}</td>
              <td className='w-25'>{item.firstCountryPrice} €</td>
              <td className='w-25'>{item.secondCountryPrice} €</td>
              {item.priceDifference >= 0 ? <td style={{ color:'red'}} className='w-25'>+{item.priceDifference}%</td> : <td style={{ color:'green'}} className='w-25'>{item.priceDifference}%</td>}
            </tr>
          ))}
    </tbody>
  </table>

  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col"><img className='expenses_type_img' src='https://cdn-icons-png.flaticon.com/128/3540/3540060.png'/><span className='expenses_type'>Utilities</span></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
    {utilities.map((item) => (
              <tr className='table_row'>
              <td className='w-25'>{item.description}</td>
              <td className='w-25'>{item.firstCountryPrice} €</td>
              <td className='w-25'>{item.secondCountryPrice} €</td>
              {item.priceDifference >= 0 ? <td style={{ color:'red'}} className='w-25'>+{item.priceDifference}%</td> : <td style={{ color:'green'}} className='w-25'>{item.priceDifference}%</td>}
            </tr>
          ))}
    </tbody>
  </table>

  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col"><img className='expenses_type_img' src='https://cdn-icons-png.flaticon.com/128/2413/2413074.png'/><span className='expenses_type'>Buy Apartment Price</span></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
    {buyApartmentPrice.map((item) => (
              <tr className='table_row'>
              <td className='w-25'>{item.description}</td>
              <td className='w-25'>{item.firstCountryPrice} €</td>
              <td className='w-25'>{item.secondCountryPrice} €</td>
              {item.priceDifference >= 0 ? <td style={{ color:'red'}} className='w-25'>+{item.priceDifference}%</td> : <td style={{ color:'green'}} className='w-25'>{item.priceDifference}%</td>}
            </tr>
          ))}
    </tbody>
  </table>

  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col"><img className='expenses_type_img' src='https://cdn-icons-png.flaticon.com/128/1046/1046857.png'/><span className='expenses_type'>Restaurants</span></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
    {restaurants.map((item) => (
              <tr className='table_row'>
              <td className='w-25'>{item.description}</td>
              <td className='w-25'>{item.firstCountryPrice} €</td>
              <td className='w-25'>{item.secondCountryPrice} €</td>
              {item.priceDifference >= 0 ? <td style={{ color:'red'}} className='w-25'>+{item.priceDifference}%</td> : <td style={{ color:'green'}} className='w-25'>{item.priceDifference}%</td>}
            </tr>
          ))}
    </tbody>
  </table>

  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col"><img className='expenses_type_img' src='https://cdn-icons-png.flaticon.com/128/821/821528.png'/><span className='expenses_type'>Clothing And Shoes</span></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
    {clothingAndShoes.map((item) => (
              <tr className='table_row'>
              <td className='w-25'>{item.description}</td>
              <td className='w-25'>{item.firstCountryPrice} €</td>
              <td className='w-25'>{item.secondCountryPrice} €</td>
              {item.priceDifference >= 0 ? <td style={{ color:'red'}} className='w-25'>+{item.priceDifference}%</td> : <td style={{ color:'green'}} className='w-25'>{item.priceDifference}%</td>}
            </tr>
          ))}
    </tbody>
  </table>

  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col"><img className='expenses_type_img' src='https://cdn-icons-png.flaticon.com/128/4163/4163679.png'/><span className='expenses_type'>Sports And Leisure</span></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
    {sportsAndLeisure.map((item) => (
              <tr className='table_row'>
              <td className='w-25'>{item.description}</td>
              <td className='w-25'>{item.firstCountryPrice} €</td>
              <td className='w-25'>{item.secondCountryPrice} €</td>
              {item.priceDifference >= 0 ? <td style={{ color:'red'}} className='w-25'>+{item.priceDifference}%</td> : <td style={{ color:'green'}} className='w-25'>{item.priceDifference}%</td>}
            </tr>
          ))}
    </tbody>
  </table>

  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col"><img className='expenses_type_img' src='https://cdn-icons-png.flaticon.com/128/2503/2503517.png'/><span className='expenses_type'>Transportation</span></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
    {transportation.map((item) => (
              <tr className='table_row'>
              <td className='w-25'>{item.description}</td>
              <td className='w-25'>{item.firstCountryPrice} €</td>
              <td className='w-25'>{item.secondCountryPrice} €</td>
              {item.priceDifference >= 0 ? <td style={{ color:'red'}} className='w-25'>+{item.priceDifference}%</td> : <td style={{ color:'green'}} className='w-25'>{item.priceDifference}%</td>}
            </tr>
          ))}
    </tbody>
  </table>

  <table class="table table-striped">
    <thead>
      <tr>
        <th scope="col"><img className='expenses_type_img' src='https://cdn-icons-png.flaticon.com/128/13346/13346942.png'/><span className='expenses_type'>Childcare</span></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
    {childcare.map((item) => (
              <tr className='table_row'>
              <td className='w-25'>{item.description}</td>
              <td className='w-25'>{item.firstCountryPrice} €</td>
              <td className='w-25'>{item.secondCountryPrice} €</td>
              {item.priceDifference >= 0 ? <td style={{ color:'red'}} className='w-25'>+{item.priceDifference}%</td> : <td style={{ color:'green'}} className='w-25'>{item.priceDifference}%</td>}
            </tr>
          ))}
    </tbody>
  </table>
  </div>
</div>
  )
}

export default CompareCard