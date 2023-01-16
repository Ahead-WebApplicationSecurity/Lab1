FROM node:alpine

RUN apk add build-base zlib-dev autoconf automake nasm libtool libpng-dev jpeg-dev g++ gcc libgcc libstdc++ linux-headers make python3

RUN mkdir /app
RUN mkdir /speedtest

COPY server-1 /speedtest
COPY server-2 /speedtest
COPY server-3 /speedtest

COPY package.json /app
COPY yarn.lock /app
WORKDIR /app
RUN yarn install

WORKDIR /app
COPY . /app
COPY flag.txt /flag.txt
WORKDIR /app/webapp
RUN npm install
RUN yarn build
EXPOSE 3000 8081
RUN chmod +x /app/run.sh
CMD ["/app/run.sh"]
