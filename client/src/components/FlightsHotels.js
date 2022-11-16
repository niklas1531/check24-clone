const FlightsHotels = ({ flightsHotels }) => {

    const openDetails = (offer) => {

    }
    return (
        <div>
         <h2>{flightsHotels?.length} Ergebnisse</h2>
            {flightsHotels?.map(offer => <div className="loadedhotels">
                <div className="imgPlaceholder">

                </div>
                <div className="details">
                    <p> {offer?.outbounddepartureairport} → {offer?.outboundarrivalairport}</p>
                    <p>Airline: {offer?.outboundairline}</p>
                    <p>Hinreise: {offer?.departuredate}</p>
                    <p>Rückreise:{offer?.returndate}</p>
                    <p>Anzahl Erwachsene: {offer?.countadults}</p>
                    <p>Anzahl Kinder: {offer?.countchildren}</p>
                    <p>Preis: {offer?.price}€</p>
                    <button onClick={openDetails(offer)}>Mehr Erfahren</button>
                </div>
            </div>)}
        </div>)
}

export default FlightsHotels