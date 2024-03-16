import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

function Navbar() {
  function signOut(){
    Cookies.remove('username');
    Cookies.remove('token');
    window.location.reload();
  }

  return (
    <div className='navbar'>
      <div className="nav_links">
        <Link className={'home_nav_link'} to={'/'}>Home</Link>
        <Link className={'nav_link'} to={'/country'}>Country Data</Link>
        <Link className={'nav_link'} to={'/compare'}>Compare</Link>
        <Link className={'nav_link'} to={'/info'}>Info</Link>
      </div>
      <div className='signout_div'>
        <span className='username_nav'>{Cookies.get('username')}</span>
        <span className='sign_out_nav' onClick={signOut}>Sign out</span>
      </div>
    </div>
  );
}

export default Navbar;
