import Nav from "../components/Nav"
import Hotel from "../components/Hotel"
import FlightAndHotel from "../components/FlightAndHotel"
import LoginModal from "../components/LoginModal"
import Hotels from "../components/Hotels"
import FlightsHotels from "../components/FlightsHotels"

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
                {flightAndHotel ? <FlightsHotels flightsHotels={flightsHotels}/> : <Hotels hotels={hotels}/>}
            </section>
        </div>
        {Login && <LoginModal changeShowLogin={changeShowLogin}/>}
    </div>)
}

export default ResultPage