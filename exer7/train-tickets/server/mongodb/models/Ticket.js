import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
    lineColor : {
        type : String,
        required : true
    },
    station : {
        type : String,
        required : true
    },
    userId : {
        type : String,
        required : true
    }
});

export default mongoose.model("Ticket", ticketSchema);