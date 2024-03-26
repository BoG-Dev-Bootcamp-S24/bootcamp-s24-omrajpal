
import deleteTicket from "../../../server/mongodb/actions/deleteTicket";

export default async function handler(req, res) {
    if (req.method === 'DELETE') {
        try {
            await deleteTicket(req.query.ticketId);
            return res.status(200).send('Success');
        } catch {
            return res.status(500).send('Failed');
        }
    } else {
        res.status(405).send('Method not allowed');
    }
}