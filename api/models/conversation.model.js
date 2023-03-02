import mongoose from 'mongoose';
const { Schema } = require('mongoose');

const conversationSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    sellerId: {
        type: String,
        required: true,
    },
    buyerId: {
        type: String,
        required: true,
    },
    readByHost: {
        type: Boolean,
        required: true,
    },
    readByGuest: {
        type: Boolean,
        required: true,
    },
    lastMessage: {
        type: String,
        required: false,
    }, 
},
{
    timestamps: true,
}
)

export default mongoose.model('Conversation', conversationSchema);