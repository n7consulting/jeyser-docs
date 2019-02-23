# Phosphorus patch 2

**2018-12-13** - _Just fixing a bug in update notification_

## Migration

Just run

```bash
cd /var/www/Incipio
git checkout master
git pull
git checkout v2.7.2
docker-compose exec web composer clear-cache-prod
docker-compose restart web # to reset permissions on cache
# Be sure to regularly update your server: apt-get update && apt-get dist-upgrade
```

## Changelog

- Fix update notification always showing after update bug. Thanks @PitouGames for notifying it.
