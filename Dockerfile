FROM node:18-alpine

EXPOSE 3000

WORKDIR /anas-portfolio

COPY package.json .

RUN npm install

COPY . .

CMD [ "npm","build"]