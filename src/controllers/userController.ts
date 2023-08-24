import express from 'express';
import { findAll } from '../service/baseService';
import { User, users } from '../database/schema/users';


export const getAllUsers = async (_req: express.Request, res: express.Response) => {
    try {
        const results : User[] = await findAll<User>(users);
        return res.status(200).json(results);
    } catch (e) {
        console.log(e);
        return res.sendStatus(400);
    }
};