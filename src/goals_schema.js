const {Schema}=require("mongoose");


const goalSchema = new Schema({
    user_id: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    username:{
      type:String,
      required:true,
    },
    descr: {
      type: String,
      required: true,
      description: "Description of the goal",
    },
    limit_date: {
      type: Date,
      required: true,
      description: "Limit to achieve the goal",
    },
    s3_imgName_original: {
      type: String,
      required: true,
      description: "Name of file in the S3 bucket",
    },
    s3_imgName_latest: {
      type: String,
      required: true,
      description: "Name of file in the S3 bucket",
    },
    cant_pix_xday:{
      type:Number,
      require:true,
      description:"Quantity of pixels to diffum per day"

    },
    last_diffumDate: {
      type: Date,
      required: true,
    },
    expired: {
      type: Boolean,
      required: false,
      default: false,
      description: "Indicates if the goal has expired"
    },

    completed:{
      type: Boolean,
      required: true,
      default: false,
      description: "Indicates if the goal has been completed"
    },
    s3_imgName_completed:{
      type: String,
      required: false,
      default: "",
      description: "Name of file in the S3 bucket when the goal is completed"
    }
  }, {
    timestamps: { createdAt: true, updatedAt: false }
});

module.exports={goalSchema};