import { Navigate, useNavigate, useParams } from "react-router-dom"
import Nav from "./Nav"
import background from '../images/urlaub.jpeg'

const HotelDetails = ({ currentHotelOffers }) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const back = () => {
        navigate('/results/')
    }
    return (
        <div>
            <Nav />
            <div className="container loadedIndivHotels">
                <div className="row">
                <div className="col-12">
                <h1>Angebote zum Hotel {id}</h1>
                </div>
                    {currentHotelOffers?.map(currentHotel =>
                        <div key={id} className='col-12 results'>
                            <p>Reiseziel: {currentHotel?.outboundarrivalairport}</p>
                            <p>Hinreise: {currentHotel?.departuredate}</p>
                            <p>Rückreise:{currentHotel?.returndate}</p>
                            <p>Anzahl Erwachsene: {currentHotel?.countadults}</p>
                            <p>Anzahl Kinder: {currentHotel?.countchildren}</p>
                            <h3>Preis: {currentHotel?.price}€</h3>
                        </div>
                    )}
                    <button className="col-4 offset-md-4" onClick={back}>Back</button>
                </div>
            </div>
        </div>)
}

export default HotelDetails