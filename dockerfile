# Étape 1: Utilisation de Node.js pour builder l'application Angular
FROM node:16 AS build

WORKDIR /app

# Copier le package.json et installer les dépendances
COPY angular/src/package*.json ./
RUN npm install

# Copier le reste des fichiers du projet Angular
COPY angular/src/ ./

# Construire l'application Angular (mode production)
RUN npm run build --prod
