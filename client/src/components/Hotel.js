import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Hotel = ({ showLoader, inputs, setInputs, setHotels }) => {

    const handleChange = (e) => {
        console.log('e', e)
        const value = e.target.value
        const name = e.target.name

        setInputs((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    const navigate = useNavigate()
    const startSearch = async (e) => {
        showLoader(true)
        e.preventDefault()
        try {
            const outboundarrivalairport = inputs.outboundarrivalairport
            const departuredate = inputs.departuredate
            const returndate = inputs.returndate
            const countadults = inputs.countadults
            const countchildren = inputs.countchildren
            const response = await axios.get('http://localhost:8000/findhotels', { params: { outboundarrivalairport, departuredate, returndate, countadults, countchildren } })
            const success = response.status === 200
            setHotels(response.data)
            console.log(response.data)
            if (success) navigate('/results')
            showLoader(false)

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="container flightAndHotel">
            <form onSubmit={startSearch}>
                <div className='row'>
                    <div className="text-field-wrapper col-12 p-lr">
                        <label for='reiseziel'> Reiseziel oder Hotel</label >
                        <select onChange={e => setInputs(prev => ({ ...prev, ["outboundarrivalairport"]: e.target.value }))} name='outboundarrivalairport' value={inputs.outboundarrivalairport}>
                            <option>PMI</option>
                            <option ></option>
                        </select>
                    </div>
                    <div className="col-12">
                        <div className='container'>
                            <div className='row'>
                                <div className="text-field-wrapper p-l p-r col-6">
                                    <label for='hinreise'>Hinreise</label>
                                    <input required={true} type='date' name='departuredate' value={inputs.departuredate} onChange={handleChange} />
                                </div>
                                <div className="text-field-wrapper p-l p-r col-6">
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
                        <input type='submit' value='Hotels Finden' />
                    </div>
                </div>
            </form >
        </div >)
}

export default Hotel