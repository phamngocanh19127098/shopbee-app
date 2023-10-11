FROM node:12-alpine

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install node-gyp -g --force
RUN npm install bcrypt --save
RUN npm install --force
COPY . .

ARG DOCKER_ENV=local
ENV NODE_ENV=$DOCKER_ENV
EXPOSE 5000

CMD ["npm", "run","start"]