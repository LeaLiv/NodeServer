const Event=require('../Models/Event.js');
// get event - מחזיר את כל האירועים
const getEvents = async (req, res) => {
    try {
        const events = await Event.find()
        res.send(events)
    } catch (err){
        res.status(404).send('Events not found');
        console.log(err)
    }
}
//get event/:id - מחזיר אירוע בודד לפי המזהה שלו
const getEvent = async (req, res) => {
    try {
        const event = await Event.findOne({id: req.params.id})
        res.send(event)
    } catch (err){
        res.status(404).send('Event not found');
        console.log(err)
    }
}
// post event - יצירת אירוע חדש
const postEvent = async (req, res) => {
    try {
        const event = new Event({
            id: req.body.id,
            name: req.body.name,
            description: req.body.description,
            producerEmail: req.body.producerEmail
        })
        await event.save()
    } catch (err){
        res.status(400).send('Event not created');
        console.log(err)
    }
}
// put event - עדכון פרטי אירוע
const putEvent= async (req, res) => {
    try{
        await Event.updateOne({id: req.params.id}, {
            name: req.body.name,
            description: req.body.description,
            producerEmail: req.body.producerEmail
        })
    }
    catch (err){
        res.status(400).send('Event not updated');
        console.log(err)
    }
};
// delete event - מחיקת אירוע
const deleteEvent = async (req, res) => {
    try {
        await Event.deleteOne({id: req.params.id})
        console.log('Event deleted');
    } catch (err){
        res.status(400).send('Event not found');
        console.log(err)
    }
}
module.exports = {getEvents, getEvent, postEvent, putEvent, deleteEvent};