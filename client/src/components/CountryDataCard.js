import React from 'react'

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
  <span className='country_title'>{countryName}</span>
  <div className='country_data_table'>
  <table class="table table-striped">
    <thead>
      <tr>
        <th className='w-25' scope="col"><img className='expenses_type_img' src='https://cdn-icons-png.flaticon.com/128/1077/1077976.png'/><span className='expenses_type'>Salaries And Financing</span></th>
        <th className='w-25' scope="col"></th>
      </tr>
    </thead>
    <tbody>
    {salariesAndFinancing.map((item) => (
              <tr className='table_row'>
              <td>{item.description}</td>
              <td>{item.price} €</td>
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
              <td className='w-25'>{item.price} €</td>
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
              <td className='w-25'>{item.price} €</td>
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
              <td className='w-25'>{item.price} €</td>
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
              <td className='w-25'>{item.price} €</td>
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
              <td className='w-25'>{item.price} €</td>
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
              <td className='w-25'>{item.price} €</td>
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
              <td className='w-25'>{item.price} €</td>
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
              <td className='w-25'>{item.price} €</td>
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
              <td className='w-25'>{item.price} €</td>
            </tr>
          ))}
    </tbody>
  </table>
  </div>
</div>



  )
}

export default CountryDataCard