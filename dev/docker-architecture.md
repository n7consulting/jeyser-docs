# Docker Architecture


**Note :** This page covers the supported Jeyser architecture (ie based on Docker). Jeyser can also run without containers, however because the installation is harder and less secure, we won't cover it here.

### Docker infrastructure

Jeyser relies on Docker to create a standard layer to install itself. Here is a picture of all Jeyser containers and their use.

<img src="images/jeyser_cloudcraft.png" alt="Container Architecture" />

As detailled in the docker-compose.yml we have :

 - traefik: a reverse-proxy used here to manage automatically SSL certificates using Let'sEncrypt. It could also be used as a load balancer if the web container was duplicated. The container image only contains traefik binary.
 
 
 - web: an Apache + PHP 7 stack, with several extension such as APCU and Opcache enabled and configured for a maximum speed.
  This is were Docker shines, we configured the environnment once, and you just have to use it, it will work the same. 
  That container also contains PhantomJS installed, to export gantt chart for your doctypes.
 
 
 - mysql: A Mysql 5 database to store your data. It mounts a volume in jeyser's `docker/mysql` folder, thus even if you delete the container, your database will be saved.
 

 - mailer: A postfix server to send any email coming from Docker network.
 
 **Docker basics**
 
Here are some basics for anyone not used to Docker.

Launch Jeyser containers : `docker-compose up -d`

Get access to Jeyser logs : `docker-compose logs` you can add a container name after logs if you want to see logs from a specific container.

If something is not working as expected, begin with a `docker-compose restart`. You can restart a specific container if you specify its name after restart.
