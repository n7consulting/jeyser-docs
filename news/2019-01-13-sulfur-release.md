# Jeyser CRM Sulfur

**2019-01-13** - _Etude removal fix and Traefik update_

**Please make sure that you've updated to at least Jeyser 2.7.0 before upgrading to this new version.**

We have also fixed some bugs on the [Jeyser website](http://jeyser-crm.n7consulting.fr/).

```bash
# Be sure to regularly update your server: sudo apt update && sudo apt dist-upgrade && sudo apt autoremove

# Get new Jeyser version
cd /var/www/Incipio
chown -R $USER var/migrations
git checkout master
git pull --prune # if that step fails, reach us out on gitter
git checkout v2.8.0

# Update containers
docker-compose stop web traefik
docker-compose rm -f web traefik
sed -i 's/image: traefik:.*/image: traefik:1\.7/' docker-compose.yml
docker-compose up -d

# Migrate & Clear cache
docker-compose exec web php bin/console -n doctrine:migration:migrate
docker-compose exec web composer clear-cache-prod
docker-compose restart web
```

## Changelog

[Comparison between 2.7.0 and 2.8.0](https://github.com/n7consulting/Incipio/compare/v2.7.0...n7consulting:v2.8.0)

- Fix Etude with Ap removal
- Update Traefik

**Note:** Based on its content, this release should be a patch release, however as there is a migration and an update of Traefik to perform, this release is eventually a new minor version.
