FROM node:18

WORKDIR /app/src

COPY package*.json ./

COPY . .

RUN npm ci

EXPOSE 3000

CMD [ "npm", "run", "start"]
#CMD [ "npm", "start" ]