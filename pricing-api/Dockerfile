FROM node:lts-bookworm-slim

RUN apt-get update -y && apt-get install -y openssl

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

EXPOSE 3000

CMD ls ; npx prisma generate ; yarn migration:run ; yarn seed ; yarn deploy:localhost
