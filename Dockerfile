FROM node:18

WORKDIR /app/src

COPY package*.json ./

COPY . .

RUN npm ci

EXPOSE 3000

RUN npm install pm2 -g

CMD ["pm2-runtime", "index.js"]

#CMD [ "npm", "run", "start"]
#CMD [ "npm", "start" ]