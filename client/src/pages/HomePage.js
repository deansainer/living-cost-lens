import React from 'react'
import {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    
    <div className='home_page'>
      <div className='home_page_card'>
        <Link to={`/country`}>
        <img src="https://cdn-icons-png.flaticon.com/128/2947/2947674.png" alt="countrydata" />
        </Link>
      </div>
      <div className='home_page_card'>
        <Link to={`/compare`}>
        <img src="https://cdn-icons-png.flaticon.com/128/10696/10696287.png" alt="compare" />
          </Link>
      </div>

      <div className='home_page_card'>
        <Link to={`/info`}>
        <img src="https://cdn-icons-png.flaticon.com/128/1055/1055189.png" alt="compare" />
        </Link>
      </div>

    </div>
  )
}

export default HomePage