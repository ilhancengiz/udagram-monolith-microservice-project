kubectl apply -f env-config/aws-secret.yaml
kubectl apply -f env-config/env-secret.yaml
kubectl apply -f env-config/env-configmap.yaml

kubectl apply -f user-api/deployment.yaml
kubectl apply -f user-api/service.yaml

kubectl apply -f feed-api/deployment.yaml
kubectl apply -f feed-api/service.yaml

kubectl apply -f reverse-proxy/deployment.yaml
kubectl apply -f reverse-proxy/service.yaml

kubectl apply -f frontend/deployment.yaml
kubectl apply -f frontend/service.yaml