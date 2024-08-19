# Steps to Run Azero Streamer

Ensure that you have Docker, Node.js, and Yarn installed on your machine. If not, follow the installation guides below:

[Docker Installation Guide](https://docs.docker.com/get-docker/)

[Node.js Installation Guide](https://nodejs.org/en/download/)

[Yarn Installation Guide](https://classic.yarnpkg.com/en/docs/install)

1. **Git Clone**

`git clone https://github.com/router-protocol/azero-streamer.git`

2. **Create `.env` file**
Update the following environment variables from `.env.example` file:
```yaml
- MONGO_DB_URI=mongodb://mongodb:27018/
- NETWORK=testnet
- START_BLOCK=SOME_BLOCK_NUMBER # omit this if you want to start from the 0th block
- PORT=6901
- ALERTER_ACTIVE=true
- SLACK_WEBHOOK_URL=**https**://hooks.slack.com/services/FOR/YOUR/SLACK/WEBHOOK
```
`MONGO_DB_URI` is the URI of the MongoDB instance. We are running MongoDB locally, you have to use port defined in mongodb. `NETWORK` either will be mainnet, testnet or alpha-devnet. `START_BLOCK` is block to be started from during intial start. `PORT` to be exposed. `ALERTER_ACTIVE` and `SLACK_WEBHOOK_URL` is for slack health alerter.
`START_BLOCK` is the overide block to be started from. If this is set, all other condition will be ignored.

# Running the Azero Streamer

1. **Run Start Db Script**
`bash scripts/start-db.sh`

2. **Run Docker Swarm Script**
`bash scripts/swarm-start.sh`

3. **Health Check for service**
`curl http://localhost:6903/health`