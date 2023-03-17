import mongoose from 'mongoose';
const { Schema } = mongoose;

const ReserveSchema = new Schema({

    guestname:{
        type:String,
        required: true,
    },
    numPeople:{
        type:String,
        required: true,
    },
    numChildren:
        [{number: Number, age:{type: [Number]}}],
    numAdults:{
        type:Number,
        required: true,
    },
    unavailableDates:{
        type:[Date],
        required: true,
    },
    price:{
        type:Number,
        required: true,
    },
    desc:{
        type:String,
    },
    isCompleted:{
        type:Boolean,
        default:false
    },
    payment_intent:{
        type:String,
        required: true,
    },
  }, {
    timestamps:true
  }
);

export default mongoose.model("Reserve", ReserveSchema)