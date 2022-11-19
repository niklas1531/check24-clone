PORT = 8000
const express = require('express')
const axios = require('axios')
const cors = require('cors')
const { MongoClient } = require('mongodb')

const app = express()
const uri = 'mongodb+srv://niklasminth:check24challenge@cluster0.cgwhtg9.mongodb.net/Cluster0?retryWrites=true&w=majority'
app.use(express.json())
app.use(cors())


app.get('/', (req, res) => {
    res.json('Hello to my app')
})


// Get all hotels
app.get('/hotels', async (req, res) => {
    const client = new MongoClient(uri)

    try {
        await client.connect()
        const database = client.db('app-data')
        const hotels = database.collection('hotels')

        const returnedHotels = await hotels.find().toArray()
        res.send(returnedHotels)

    } finally {
        await client.close()
    }
})

// Get offers for specific hotel
app.get('/offersForHotel', async (req, res) => {
    const client = new MongoClient(uri)
    const { id, outboundarrivalairport, departuredate, returndate, countadults, countchildren } = req.query

    try {
        await client.connect()
        const database = client.db('app-data')
        const hotels = database.collection('offers')

       
        const returnedHotels = await hotels.aggregate([
            {
                $match: { hotelid: id, outboundarrivalairport: outboundarrivalairport, departuredate: { $regex: departuredate }, returndate: { $regex: returndate }, countadults: countadults, countchildren: countchildren }
            }
        ]).toArray()

        console.log(returnedHotels)
        res.send(returnedHotels)
    } finally {
        await client.close()
    }
})
// Get offers for specific hotel
app.get('/offersForFlightHotel', async (req, res) => {
    const client = new MongoClient(uri)
    const { id, outboundarrivalairport,outbounddepartureairport, departuredate, returndate, countadults, countchildren } = req.query

    try {
        await client.connect()
        const database = client.db('app-data')
        const hotels = database.collection('offers')

       
        const returnedHotels = await hotels.aggregate([
            {
                $match: { hotelid: id, outbounddepartureairport: outbounddepartureairport,outboundarrivalairport: outboundarrivalairport, departuredate: { $regex: departuredate }, returndate: { $regex: returndate }, countadults: countadults, countchildren: countchildren }
            }
        ]).toArray()

        console.log(returnedHotels)
        res.send(returnedHotels)
    } finally {
        await client.close()
    }
})

//Get offers with Hotel Search
app.get('/findhotels', async (req, res) => {
    const client = new MongoClient(uri)
    const { outboundarrivalairport, departuredate, returndate, countadults, countchildren } = req.query

    try {
        await client.connect()
        const database = client.db('app-data')
        const hotels = database.collection('offers')

       
        const returnedHotels = await hotels.aggregate([
            {
                $match: { outboundarrivalairport: outboundarrivalairport, departuredate: { $regex: departuredate }, returndate: { $regex: returndate }, countadults: countadults, countchildren: countchildren }
            },
            {
                $group: {
                    _id: '$hotelid',
                    total: {
                        $count: {}
                    }
                }
            }
        ]).toArray()

        console.log(returnedHotels)
        res.send(returnedHotels)
    } finally {
        await client.close()
    }
})

// Get offers with Flight&Hotel Search
//Get offers with Hotel Search
app.get('/findflightshotels', async (req, res) => {
    const client = new MongoClient(uri)
    const { outboundarrivalairport, outbounddepartureairport, departuredate, returndate, countadults, countchildren } = req.query

    try {
        await client.connect()
        const database = client.db('app-data')
        const hotels = database.collection('offers')

       
        const returnedHotels = await hotels.aggregate([
            {
                $match: { outboundarrivalairport: outboundarrivalairport, outbounddepartureairport: outbounddepartureairport,departuredate: { $regex: departuredate }, returndate: { $regex: returndate }, countadults: countadults, countchildren: countchildren }
            },
            {
                $group: {
                    _id: '$hotelid',
                    total: {
                        $count: {}
                    }
                }
            }
        ]).toArray()

        console.log(returnedHotels)
        res.send(returnedHotels)
    } finally {
        await client.close()
    }
})



app.listen(PORT, console.log(`Server is running on PORT: ${PORT}`))