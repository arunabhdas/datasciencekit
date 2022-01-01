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

CMD ["nodemon", "src/app.ts"]

~~~

Run
~~~

==> docker help build

Usage:  docker build [OPTIONS] PATH | URL | -

==> docker build --tag netpost-node-express-typescript-postgres .
~~~


~~~
==> docker build --tag netpost-node-express-typescript-postgres .
[+] Building 18.5s (11/11) FINISHED                                                                                                                 
 => [internal] load build definition from Dockerfile                                                                                           0.0s
 => => transferring dockerfile: 37B                                                                                                            0.0s
 => [internal] load .dockerignore                                                                                                              0.0s
 => => transferring context: 2B                                                                                                                0.0s
 => [internal] load metadata for docker.io/library/node:16.7.0                                                                                 0.0s
 => [1/6] FROM docker.io/library/node:16.7.0                                                                                                   0.0s
 => [internal] load build context                                                                                                              0.0s
 => => transferring context: 413B                                                                                                              0.0s
 => CACHED [2/6] WORKDIR /code                                                                                                                 0.0s
 => [3/6] COPY package.json /code/package.json                                                                                                 0.0s
 => [4/6] COPY src/app.ts /code/src/app.ts                                                                                                     0.0s
 => [5/6] RUN npm install                                                                                                                     17.8s
 => [6/6] COPY . /code                                                                                                                         0.0s
 => exporting to image                                                                                                                         0.5s 
 => => exporting layers                                                                                                                        0.5s 
 => => writing image sha256:2779a09ce422310a08aed18daa8c05d5a81937fd311418514ec179a6cdce4d09                                                   0.0s
 => => naming to docker.io/library/netpost-node-express-typescript-postgres                                                                    0.0s

Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix them
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


## Links

https://docs.docker.com/language/python/build-images/