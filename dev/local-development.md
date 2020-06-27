# Local development

This page will guide you through the steps required to get fully working Jeyser CRM local environment.

### 1 - Install Docker

Jeyser CRM relies on Docker, and we advise developers to get a bit used to Docker before starting development.

 1. Install Docker for your Operating System; more details at https://docs.docker.com/get-docker/
 2. Install docker-compose for your Operating System; more detail at https://docs.docker.com/compose/install/
 

### 2 - Clone Jeyser repository

Fetch source code from Github. The easiest way is to install `git` on your machine and then run `git clone https://github.com/n7consulting/Incipio.git`. 
This will create an `Incipio` folder. Next steps assume you have a terminal open in this folder.

### 3 - Prepare dist files

Jeyser distributes `docker-compose.yml.dist` & `.env.dist` files. These "dist" files are used as model and must be copied to be then customized for your project specificities.

 1. Copy `docker-compose.yml.dist` to `docker-compose.yml`
 2. Open `docker-compose.yml` and replace every occurence of `REPLACE_WITH_YOUR_HOST` with `localhost`
 3. Open `docker-compose.yml` and replace every occurence of `REPLACE_WITH_YOUR_EMAIL` with `localhost@localhost.localdomain`
 4. Open `docker-compose.yml` and replace line `# - .:/app` with `- .:/app`. (Beware to spacing. Every - under the volumes list must be aligned)
 5. Copy `.env.dist` to `.env`
 6. Open `.env` and replace every occurence of `REPLACE_WITH_YOUR_HOST` with localhost
 7. Open `.env` and replace every occurence of `REPLACE_WITH_YOUR_EMAIL` with `localhost@localhost.localdomain`
 8. Open `.env` and replace `APP_ENV=prod` with `APP_ENV=dev` to turn on development features
 9. Save both files

### 4 - Build images and start containers

If you are not familiar with images and containers, feel free to follow tutorials on the internet to get more used to these Docker concepts.

Build the images and start different containers powering Jeyser by running `docker-compose up -d traefik web`.

Once the process of building and starting completes, browse to https://localhost. Accept the security exception about self-signed certificate and 
you should now see the Jeyser login page and the debug toolbar at the bottom.

### 5 - Prepare database

Containers are correctly running, but you now need to create database schema and populate it with fake data. by running `docker-compose exec web composer install:first`.
wait for the migrations to complete.

### 6 - Login

You should now be able to connect to Jeyser by using default admin credentials: `admin/admin`.

### 7- Develop

You can now edit any file in Incipio, and you will just have to refresh the page to see the modification.

As an example, add some valid HTML to `templates/Dashboard/Default/index.html.twig`, save the file and refresh/browse to Jeyser welcome page to enjoy your modifications.
