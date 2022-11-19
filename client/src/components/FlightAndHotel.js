import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const FlightAndHotel = ({ showLoader, inputs, setInputs, setFlightsHotels }) => {


    const navigate = useNavigate()
    const startSearch = async (e) => {
        showLoader(true)
        e.preventDefault()
        try {
            const outbounddepartureairport = inputs.outbounddepartureairport
            const outboundarrivalairport = inputs.outboundarrivalairport
            const departuredate = inputs.departuredate
            const returndate = inputs.returndate
            const countadults = inputs.countadults
            const countchildren = inputs.countchildren
            const response = await axios.get('http://localhost:8000/findflightshotels', { params: { outbounddepartureairport, outboundarrivalairport, departuredate, returndate, countadults, countchildren } })
            const success = response.status === 200
            setFlightsHotels(response.data)
            console.log(response.data)
            if (success) navigate('/results')
            showLoader(false)
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = (e) => {
        console.log('e', e)
        const value = e.target.value
        const name = e.target.name

        setInputs((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }
    return (
        <div className='container flightAndHotel'>
            <form onSubmit={startSearch}>
                <div className='row'>
                    <div className="text-field-wrapper col-12 p-lr">
                        <label for='reiseziel'>Reiseziel oder Hotel</label>
                        <select value={inputs.outboundarrivalairport} onChange={e => setInputs(prev => ({ ...prev, ["outboundarrivalairport"]: e.target.value }))} name='outboundarrivalairport'>
                            <option >PMI</option>
                            <option ></option>
                        </select>

                    </div>
                    <div className="text-field-wrapper col-12 p-lr">
                        <label for='abflughafen'>Abflughafen</label>
                        <select value={inputs.outbounddepartureairport} onChange={e => setInputs(prev => ({ ...prev, ["outbounddepartureairport"]: e.target.value }))} name='outbounddepartureairport'>
                            <option name="AMS">AMS</option>
                            <option name="BER">BER</option>
                            <option name="BLL">BLL</option>
                            <option name="BRE">BRU</option>
                            <option name="BSL">BSL</option>
                            <option name="CGN">CGN</option>
                            <option name="DRS">DRS</option>
                            <option name="DTM">DTM</option>
                            <option name="DUS">DUS</option>
                            <option name="EIN">EIN</option>
                            <option name="ERF">ERF</option>
                            <option name="FDH">FDH</option>
                            <option name="FKB">FKB</option>
                            <option name="FMM">FMM</option>
                            <option name="FMO">FMO</option>
                            <option name="FRA">FRA</option>
                            <option name="GVA">GVA</option>
                            <option name="HAJ">HAJ</option>
                            <option name="HAM">HAM</option>
                            <option name="INN">INN</option>
                            <option name="KRK">KRK</option>
                            <option name="KSF">KSF</option>
                            <option name="LBC">LBC</option>
                            <option name="LEJ">LEJ</option>
                            <option name="LNZ">LNZ</option>
                            <option name="LUX">LUX</option>
                            <option name="MUC">MUC</option>
                            <option name="NRN">NRN</option>
                            <option name="NUE">NUE</option>
                            <option name="PAD">PAD</option>
                            <option name="PRG">PRG</option>
                            <option name="SCN">SCN</option>
                            <option name="STR">STR</option>
                            <option name="SXB">SXB</option>
                            <option name="SZG">SZG</option>
                            <option name="VIE">VIE</option>
                            <option name="ZRH">ZRH</option>
                        </select>

                    </div>
                    <div className="col-12">
                        <div className="container">
                            <div className='row'>
                                <div className='text-field-wrapper col-6 p-l p-r'>
                                    <label for='hinreise'>Hinreise</label>
                                    <input required={true} type='date' name='departuredate' value={inputs.departuredate} onChange={handleChange} />
                                </div>
                                <div className='text-field-wrapper col-6 p-l p-r'>
                                    <label for='rückreise'>Rückreise</label>
                                    <input required={true} type='date' name='returndate' value={inputs.returndate} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className='container'>
                            <div className='row'>
                                <div className='text-field-wrapper col-12 col-md-4 p-l p-r'>
                                    <label for='erwachsene'>Erwachsene</label>
                                    <input required={true} type='number' placeholder='2' name='countadults' value={inputs.countadults} onChange={handleChange} />
                                </div>
                                <div className='text-field-wrapper col-6 col-md-4 p-l p-r'>
                                    <label for='kinder'>Kinder</label>
                                    <input required={true} type='number' placeholder='1' name='countchildren' value={inputs.countchildren} onChange={handleChange} />
                                </div>
                                <div className='text-field-wrapper col-6 col-md-4 p-l p-r'>
                                    <label for='zimmer'>Zimmer</label>
                                    <input required={true} type='number' placeholder='1' name='room' value={inputs.room} onChange={handleChange} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-field-wrapper p-l col-12">
                        <input type='submit' value='Reise Finden' />
                    </div>
                </div>
            </form>
        </div>)
}

export default FlightAndHotel