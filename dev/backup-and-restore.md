# Backup & restore

This page will guide you on how to backup and restore a Jeyser CRM instance.

## A word on backup & restore

### Why backing up ?

After several years of usage, your Jeyser instance will contain very valuable information. Losing access to these informations can
impact your business and prevent normal operations. There are numerous risk of losing access to data: mistake while operating Jeyser or its server, 
wrong manipulations by some users, security breach or even some datacenters burning.

Making backups and storing them offline reduce the risk of data loss in case of any of the incident above.


### Shall I do backups all by myself ?

Taking & managing snapshots of the machine hosting your Jeyser CRM is probably supported by your hosting provider.

While the instructions below can help you creating your own backup & restore mechanism,
we encourage you to pay for a backup & restore option at your hosting provider and free your team from additionnal work.

## Database backup & restore

All information but uploaded documents are stored in Jeyser database. This makes it the most important component to backup. Here is the procedure to
back it up and restore a backup.

**Backup**

 1. Log through SSH to your Jeyser server and browse to Jeyser installation repository
 2. Display Jeyser username & password (to be used at step 3).
    ```bash
    grep DATABASE_URL .env

    # Expected output
    # DATABASE_URL=mysql://user:password@database:3306/jeyser
    ```
 3. Edit the `user` and `paswword` information and run the backup creation command:
    ```bash
    docker-compose exec database bash -c "MYSQL_PWD=password mysqldump -u user jeyser > /var/lib/mysql/jeyser-$(date '+%Y-%m-%d_%H%M%S').sql"
    ```
 4. Your database backup should now be in `JEYSER_INSTALLATION_FOLDER/docker/mysql`. Display the folder where the backup has been created:
    ```bash
    ls -alh docker/mysql/jeyser-*

    # Expected output
    # -rw-r--r-- 1 root root 77K janv.  9 15:18 jeyser-2022-01-09_151840.sql
    # -rw-r--r-- 1 root root 77K janv.  9 15:40 jeyser-2022-01-09_154055.sql
    ```
 5. Copy the newly created backup from your server to your backup storage location. This can be a Drive folder, another machine, your laptop ... 
    as long as it is not in the same failure domain as your server.
    If you don't know how to proceed with this step, have a look at `scp` or how to use Filezilla to do file transfer over SSH.

**Restore**

This part assumes you have a valid Jeyser database backup with you and that you've successfully uploaded into Jeyser installation folder (ie `/var/www/Incipio` on a default installation)

 1. Log through SSH to your Jeyser server and browse to Jeyser installation repository
 2. Move it to `JEYSER_INSTALLATION_FOLDER/docker/mysql`
    ```bash
    # Example
    mv jeyser-2022-01-09_154055.sql docker/mysql/ 
    ```
 3. Retrieve jeyser user and password by running the same command as **Backup** step 2.
 4. Edit the `user` and `paswword` information and run the import backup command:
    ```bash
    docker-compose exec database bash -c "MYSQL_PWD=password mysql -u user jeyser < /var/lib/mysql/jeyser-2022-01-09_154055.sql"
    ```
 5. If the command fails with error message `ERROR 1049 (42000): Unknown database 'jeyser'`, create the database:
    ```bash
    docker-compose exec web bin/console doctrine:database:create

    # Expected output
    # Created database `jeyser` for connection named default
    ```
    and run step 4 again.

## Uploaded documents backup & restore

Documents backup and restore is easier than database one. Every document uploaded to Jeyser is stored under `JEYSER_INSTALLATION_FOLDER/var/documents`.

Use `scp`, `rsync`, a FTP over SSH or a FTP client to copy them in & out of your Jeyser instance.

## Notes

The backup and restore of configuration & stats is out of scope of this page. These informations are not considered valuable and can easily be set through the admin UI.