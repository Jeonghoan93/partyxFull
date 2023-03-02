import mongoose from 'mongoose';
const { Schema } = mongoose;

const eventSchema = new Schema({
    eventId: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
    }, 
    desc: {
        type: String,
        required: true,
    }, 
    totalStarts: {
        type: Number,
        default: 0,
    }, 
    starNumber: {
        type: Number,
        default: 0,
    },
    eventType: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    cover: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: false,
    },
    shortTitle: {
        type: String,
        required: true,
    },
    shortDesc: {
        type: String,
        required: true,
    },
    numberGuests: {
        type: Number,
        default: 0,
    },
    features: {
        type: [String],
        required: false,
    },
    sales: {
        type: Number,
        default: 0,
    },
    creator: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User'
    },
},{
    timestamps: true,
});

export default mongoose.model('Event', eventSchema);