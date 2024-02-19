import React from 'react'
import {Link} from 'react-router-dom';

const HomePage = () => {
  return (
    
    <div className='home_page_cards'>
      <div>
        <Link to={`/country`}>Country Data</Link>
        <Link to={`/compare`}>Compare Countries</Link>
      </div>
    </div>
  )
}

export default HomePage