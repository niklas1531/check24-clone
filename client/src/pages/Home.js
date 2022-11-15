
import FlightAndHotel from '../components/FlightAndHotel'
import Hotel from '../components/Hotel'
import LoginModal from '../components/LoginModal'
import Nav from '../components/Nav'


const Home = ({inputs, setInputs, Login, changeShowLogin,flightAndHotel,  changeToFlightAndHotel, changeToHotel}) => {

    return (<div>
        <Nav changeShowLogin={changeShowLogin}/>
        <div className='home-bg'></div>
        <div className='home'>
            <h1>Hotelvergleich mit Bestpreis-Garantie</h1>
            <p>Bei uns finden Sie alle Hotelanbieter im Vergleich</p>
            <button className='view-button' disabled={flightAndHotel ? true : false} onClick={changeToFlightAndHotel}>Flug & Hotel</button>
            <button className='view-button' disabled={flightAndHotel ? false : true} onClick={changeToHotel}>Hotel</button>
            <div className='search-window'>
                {flightAndHotel ? <FlightAndHotel inputs={inputs} setInputs={setInputs}/> : <Hotel inputs={inputs} setInputs={setInputs}/>}
            </div>
        </div>
       {Login && <LoginModal changeShowLogin={changeShowLogin}/>}
    </div>)
}

export default Home