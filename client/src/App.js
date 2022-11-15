import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { useState } from 'react'
import ResultPage from './pages/ResultPage';
const App = () => {
  const [flightAndHotel, setFlightAndHotel] = useState(true)
  const [Login, showLogin] = useState(false)
  const changeToFlightAndHotel = () => {
    setFlightAndHotel(true)
  }
  const [inputs, setInputs] = useState({
    departuredate: "",
    returndate: "",
    countadults: "",
    countchildren: "",
    outbounddepartureairport : "",
    outboundarrivalairport: "",
    room: ""

})
  const changeToHotel = () => {
    setFlightAndHotel(false)
  }

  const changeShowLogin = () => {
    showLogin(!Login)
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home  inputs={inputs} setInputs={setInputs} Login={Login} changeShowLogin={changeShowLogin} flightAndHotel={flightAndHotel} setFlightAndHotel={setFlightAndHotel} changeToFlightAndHotel={changeToFlightAndHotel} changeToHotel={changeToHotel} />} />
        <Route path='/results' element={<ResultPage inputs={inputs} setInputs={setInputs}  Login={Login} changeShowLogin={changeShowLogin} flightAndHotel={flightAndHotel} setFlightAndHotel={setFlightAndHotel} changeToFlightAndHotel={changeToFlightAndHotel} changeToHotel={changeToHotel} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
