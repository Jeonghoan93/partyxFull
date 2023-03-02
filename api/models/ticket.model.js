import mongoose from 'mongoose';
const { Schema } = mongoose;

const ticketSchema = new Schema({
    eventId: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true, 
    },
    hostId: {
        type: String,
        required: true,
    },
    guestId: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    paymentIntent: {
        type: String,
        required: true,
    },
  },
  {
    timestamps: true,
  }
); 

export default mongoose.model('Ticket', ticketSchema);