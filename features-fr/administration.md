---
title: Administration
tags: [fr]
slug_title: administration
keywords: fr, administration
sidebar: main_sidebar
permalink: 35
---

# Administration

Parce que chaque Junior-Entreprise est unique, Jeyser est configurable pour correspondre à vos besoins.


### Gestion des documents types

Depuis l'espace admin, vous pouvez importer et mettre à jour vos documents-types.

Pour plus de précisions, consultez la [page dédiée aux documents types](documents-types).

### Postes et filières

Organisez les postes et les filières disponible pour les membres depuis cette partie.

### Roles et utilisateurs

Les administrateurs peuvent gérer les utilisateurs et leurs permissions sur Jeyser. Le système de permission sur Jeyser est basé sur des rôles (RBAC). Chaque rôle a des prérogatives propres et les utilisateurs ont les mêmes prérogatives que les rôles auxquels ils appartiennent.

Les rôles disponibles sont les suivants : 

 - ROLE_SUPERADMIN : Role donné au premier utilisateur créé automatiquement à l'installation. Un SuperAdmin à accès à un panneau de gestion de la base de données permettant de modifier les données brutes. A réserver aux membres du Pole DSI expérimentés. Englobe tous les roles.
 - ROLE_ADMIN : Permet de gérer les documents types, les utilisateurs, de modifier les paramètres de Jeyser. Englobe les roles CA, SUIVEUR, ELEVE. N'a pas accès à la trésorerie.
 - ROLE_RGPD : Permet d'accéder au module de gestion des données personnelles. Plus de détails sur le [RGPD](gdpr).
 - ROLE_CA : Permet de consulter les statistiques et les études confidentielles. Contrairement à ce que suggère le nom, nous vous conseillons de ne donner ce rôle qu'aux membres de votre bureau. Englobe les roles SUIVEUR et ELEVE.
 - ROLE_TRESO : Permet d'éditer les factures, les BV. Englobe le role ELEVE.
 - ROLE_SUIVEUR : Permet d'accéder aux études et aux membres de l'association. Englobe le role ELEVE.
 - ROLE_ELEVE : Permet d'accéder à sa fiche personnelle. Nous vous déconseillons fortement d'ouvrir un compte Jeyser pour chacun de vos membres.
 
 **Note :** Un role a toutes les permissions des roles englobés.
 
 **Rappel :** Vous pouvez ouvrir un compte utilisateur à un de vos membre depuis sa fiche. Il recevra un mail avec la procédure d'activation. 
 
### Importation de données externes

Jeyser contient un système ouvert d'importation de données. Vous pouvez par ce moyen importez des données depuis es sources externes.

Pour le moment la seule source de donnée externe valide est l'export Siaje. Lorsque vous résiliez votre contrat Siaje, un export de votre base de données (

### Paramètres

Comme précisé dans la partie [Gestion Associative](gestion-associative), vous pouvez créer vos postes et vos filières depuis l'espace d'admin. Vous pouvez aussi y définir vos domaines de compétences.

Enfin, depuis la version 2.0.0 de jeyser, vous configurer depuis le web les paramètres de votre junior tels son Nom, son adresse, les noms des trésoriers et président à mettre en fin de documents types ...
