import { Express, Response, Request } from "express";
import { createUserHandler,  createUserSectionHandler } from "./controller/user.controller";
import validateRequest from "./middleware/validateRequest";
import { createUserSchema , createUserSectionsSchema} from "./schema/user.schema";

export default function (app: Express) {
    app.get("/healthcheck", (req: Request, res: Response) => res.sendStatus(200));
    app.post("/api/users", validateRequest(createUserSchema), createUserHandler);
    app.post("app/sessions", validateRequest(createUserSectionsSchema), createUserSectionHandler)
    
}