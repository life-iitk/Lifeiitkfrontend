FROM node

WORKDIR /frontend
COPY package.json /frontend

RUN yarn install

EXPOSE 3000