# Frontend

This repo provides a React application for the users CRUD system frontend. Download the image from Dockerhub to run the container. App should run in port *localhost:80*.

Docker pull command:

### `docker pull luispedromorales/users-crud-frontend`

# Docker-Compose

This is part of a multi-container application. To run all services you must first clone to your machine this repo alonside the following repo:

### `https://github.com/LuisPeMoraRod/Datos2.Tarea4.Api.git`

Then move the file named _docker-compose.yml_ o the outer directory that has both, the frontend and the api folders.\
Finally execute the following command to pull all 3 images that make up this project: frontend, rest-api, and database, and create the web of containers.

### `docker-compose up`
