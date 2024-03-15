import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';


function ColorSchemesExample() {
  const [cookies, setCookies, removeCookies] = useCookies(null)

  function signOut(){
    removeCookies('Username')
    removeCookies('AuthToken')
  }
  
  const username = cookies.Username
  return (
    <div className='navbar'>
      <div>
        <Link className={'home_nav_link'} to={'/'}>Home</Link>
        <Link className={'nav_link'} to={'/country'}>Country Data</Link>
        <Link className={'nav_link'} to={'/compare'}>Compare</Link>
        <Link className={'nav_link'} to={'/info'}>Info</Link>
        <span onClick={signOut} className='sign_out_nav'>Sign Out</span>
      </div>
    </div>
  );
}

export default ColorSchemesExample;