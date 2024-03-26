
import readTicketsByUser from "../../../server/mongodb/actions/readTicketsByUser";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const result = await readTicketsByUser(req.query);
        if (result) {
            return res.status(200).json(result);
        } else {
            return res.status(500).send('Failed');
        }
    } else {
        res.status(405).send('Method not allowed');
    }
}