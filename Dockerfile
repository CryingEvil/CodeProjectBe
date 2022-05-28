FROM node:14-alpine
WORKDIR /projectbe1
COPY package.json ./projectbe1
RUN npm install
COPY . .
CMD ["npm","start"]