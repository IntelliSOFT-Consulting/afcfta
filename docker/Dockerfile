FROM node:14  as build
WORKDIR /app 

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install --quiet

COPY . . 

RUN npm run build


FROM nginx:alpine
COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf 
COPY --from=build /app/build /usr/share/nginx/html 

CMD ["nginx", "-g", "daemon off;"]