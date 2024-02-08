import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom';

const CountryForm = () => {
    const [countryName, setCountryName] = useState('')

  return (
    <div>
       <form className='country_form'>
        <input type='text' placeholder='Poland' value={countryName} onChange={(e) => setCountryName(e.target.value)}/>
        <Link className={'submit_btn'} to={`/${countryName}`}>Submit</Link>
        </form> 
    </div>
  )
}

export default CountryForm;