# Jeyser CRM Phosphorus

**018-09-02** - _Security, Charts & UI improvements, bug fixes_

**This version contains security fixes for our dependencies, update as soon as possible**

## Migration

**Please make sure that you've updated to Jeyser 2.6.0 before upgrading to this new version.**

```bash
# Be sure to regularly update your server: sudo apt update && sudo apt dist-upgrade && sudo apt autoremove

# Update docker-compose
curl -L https://github.com/docker/compose/releases/download/1.22.0/docker-compose-$(uname -s)-$(uname -m) -o /usr/local/bin/docker-compose

# Get new Jeyser version
cd /var/www/Incipio
chown -R $USER var/install var/migrations
git checkout master
git pull --prune # if that step fails, reach us out on gitter
git checkout v2.7.0

# Update containers
docker-compose stop web traefik
docker-compose rm -f web traefik
sed -i "s/--logLevel=DEBUG/--logLevel=ERROR/g" docker-compose.yml
sed -i 's/image: traefik:.*/image: traefik:1\.6\.6/' docker-compose.yml
sed -i 's/--web/--metrics.prometheus --ping/' docker-compose.yml

docker pull php:7.1-apache
docker-compose build web
docker-compose up -d

# Migrate & Clear cache
docker-compose exec web php bin/console -n doctrine:migration:migrate
docker-compose exec web composer clear-cache-prod
docker-compose restart web
```

## Changelog

[Comparison between 2.6.0 and 2.7.0](https://github.com/n7consulting/Incipio/compare/v2.6.0...n7consulting:v2.7.0)

The main points are (ordered by importance):

- Update Symfony & Traefik to remove security flaws
- Improve user experience on charts (thank you @Olivier-R and M-Gate for this contribution)
- Reduce Traefik log level to save disk space
- General UI improvement (Thanks @PitouGames and Ouest Insa for this contribution)
- Complete transition migration
- Fix bug to bring skills chart back
- Add field to edit member skills from its profile
- Update installation script to support Ubuntu 18 (16 still supported though)
- Default logs and shortname are jeyser's, not N7 Consulting's anymore to reduce potential confusion.
- Fix bug preventing user from removing a related document
