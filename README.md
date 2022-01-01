# Data Science Kit


## Introdution
DataScienceKit is a set of frameworks and libraries and SDKs for building, running and deploying data science applications using a modern toolchain.

## Prerequisites
Docker Desktop for <OS> (Mac)

# Steps

Pull the official python base image - 
~~~
docker pull python:3.5
Status: Downloaded newer image for python:3.5
docker.io/library/python:3.5

Run in interactive mode (remove when done)
==> docker run -it python:3.5 bash

List all docker containers

docker ps -a
or
docker ps --all

List stopped docker containers
docker ps --filter "status=exited"

List running docker containers
docker ps
CONTAINER ID   IMAGE        COMMAND   CREATED          STATUS          PORTS     NAMES
2b5bf203cf02   python:3.5   "bash"    16 minutes ago   Up 16 minutes             relaxed_cray
~~~

## Create container from scratch

Create Dockerfile as below
~~~
FROM node:16.7.0

WORKDIR /code

ENV PORT 80

COPY package.json /code/package.json

COPY src/app.ts /code/src/app.ts

RUN npm install

COPY . /code

CMD ["node", "src/app.ts"]

~~~

## Build the docker image
~~~

==> docker help build

Usage:  docker build [OPTIONS] PATH | URL | -

==> docker build --tag netpost-node-express-typescript-postgres .
~~~


## Run the docker image 
~~~
==> docker run netpost-node-express-typescript-postgres
~~~

## Run detached
~~~
==> docker run -p 8080:80 --name hello-netpost-node-express-typescript-postgres -d netpost-node-express-typescript-postgres
~~~

## View list of images on local machine

~~~
==> docker images
REPOSITORY                                 TAG       IMAGE ID       CREATED          SIZE
netpost-node-express-typescript-postgres   latest    2779a09ce422   2 minutes ago    954MB
<none>                                     <none>    b47d194b05a7   12 minutes ago   954MB
python                                     latest    07de2f474278   10 days ago      864MB
ubuntu                                     latest    d5ca7a445605   2 months ago     65.6MB
node                                       16.7.0    1c303479e76c   4 months ago     853MB
python                                     3.5       ca5c413738f0   15 months ago    817MB
~~~

## View list of all containers on local machine

~~~
==> docker ps -a
CONTAINER ID   IMAGE                                      COMMAND                  CREATED             STATUS                           PORTS     NAMES
fc9fddac359c   netpost-node-express-typescript-postgres   "docker-entrypoint.s…"   About an hour ago   Exited (0) About an hour ago               goofy_curie
da168d362b96   e41e04fb2547                               "docker-entrypoint.s…"   About an hour ago   Exited (1) About an hour ago               pensive_leakey
6225c40001f5   f40cd55ea90e                               "docker-entrypoint.s…"   About an hour ago   Exited (1) About an hour ago               ecstatic_shamir
28c75cf1fbda   2779a09ce422                               "docker-entrypoint.s…"   About an hour ago   Exited (1) About an hour ago               serene_hertz
01c48c63f27e   3e27c5765d15                               "docker-entrypoint.s…"   About an hour ago   Exited (126) About an hour ago             fervent_keller
2ae64338c177   67184ada384d                               "docker-entrypoint.s…"   About an hour ago   Exited (1) About an hour ago               determined_wing
7252ab911589   d938bd972941                               "docker-entrypoint.s…"   About an hour ago   Exited (1) About an hour ago               priceless_curie
c692cfbc5abd   2779a09ce422                               "docker-entrypoint.s…"   About an hour ago   Exited (1) About an hour ago               pedantic_nightingale
de0e387bf68c   ubuntu                                     "bash"                   2 hours ago         Exited (0) 2 hours ago                     pedantic_aryabhata
2b5bf203cf02   python:3.5                                 "bash"                   3 hours ago         Exited (0) 2 hours ago                     relaxed_cray
9a8679f0c62f   python:3.5                                 "python3"                3 hours ago         Exited (0) 3 hours ago                     jolly_haslett
~~~


## Run local image
~~~
==> docker run --help

Usage:  docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

==> docker run netpost-node-express-typescript-postgres 
~~~

## Run local image in foreground
~~~
==> docker run -it netpost-node-express-typescript-postgres /bin/bash

==> docker ps
CONTAINER ID   IMAGE                                      COMMAND                  CREATED          STATUS          PORTS     NAMES
0adf1262443f   netpost-node-express-typescript-postgres   "docker-entrypoint.s…"   17 seconds ago   Up 15 seconds             youthful_kowalevski
~~~

## Links

https://docs.docker.com/language/python/build-images/