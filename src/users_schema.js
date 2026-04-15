const {Schema} = require('mongoose');

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    provider_type : {
        type:String,
        required:true
    },
    provider_id : {
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        default:null
    }
})

module.exports={userSchema};
