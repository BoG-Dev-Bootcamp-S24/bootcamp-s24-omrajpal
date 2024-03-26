
import connectDB from "..";
import Ticket from "../models/Ticket";

export default async function readTicketsByUser(userId) {
    try {
        await connectDB();
        const tickets = await Ticket.find(userId);
        return tickets;
    } catch (e) {
        console.log(e);
        throw e;
    }
}