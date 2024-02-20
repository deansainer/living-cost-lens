import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <div className='navbar'>
      <div>
        <Link className={'home_nav_link'} to={'/'}>Home</Link>
        <Link className={'nav_link'} to={'/country'}>Country Data</Link>
        <Link className={'nav_link'} to={'/compare'}>Compare</Link>
        <Link className={'nav_link'} to={'/info'}>Info</Link>
      </div>
    </div>
  );
}

export default ColorSchemesExample;