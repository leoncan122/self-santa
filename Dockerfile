FROM node:lts-alpine

WORKDIR /usr/src/app/selfsanta-web

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build


EXPOSE 5173

CMD ["npm", "build"]