FROM node:18

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

EXPOSE 30043 

CMD ["bash", "-c", "node server.js & node main.js"]
