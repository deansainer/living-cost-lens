import {Route, Routes} from 'react-router-dom';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './pages/HomePage';
import InfoPage from './pages/InfoPage';
import ComparePage from './pages/ComparePage';
import CountryDataPage from './pages/CountryDataPage'
import CompareDataPage from './pages/CompareDataPage';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/info' element={<InfoPage/>}/>
        <Route path='/:countryName' element={<CountryDataPage/>}/>
        <Route path='/compare' element={<ComparePage/>}/>
        <Route path='/compare/:firstCountry/:secondCountry' element={<CompareDataPage/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
