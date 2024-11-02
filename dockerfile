#node block

FROM node:alpine3.16 as nodework

WORKDIR /courses

COPY ./package.json  /courses

RUN npm install --force

COPY . .

RUN npm run build



#nginX block

FROM nginx:1.23.0-alpine

WORKDIR /usr/share/nginx//html

RUN rm -rf ./*

COPY --from=nodework /courses/build .

ENTRYPOINT [ "nginx","-g","daemon off;" ]
