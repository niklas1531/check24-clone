PORT = 8000
const express = require('express')
const axios = require('axios')
const cors = require('cors')
const {MongoClient} = require('mongodb')

const app = express()
const uri = 'mongodb+srv://niklasminth:check24challenge@cluster0.cgwhtg9.mongodb.net/Cluster0?retryWrites=true&w=majority'

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json('Hello to my app')
})


// Get all hotels
app.get('/hotels', async (req, res) => {
    const client = new MongoClient(uri)
    // const userId = req.query.userId

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

// Get first 100 offers
app.get('/offers', async (req, res) => {
    const client = new MongoClient(uri)
    // const userId = req.query.userId

    try {
        await client.connect()
        const database = client.db('app-data')
        const hotels = database.collection('offers')

        const returnedHotels = await hotels.find().limit(50).toArray()
        res.send(returnedHotels)

    } finally {
        await client.close()
    }
})
// Get individual hotel
app.get('/hotel', async (req, res) => {
    const client = new MongoClient(uri)
    // const userId = req.query.userId

    try {
        await client.connect()
        const database = client.db('app-data')
        const hotels = database.collection('hotels')

        const query = {category_stars: "4"}
        const returnedHotels = await hotels.findOne(query)
        res.send(returnedHotels)

    } finally {
        await client.close()
    }
})




app.listen(PORT, console.log(`Server is running on PORT: ${PORT}`))