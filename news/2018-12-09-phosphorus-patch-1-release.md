# Phosphorus patch 1

**2018-12-09** - _Some minor security fixes in Symfony_

## Migration

Just run

```bash
cd /var/www/Incipio
git checkout master
git pull
git checkout v2.7.1
docker-compose exec web composer clear-cache-prod
docker-compose restart web # to reset permissions on cache
# Be sure to regularly update your server: apt-get update && apt-get dist-upgrade
```

## Changelog

- **Update Symfony**. Use latest version without known vulnerabilities
