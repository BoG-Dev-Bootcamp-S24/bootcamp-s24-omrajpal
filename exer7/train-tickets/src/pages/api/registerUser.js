import createUser from "../../../server/mongodb/actions/createUser";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const result = await createUser(req.body);
        if (result) {
            return res.status(200).send("Success");
        } else {
            return res.status(500).send("Failed");
        }
    } else {
        res.status(405).send("Method not allowed");
    }
}