import { useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Urlaub from '../images/urlaub.jpeg'
const FlightsHotels = ({showLoader,setCurrentHotelOffers,flightsHotels, inputs }) => {
    const navigate = useNavigate()
    const getDetails = async (id) => {
        try {
            showLoader(true)
            const outboundarrivalairport = inputs.outboundarrivalairport
            const outbounddepartureairport = inputs.outbounddepartureairport
            const departuredate = inputs.departuredate
            const returndate = inputs.returndate
            const countadults = inputs.countadults
            const countchildren = inputs.countchildren
            const response = await axios.get('http://localhost:8000/offersForFlightHotel', { params: { id, outboundarrivalairport,outbounddepartureairport, departuredate, returndate, countadults, countchildren } })
           console.log(response.data)
            const success = response.status === 200
            setCurrentHotelOffers(response.data)
            console.log(response.data)
            if (success) navigate('/results/' + id)
            showLoader(false)

        } catch (err) {
            console.log(err)
        }

    }

    return (
        <div className="container">
            <h2>{flightsHotels?.length} Hotels (inklusive Flug) wurden gefunden</h2>
            <div className="row">
                {flightsHotels?.map(flighthotel =>
                    <div className="loadedhotels col-11">

                        <div className="container">
                            <div className="row">
                                <div className=" col-4">
                                <img src={Urlaub} />
                                </div>
                                <div className="details col-7 offset-1">
                                    <p>Hotel-ID: <strong>{flighthotel?._id}</strong></p>
                                    <button onClick={e => getDetails(flighthotel._id)}>Zu den Angeboten</button>
                                </div>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default FlightsHotels