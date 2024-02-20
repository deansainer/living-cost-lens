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
  <span className='country_title'>{firstCountry}<img className='compare_icon2' alt='compare' src='https://i.ibb.co/Y3pNt6d/compare.png'></img>{secondCountry}</span>
  <div className='country_data_table'>
  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th className='w-25' scope="col"><img className='expenses_type_img' src='https://i.ibb.co/S50kZHd/money.png'/><span className='expenses_type'>Financing</span></th>
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
              {item.priceDifference >= 0 ? <td style={{ color:'green'}} className='w-25'>+{item.priceDifference}%</td> : <td style={{ color:'red'}} className='w-25'>{item.priceDifference}%</td>}
            </tr>
          ))}
    </tbody>
  </table>

  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th className='w-25' scope="col"><img className='expenses_type_img' src='https://i.ibb.co/r2DgrNp/grocery-store.png'/><span className='expenses_type'>Markets</span></th>
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

  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th scope="col"><img className='expenses_type_img' src='https://i.ibb.co/FDKjTmr/key.png'/><span className='expenses_type'>Rent Per Month</span></th>
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

  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th scope="col"><img className='expenses_type_img' src='https://i.ibb.co/tZNP8C0/plug.png'/><span className='expenses_type'>Utilities</span></th>
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

  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th scope="col"><img className='expenses_type_img' src='https://i.ibb.co/bKYbG6B/residential-2.png'/><span className='expenses_type'>Buy Apartment Price</span></th>
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

  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th scope="col"><img className='expenses_type_img' src='https://i.ibb.co/9chNRMM/dinner.png'/><span className='expenses_type'>Restaurants</span></th>
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

  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th scope="col"><img className='expenses_type_img' src='https://i.ibb.co/1qzcKp3/hanger.png'/><span className='expenses_type'>Clothing And Shoes</span></th>
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

  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th scope="col"><img className='expenses_type_img' src='https://i.ibb.co/2SN6MHh/ball-of-basketball.png'/><span className='expenses_type'>Sports And Leisure</span></th>
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

  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th scope="col"><img className='expenses_type_img' src='https://i.ibb.co/HrRHTP9/bus.png'/><span className='expenses_type'>Transportation</span></th>
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

  <table class="table table-dark table-striped">
    <thead>
      <tr>
        <th scope="col"><img className='expenses_type_img' src='https://i.ibb.co/SXwSbPf/baby.png'/><span className='expenses_type'>Childcare</span></th>
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