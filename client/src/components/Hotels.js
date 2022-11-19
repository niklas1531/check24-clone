import { useState } from "react"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Urlaub from '../images/urlaub.jpeg'
const Hotels = ({showLoader,currentHotelOffers, setCurrentHotelOffers,hotels, inputs }) => {
    const navigate = useNavigate()
    const getDetails = async (id) => {
        try {
            showLoader(true)
            const outboundarrivalairport = inputs.outboundarrivalairport
            const departuredate = inputs.departuredate
            const returndate = inputs.returndate
            const countadults = inputs.countadults
            const countchildren = inputs.countchildren
            const response = await axios.get('http://localhost:8000/offersForHotel', { params: { id, outboundarrivalairport, departuredate, returndate, countadults, countchildren } })
            const success = response.status === 200
            console.log(response.data)
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
            <h2>{hotels?.length} Hotels wurden gefunden</h2>
            <div className="row">
                {hotels?.map(hotel =>
                    <div className="loadedhotels col-11">

                        <div className="container">
                            <div className="row">
                                <div className=" col-4">
<img src={Urlaub} />
                                </div>
                                <div className="details col-7 offset-1">
                                    <p>Hotel-ID:<strong>{hotel?._id}</strong></p>
                                    <button onClick={e => getDetails(hotel._id)}>Zu den Angeboten</button>
                                </div>
                            </div>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default Hotels