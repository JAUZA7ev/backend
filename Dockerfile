FROM node:23

WORKDIR /app

ENV PORT 3000

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "node", "./src/server/server.js" ]