import { connection } from '../config/index';
import { Request, Response } from 'express';

export const brokerController = async (req: Request, res: Response) => {
    try {
        // check screte header
        if (req.headers.secret !== process.env.SECRET!) {
            return res.status(401).json({
                message: 'Unauthorized'
            });
        }

        // check if req.body is empty
        if (Object.keys(req.body).length === 0) {
            return res.status(400).json({
                message: 'Bad Request'
            });
        }

        (await connection).createChannel().then((channel) => {
            channel.assertQueue("queue");
            channel.sendToQueue(
                "queue",
                Buffer.from(JSON.stringify({ ...req.body }))
            );
        });

        return res.status(200).json({
            message: 'Success'
        });

    } catch (e: any) {
        return res.status(500).json({
            message: e?.message!
        });
    }
}