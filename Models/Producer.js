const  mongoose=require('mongoose')

const Schema=mongoose.Schema;
const producerSchema=new Schema({
    email:{
        type:String,
        required:true
    },
    name:String,
    phone:String,
    descripition:String,
});
module.exports=mongoose.model('Producer',producerSchema);