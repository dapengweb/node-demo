FROM node:12

WORKDIR /app

#Install NPM deps
COPY package.json package.json
#Point to internal npm registry
RUN npm set registry http://52.130.87.235:4873/ 
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["node","dist/main.js"]
