import mongoose from 'mongoose';
const { Schema } = mongoose;

const ReviewsSchema = new Schema({
    userId:{
        type:String,
        required:true,
    },
    stars:{
        type:Number,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
  }, {
    timestamps:true
  }
);

export default mongoose.model("Reviews", ReviewsSchema)