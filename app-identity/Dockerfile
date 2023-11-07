FROM node:lts-bookworm-slim

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3030

CMD ls ; yarn migration:run ; yarn seed ; yarn deploy:localhost
