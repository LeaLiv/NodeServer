const  mongoose=require('mongoose')

const Schema=mongoose.Schema;
const eventSchema=new Schema({
    id:{
        type:String,
        required:true
    },
    name:String,
    descripition:String,
    producerEmail:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model('Event',eventSchema);