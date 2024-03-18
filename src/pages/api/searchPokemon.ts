// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import api from "@/lib/axios";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    name?: string;
    type?: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>,
) {
    const response = await api.get("pokemon?limit=1181")

    res.send(response.data)
}
