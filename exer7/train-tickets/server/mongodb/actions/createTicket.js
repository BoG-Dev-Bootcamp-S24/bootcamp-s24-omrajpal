import connectDB from "..";
import Ticket from "../models/Ticket";

export default async function createTicket(data) {
    try {
        await connectDB();
        console.log(data);
        const ticket = new Ticket(data);
        await ticket.save();
        
    } catch (e) {
        console.log(e);
        throw e;
    }
}