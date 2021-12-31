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


==> docker run -it python:3.5 bash

List all docker containers

docker ps -a
or
docker ps --all

List stopped docker containers
docker ps --filter "status=exited"

List running docker containers
docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES




~~~


## Build images

~~~
DOCKER_BUILDKIT=1 docker build .
~~~


## Links

https://docs.docker.com/language/python/build-images/