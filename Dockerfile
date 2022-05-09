FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD (npm start &);(node server/index.js);
##RUN (node server/index.js&)
##RUN ng serve --o

# production stage
##FROM nginx:stable as production-stage
##COPY --from=build-stage /app/dist/* /var/www
##COPY --from=build-stage /app/build/ /var/www
##RUN rm /etc/nginx/conf.d/default.conf
##COPY ./nginx.conf /etc/nginx/conf.d/default.conf
