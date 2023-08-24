import express from 'express';
import { findAll } from '../database/schema/users';

export const getAllUsers = async (_req: express.Request, res: express.Response) => {
    try {
        const users = await findAll();
        return res.status(200).json(users);
    } catch (e) {
        console.log(e);
        return res.sendStatus(400);
    }
};