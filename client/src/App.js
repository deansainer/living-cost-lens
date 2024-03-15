import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import CountryDataPage from './pages/CountryDataPage'
import CompareDataPage from './pages/CompareDataPage';
import Auth from './components/Auth';
import {useCookies} from 'react-cookie'


function App() {

  const [cookies, setCookies, removeCookies] = useCookies(null)

  const authToken = cookies.AuthToken
  const username = cookies.Username

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        {authToken ? (
          <>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/info' element={<InfoPage/>}/>
            <Route path='/country' element={<CountryDataPage/>}/>
            <Route path='/country/:countryName' element={<CountryDataPage/>}/>
            <Route path='/compare' element={<CompareDataPage/>}/>
            <Route path='/compare/:firstCountry/:secondCountry' element={<CompareDataPage/>}/>
          </>
        ) : (
          <Route path='*' element={<Auth/>}/>
        )}
      </Routes>
    </div>
  );
}

export default App;
