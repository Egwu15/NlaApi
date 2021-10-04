import { createUser } from "../service/user.service";
import { Request, Response } from "express";
import { omit } from "lodash";
import log from "../logger";

export async function createUserHandler(req: Request, res: Response) {
    try {
        const user = await createUser(req.body);
        res.send(omit(user.toJSON(), "password"),)
    } catch (error:any) {
        return res.status(409).send(`${error}`);

    }

}

export async function createUserSectionHandler(req: Request, res: Response){
    try {
        
    } catch (error) {
        
    }
}