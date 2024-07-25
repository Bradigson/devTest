FROM node:16

RUN mkdir -p /user/src/app

WORKDIR /user/src/app

COPY package*.json ./

RUN npm instal 

COPY . .   

EXPOSE 2000

CMD ["npm", "run", "start"]