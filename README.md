# Data Science Kit



## Introdution
DataScienceKit is a set of frameworks and libraries and SDKs for building, running and deploying data science applications using a modern toolchain.

## Screenshots

### netpost-stack-1
![netpost-stack-1](https://raw.githubusercontent.com/arunabhdas/datasciencekit/main/screenshots/screenshot_dockerhub_image_netpost-stack-1.png)

### web-stack-1
![web-stack-1](https://raw.githubusercontent.com/arunabhdas/datasciencekit/main/screenshots/screenshot_dockerhub_image_web-stack-1.png)



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

==> docker build --tag arunabhdas/netpost-stack-1 .

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


## Tagging for publish
~~~

==> docker build --tag arunabhdas/netpost-stack-1 .

~~~

## Run docker images
~~~
==> docker images
REPOSITORY                                 TAG       IMAGE ID       CREATED         SIZE
arunabhdas/netpost-stack-1                 latest    4278329aa75d   3 hours ago     954MB
netpost-node-express-typescript-postgres   latest    4278329aa75d   3 hours ago     954MB
<none>                                     <none>    e41e04fb2547   4 hours ago     954MB
<none>                                     <none>    f40cd55ea90e   4 hours ago     954MB
<none>                                     <none>    3e27c5765d15   4 hours ago     954MB
<none>                                     <none>    67184ada384d   4 hours ago     954MB
<none>                                     <none>    d938bd972941   4 hours ago     954MB
<none>                                     <none>    2779a09ce422   4 hours ago     954MB
<none>                                     <none>    b47d194b05a7   4 hours ago     954MB
python                                     latest    07de2f474278   10 days ago     864MB
ubuntu                                     latest    d5ca7a445605   2 months ago    65.6MB
node                                       16.7.0    1c303479e76c   4 months ago    853MB
python                                     3.5       ca5c413738f0   15 months ago   817MB
~~~

## Push docker image

~~~
==> docker push arunabhdas/netpost-stack-1
~~~


## Run the flask and redis container as follows

~~~
==> cd docker_compose_images/web-stack-1

==> docker-compose up
~~~

## Stop as follows

~~~
docker-compose stop

docker-compose down --volumes
~~~

## Run the web-stack-2 container as follows

~~~
==> cd docker_compose_images/web-stack-2

==> docker-compose up 


==> docker-compose run db bash
root@7545d34198c5:/# psql --host=web-stack-2_db_1 --username=genius_user --dbname=genius_database
Password for user genius_user: 
psql (14.1 (Debian 14.1-1.pgdg110+1))
Type "help" for help.

genius_database=# 

==> docker-compose run db bash
root@7545d34198c5:/# psql --host=web-stack-2_db_1 --username=genius_user --dbname=genius_database
Password for user genius_user: 
psql (14.1 (Debian 14.1-1.pgdg110+1))
Type "help" for help.

genius_database=# \d
Did not find any relations.
genius_database=# CREATE TABLE countries(name TEXT);
CREATE TABLE
genius_database=# \d
            List of relations
 Schema |   Name    | Type  |    Owner    
--------+-----------+-------+-------------
 public | countries | table | genius_user
(1 row)

genius_database=# SELECT * FROM countries;
 name 
------
(0 rows)

genius_database=# INSERT INTO countries VALUES ('USA');
INSERT 0 1
genius_database=# SELECT * FROM countries;
 name 
------
 USA
(1 row)

genius_database=# INSERT INTO countries VALUES ('UK');
INSERT 0 1
genius_database=# SELECT * FROM countries;
 name 
------
 USA
 UK
(2 rows)
~~~
## Links

https://docs.docker.com/language/python/build-images/

https://zhao-li.medium.com/getting-started-with-postgresql-using-docker-compose-34d6b808c47c