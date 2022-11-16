const Hotels = ({ hotels }) => {

    const openDetails = (hotel) => {

    }
    return (
        <div>
            <h2>{hotels?.length} Ergebnisse</h2>
            {hotels?.map(hotel => <div className="loadedhotels">
                <div className="imgPlaceholder">

                </div>
                <div className="details">
                    {/* <p>{hotel?.hotelid}</p> */}
                    <p>Reiseziel: {hotel?.outboundarrivalairport}</p>
                    <p>Hinreise: {hotel?.departuredate}</p>
                    <p>Rückreise:{hotel?.returndate}</p>
                    <p>Anzahl Erwachsene: {hotel?.countadults}</p>
                    <p>Anzahl Kinder: {hotel?.countchildren}</p>
                    <p>Preis: {hotel?.price}€</p>
                    <button onClick={openDetails(hotel)}>Mehr Erfahren</button>
                </div>
            </div>)}
        </div>)
}

export default Hotels