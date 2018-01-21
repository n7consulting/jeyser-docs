# Install Jeyser CRM in minutes !

Jeyser could be frightening to install. **It is not !** 
With only basics computer science knowledge and 5 commands, you can safely deploy it on your server, https included.

<br/>If you have no server management skills, please read [Environment](environment) for some basics about it. don't be afraid, it's easy.

## Server requirements

To run Jeyser you need a VPS (virtual private server) matching at least the following requirements : 

 - 1 vCPU
 - 2 GB of RAM
 - 10 Go of hard disk space
 
We strongly advocates for Ubuntu 16.04 as your server Operating System because our automatic install scripts 
are only tested on Ubuntu.

Such server cost between 3 and 7 euros per month.

 > At N7 Consulting we use an OVH VPS SSD1 at 3€/month and it works very well.
 
 In addition of your VPS, you will also need a subdomain pointing on your server ip. 
 More information in the [Environment](environment) setup guide.
 
## Install Jeyser using the Docker install

### Introduction

Docker is a virtualization system that isolates applications into containers. If you don't get that definition, don't worry. 
As for us, we use it to have a standard environment.
 
<br/>Using the docker install has many benefits : Automatic install, automatic and free SSL certificate (https),
 already configured server and software. **It is the best for non tech people.** 
 
In the following steps, we assume that your server will be used to run only Jeyser. 
If it is not the case, please refer to the [FAQ](dev/faq)
 
We can't make installation easier than that. Don't hesitate to [ask for help if you need some](./../../support).
 
### Install script

Once a subdomain is pointing on your server ip and you connected to your server, copy paste the following lines in your console.

```bash
   #Create a directory for jeyser
   mkdir -p /var/www
   cd /var/www
   # clone Jeyser code source
   git clone https://github.com/n7consulting/Incipio.git
   cd Incipio
   # get the latest release number on https://github.com/n7consulting/Incipio/releases
   git checkout v2.4.0
   # run the docker installer
   chmod u+x var/install/initial-setup_ubuntu16.sh
   ./var/install/initial-setup_ubuntu16.sh
```

That's all ! Jeyser is now installing itself. Don't be afraid, it can take some time. 
At the end of the installation process, if go to the [configured subdomain](environment) (first connection can take several seconds) 
you should have a working login page. 
Connect with the credentials `admin/admin` and don't forget to change them right after your first login.


## Custom Install

Use the Custom Install only if you know what you are doing. Keep in mind that the Docker install is more secured, better tested,
ready to use, optimized for performance. If all those arguments are not enough to use Docker, here are the steps to install Jeyser manually.

In a word:

 1. Update your server
 2. Install `apache2`, `unzip`, `php libapache2-mod-php php-mcrypt php-mysql php-xml apcu`
 3. Secure your installation and create a custom user
 4. Install `mysql`
 5. Secure mysql by creating a user just for jeyser and granting it the rights on one database.
 6. Install [Composer](https://getcomposer.org)
 7. Clone Jeyser and install it
 8. Install phantomjs for server-side gantt chart rendering
 9. Manage the SSL certificate. You can get some free one using [Letsencrypt](https://letsencrypt.org/)
 10. (Optional) activate opcache and give it suited parameters for a Symfony application
 11. Secure everything using fail2ban
 
We won't give further details, because we strongly advocate in favor of the Docker installation. If the previous list is not
 detailed enough for you, use the docker install.
 
Some additional information are available in the Dockerfiles of Jeyser, especially the apache Dockerfile.

Still reading ? We used to give an [install script](script). It is not maintained anymore, but it could help you and we have invested quite some time in it before moving to Docker, so here it is.
