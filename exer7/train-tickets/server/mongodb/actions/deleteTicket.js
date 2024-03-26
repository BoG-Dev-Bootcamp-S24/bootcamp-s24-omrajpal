import connectDB from "..";
import Ticket from "../models/Ticket";


export default async function deleteTicket(id) {
    try {
        await connectDB();
        console.log(Ticket.findById(id))
        await Ticket.findByIdAndDelete(id);
        console.log(Ticket.findById(id))
        return true;
    } catch (e) {
        console.log(e);
        return false;
        throw e;
    }
}