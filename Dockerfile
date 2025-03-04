FROM node:22.14.0

WORKDIR /app

COPY package*.json .

RUN npm cache clean --force
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]