FROM node:18

WORKDIR /app/src

COPY package*.json ./

COPY . .

RUN npm ci

EXPOSE 3000

RUN npm install pm2 -g

CMD ["sh", "-c", "pm2-runtime index.js || pm2 reload all"]

#CMD [ "npm", "run", "start"]
#CMD [ "npm", "start" ]