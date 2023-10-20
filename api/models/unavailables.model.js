import mongoose, { Schema, Types } from "mongoose";

const unavailablesSchema = Schema({
    reserveId: {
        type: Schema.Types.ObjectId,
        ref: 'Reserve',
        required: true
        },
    dates: {
        type: [String],
        required: true
        }
}, {timestamps: true})  

export default mongoose.model("Unavailables", unavailablesSchema)