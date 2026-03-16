# DevOps Starter Kit
.NET 8 | Angular 17 | Docker | Jenkins

Un boilerplate orienté production que j'ai monté pour bootstraper mes projets persos rapidement.
L'idée c'est d'avoir une archi clean, déjà conteneurisée et prête à être packagée via CI/CD.

## Stack technique
- Backend : C# / .NET 8 Minimal API avec configuration CORS et Swagger
- Frontend : Angular 17 (Standalone Components)
- Conteneurisation : Docker (Multi-stage builds) et docker-compose
- CI/CD : Pipeline as code avec Jenkins (Jenkinsfile inclus)
- Infra : Playbook Ansible pour le provisionning Azure

## Comment lancer le projet en local
1. Cloner le dépôt
2. A la racine, exécuter : docker-compose up -d --build
3. Le Front est accessible sur http://localhost
4. L'API (Swagger) est accessible sur http://localhost:8080/swagger

## L'approche infrastructure
Le dossier `ansible/` contient le playbook que j'utilise pour provisionner une VM Linux sur Azure, y installer Docker, et faire tourner cette stack en une seule commande. Le pipeline Jenkins va se charger de build l'API et le Front avant de créer les images Docker.
