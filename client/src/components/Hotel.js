import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Hotel = ({ inputs, setInputs, setHotels }) => {

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

        e.preventDefault()
        try {
            const outboundarrivalairport = inputs.outboundarrivalairport
            const departuredate = inputs.departuredate
            const returndate = inputs.returndate
            const countadults = inputs.countadults
            const countchildren = inputs.countchildren
            const response = await axios.get('http://localhost:8000/findhotels', { params: {outboundarrivalairport, departuredate, returndate, countadults,countchildren} })
            const success = response.status === 200
            setHotels(response.data)
            console.log(response.data)
            if (success) navigate('/results')

        } catch (err) {
            console.log(err)
        }
    }

    return (<form className="search" onSubmit={startSearch}>
        <div className="text-field-wrapper">
            <label for='reiseziel'>Reiseziel oder Hotel</label>
            <select onChange={e => setInputs(prev => ({...prev, ["outboundarrivalairport"]: e.target.value}))} name='outboundarrivalairport' value={inputs.outboundarrivalairport}>
                <option>PMI</option>
                <option ></option>
            </select>
           
        </div>
        <div className="multi-input-wrapper">
            <div className="text-field-wrapper multi-input-2">
                <label for='hinreise'>Hinreise</label>
                <input required={true} type='date' name='departuredate' value={inputs.departuredate} onChange={handleChange} />
            </div>
            <div className="text-field-wrapper multi-input-2">
                <label for='rückreise'>Rückreise</label>
                <input required={true} type='date' name='returndate' value={inputs.returndate} onChange={handleChange} />
            </div>
        </div>
        <div className="multi-input-wrapper">
            <div className="text-field-wrapper multi-input">
                <label for='erwachsene'>Erwachsene</label>
                <input required={true} type='number' placeholder='2' name='countadults' value={inputs.countadults} onChange={e => setInputs(prev => ({...prev, ["countadults"]: e.target.value}))} />
            </div>
            <div className="text-field-wrapper multi-input">
                <label for='kinder'>Kinder</label>
                <input required={true} type='number' placeholder='1' name='countchildren' value={inputs.countchildren} onChange={e => setInputs(prev => ({...prev, ["countchildren"]: e.target.value}))} />
            </div>
            <div className="text-field-wrapper multi-input">
                <label for='zimmer'>Zimmer</label>
                <input type='number' placeholder='1' name='room' value={inputs.room} onChange={e => setInputs(prev => ({...prev, ["room"]: e.target.value}))} />
            </div>
        </div>
        <div className="text-field-wrapper">
            <input type='submit' value='Hotels Finden' />
        </div>
    </form>)
}

export default Hotel