const {Schema} = require('mongoose');

const userSchema = new Schema({
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
})

module.exports={userSchema};
