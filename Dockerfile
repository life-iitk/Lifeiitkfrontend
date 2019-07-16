#Stage 0 : the build stage
FROM node:apline as frontend-build
WORKDIR /frontend
COPY package*.json /frontend/
RUN npm install
COPY ./ /frontend/
RUN npm run build

#Stage 1 : migrating to an nginx container as CRA does not need node for SSR

FROM nginx:alpine
RUN apk update && apk add bash
COPY --from=frontend-build /frontend/build /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
