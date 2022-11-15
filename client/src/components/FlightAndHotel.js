import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const FlightAndHotel = ({inputs, setInputs}) => {
    

    const navigate = useNavigate()
    const startSearch = () => {
        navigate('/results')
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
    return (<form className="search" onSubmit={startSearch}>
        <div className="text-field-wrapper">
            <label for='reiseziel'>Reiseziel oder Hotel</label>
            <input required={true} type='text' placeholder="Alle Reiseziele zum entdecken" name='outboundarrivalairport'  value={inputs.outboundarrivalairport}
                            onChange={handleChange}
 />
        </div>
        <div className="text-field-wrapper">
            <label for='abflughafen'>Abflughafen</label>
            <input required={true} type='text' placeholder='Deutschland - Alle Abflughäfen' name='outbounddepartureairport' value={inputs.outbounddepartureairport} onChange={handleChange} />
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
                <input required={true} type='number' placeholder='2' name='countadults' value={inputs.countadults} onChange={handleChange}/>
            </div>
            <div className="text-field-wrapper multi-input">
                <label for='kinder'>Kinder</label>
                <input required={true} type='number' placeholder='1' name='countchildren' value={inputs.countchildren} onChange={handleChange}/>
            </div>
            <div className="text-field-wrapper multi-input">
                <label for='zimmer'>Zimmer</label>
                <input required={true} type='number' placeholder='1' name='room' value={inputs.room} onChange={handleChange}/>
            </div>
        </div>
        <div className="text-field-wrapper">
            <input type='submit' value='Reise Finden' />
        </div>
    </form>)
}

export default FlightAndHotel