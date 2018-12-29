#!/bin/sh
NAME=$(basename $(dirname `pwd`))

CONTAINER=`docker ps -a -q --filter="name=$NAME"`
if [ -n "$CONTAINER" ]; then
    docker rm $CONTAINER
fi

CONTAINER=`docker ps -a -q --filter="name=$NAME"`

docker run -it \
    --name $NAME \
    --init \
    -v `pwd`/../docker:/usr/src/app/docker \
    -v `pwd`/../src:/usr/src/app/src \
    -v `pwd`/../scripts:/usr/src/app/scripts \
    -v `pwd`/../config:/usr/src/app/config \
    -v `pwd`/../public:/usr/src/app/public \
    -p 3000:3000 \
    coderbunker/$NAME:latest \
    $*
