
const Producer = require("../Models/Producer.js");
// get producer - מחזיר פרטי מפיק בודד, לפי האימייל של המפיק
const getProducer = async (req, res) => {
    try {
        const producer = await Producer.findOne({email: req.params.email})
        res.send(producer)
    } catch (err){
        res.status(404).send('Producer not found');
        console.log(err)
    }
}
// post producer - יצירת מפיק חדש
const postProducer = async (req, res) => {
    try {
        const producer = new Producer({
            email: req.body.email,
            phone: req.body.phone,
            name: req.body.name,
            description: req.body.description
        })
        await producer.save()
    } catch (err){
        res.status(400).send('Producer not created');
        console.log(err)
    }

}
// put producer - עדכון פרטי מפיק
const putProducer = async (req, res) => {
    try {
        await Producer.updateOne({email: req.params.email}, {
            phone: req.body.phone,
            name: req.body.name,
            description: req.body.description
        })
    } catch (err){
        res.status(400).send('Producer not updated');
        console.log(err)
    }
};

module.exports = {getProducer, postProducer, putProducer};