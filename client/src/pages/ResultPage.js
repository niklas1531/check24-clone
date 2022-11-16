import Nav from "../components/Nav"
import Hotel from "../components/Hotel"
import FlightAndHotel from "../components/FlightAndHotel"
import LoginModal from "../components/LoginModal"

const ResultPage = ({hotels, setHotels, flightsHotels, setFlightsHotels,inputs, setInputs, Login, changeShowLogin,flightAndHotel, changeToFlightAndHotel, changeToHotel }) => {
    
    return (
    <div >
        <Nav changeShowLogin={changeShowLogin}/>
        <div className="resultpage">
            <section className="filter-container">

                <div className="filter">
                    <button className='view-button' disabled={flightAndHotel ? true : false} onClick={changeToFlightAndHotel}>Flug & Hotel</button>
                    <button className='view-button' disabled={flightAndHotel ? false : true} onClick={changeToHotel}>Hotel</button>
                    <div className='search-window'>
                    {flightAndHotel ? <FlightAndHotel inputs={inputs} setInputs={setInputs} setFlightsHotels={setFlightsHotels} flightsHotels={flightsHotels}/> : 
                <Hotel inputs={inputs} setInputs={setInputs} hotels={hotels} setHotels={setHotels}/>}
                    </div>
                </div>
            </section>
            <section className="results-container">
                Test
            </section>
        </div>
        {Login && <LoginModal changeShowLogin={changeShowLogin}/>}
    </div>)
}

export default ResultPage