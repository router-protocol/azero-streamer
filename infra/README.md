
## k8s secret

kubectl get secret azero-streamer-env --namespace azero-streamer -o jsonpath='{.data.*}' | base64 -d

kubectl create secret generic azero-streamer-env \
  --namespace testnet-forwarder \
  --from-file=./.env \
  --dry-run=client -o yaml | kubectl apply -f -

## helm upgrade

helm upgrade --install azero-streamer ./infra/helm --values ./infra/helm/values.mainnet.yaml --create-namespace 

## observations
1. pods show periodic spikes in memory use could be due to a cron job.
`suggestion: create cronjob k8s resources to offload the periodic task to job`

