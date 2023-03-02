import express from 'express';
import mongoose from 'mongoose'; 
import dotenv from 'dotenv';
//import routes
import userRoute from './routes/user.route.js';
import conversationRoute from './routes/conversation.route.js';
import messageRoute from './routes/message.route.js';
import eventRoute from './routes/event.route.js';
import reviewRoute from './routes/review.route.js';
import ticketRoute from './routes/ticket.route.js';
import authRoute from './routes/auth.route.js';
import emailRoute from './routes/email.route.js';

import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();

const app = express();

mongoose.set('strictQuery', true); 

const connect = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
    }
};

app.use(cors({ 
    origin: 'http://localhost:5173', 
    credentials: true,
    optionsSuccessStatus: 200
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/email", emailRoute);
app.use('/api/users', userRoute);
app.use('/api/conversations', conversationRoute);
app.use('/api/messages', messageRoute);
app.use('/api/events', eventRoute);
app.use('/api/reviews', reviewRoute);
app.use('/api/tickets', ticketRoute);
app.use('/api/auth', authRoute);

app.use((err, req, res, next) => {
    const errStatus = err.status || 500;
    const errMessage = err.message || "Something went wrong";

    return res.status(errStatus).send(errMessage);
});

app.listen(8800, () => {
    connect();
    console.log('A pp listening on port 8800!');
});