FROM overhandtech/alpine-node-build

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json .
# COPY ./package-lock.json .
RUN npm install

COPY . .

EXPOSE 3000 3000

CMD [ "./docker/docker-entrypoint.sh" ]
