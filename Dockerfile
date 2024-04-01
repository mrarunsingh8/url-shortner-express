FROM node:20

WORKDIR /app/src

COPY package*.json ./

COPY . .

RUN npm ci

RUN npm install pm2 -g

EXPOSE 3000

#CMD ["pm2-runtime", "--experimental-modules", "index.js"]
CMD [ "node", "--experimental-modules", "index.js" "--env development"]