const mongoose = require('mongoose');
const express = require('express');
const app = express();
const eventsRoute = require('./Routes/eventsRoute.js');
const producerRoute = require('./Routes/producerRoute.js');
const bodyParser = require('body-parser');
const cors=require('cors')

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://leahl11730:Lea0195!@cluster0.qxme0.mongodb.net/EventProduction")
        console.log('MongoDB is connected')
    } catch (err) {
        console.log(err)
    }
}

connectDB();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/event',eventsRoute);
app.use('/producer',producerRoute);

app.listen(3000, () => {
    console.log('Server is running')
});