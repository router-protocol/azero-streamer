import { Router, Request, Response } from 'express';
import logger from '../logger';
import { getLogsFromBlockHeightToBlockHeight } from '../db/mongoDB/action/backLog';
import { getCollection } from '../db/mongoDB';
import { CONTRACTS_TO_TRACK } from '../streamer';
import { keysToSnakeCase } from '../utils/caseConverter';

const fetchLogs = Router();

fetchLogs.get('/fetch-logs', async (req: Request, res: Response) => {
    const reqStartBlock = Number(req.query.startBlock);
    const reqEndBlock = Number(req.query.endBlock);
    try {
        const reqLimit = Number(req.query.numOfBlocks);
        const reqContract = typeof req.query.contract === 'string' ? req.query.contract : '';

        if (isNaN(reqStartBlock)) {
            res.status(400).json({ success: false, message: 'Invalid startBlock' });
            return;
        }

        if (isNaN(reqLimit) && isNaN(reqEndBlock)) {
            res.status(400).json({ success: false, message: 'Invalid limit or end block' });
            return;
        }

        if (!reqContract || !CONTRACTS_TO_TRACK.includes(reqContract.toLowerCase())) {
            res.status(400).json({ success: false, message: 'Invalid or missing Contract Address' });
            return;
        }

        const startBlock = reqStartBlock;
        let limit = isNaN(reqLimit) ? 1000 : reqLimit;
        limit = limit > 10000 ? 10000 : limit;
        let endBlock = isNaN(reqEndBlock) ? startBlock + limit : reqEndBlock;

        logger.info(`Fetching logs from block ${startBlock} to ${endBlock} for contract ${reqContract}`);
        const blocklogsCollection = await getCollection(`blocklogs_${reqContract}`);
        if (!blocklogsCollection) {
            logger.error(`Collection blocklogs_${reqContract} not found`);
            res.status(500).json({ success: false, message: 'Collection not found' });
            return;
        }

        const result = await getLogsFromBlockHeightToBlockHeight(blocklogsCollection as any, { startBlock, endBlock });
        res.json(keysToSnakeCase(result));
    } catch (error) {
        logger.error(`Error fetching data from block ${reqStartBlock} to ${reqEndBlock}: ${error}`);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

export { fetchLogs };
