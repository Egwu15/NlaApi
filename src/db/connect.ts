import mongoose from "mongoose";
import log from "../logger";
import config from "config";




function connect() {
    const url = config.get("dbUri") as string;
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    } as object;
    mongoose.connect(url, connectionParams)
        .then(() => {
            log.info('Connected to database ')
        })
        .catch((err) => {
            log.error(`Error connecting to the database. \n${err}`);
            process.exit(1);
        })
}

export default connect;