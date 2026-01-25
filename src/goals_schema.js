const {Schema}=require("mongoose");


const goalSchema = new Schema({
    user_id: {
      type: Schema.Types.ObjectId,
      required: false,
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
    }
  }, {
    timestamps: { createdAt: true, updatedAt: false }
});

module.exports={goalSchema};