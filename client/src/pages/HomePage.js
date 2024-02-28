import React from 'react'
import {Link} from 'react-router-dom';

const HomePage = () => {

  const authToken = false
  return (
    
    <div className='home_page'>
      <div className='home_page_card'>
        <span style={{fontSize: '19px'}}>Prices By Country</span>
        <Link to={`/country`}>
        <img src="https://cdn-icons-png.flaticon.com/128/2947/2947674.png" alt="countrydata" />
        </Link>
      </div>
      <div className='home_page_card'>
        <span style={{marginBottom: '3px', fontSize: '19px'}}>Compare Countries</span>
        <Link to={`/compare`}>
        <img src="https://cdn-icons-png.flaticon.com/128/10696/10696287.png" alt="compare" />
          </Link>
      </div>

      <div className='home_page_card'>
      <span style={{marginBottom: '8px', fontSize: '19px'}}>Info Page</span>
        <Link to={`/info`}>
        <img src="https://cdn-icons-png.flaticon.com/128/1/1176.png" alt="compare" />
        </Link>
      </div>

    </div>
  )
}

export default HomePage