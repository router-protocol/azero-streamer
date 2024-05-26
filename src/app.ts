import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import logger from './logger';
import { startStreamerService } from './streamer';
import { DBInstance, initializeMongoDB } from './db/mongoDB';
import { healthCheck } from './routes/healthCheck';
import { fetchLogs } from './routes/getLogs';
import { healthCheckService } from './utils/healthCheckService';
import { ALERTER_ACTIVE } from './constant';
require("dotenv").config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 6900;

app.use(cors());

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, the Azero streaming service is working!');
});

app.use('/', healthCheck);
app.use('/', fetchLogs); // Fetch logs route

async function main() {
    try {
        await initializeMongoDB();
        app.listen(PORT, () => logger.info(`Server running on http://localhost:${PORT}`));
        startStreamerService();
    } catch (error) {
        logger.error(`Error occurred: ${error}`);
    }
}

main();
let continousAlerts = 1;
if (ALERTER_ACTIVE) {
    setInterval(async () => {
        // do health check every 5 minutes
        if (!DBInstance) {
            const alerted = await healthCheckService();
            if (alerted) {
                continousAlerts++;
            } else {
                continousAlerts = 1;
            }
        }
    }, continousAlerts * 5 * 60 * 1000);
}
