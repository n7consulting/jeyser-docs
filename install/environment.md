# Environment

This part brings you from a standard computer to an environment 
ready for Jeyser installation. You will install the required software to connect a server, book a server, point a subdomain to its IP address.

If DNS and SSH are familiar to you, you can skip to the next chapter.


== Serveur Web

====
Jeyser nécessite la mise en place d'un serveur web.
Nous allons dans un premier temps vous guider dans l'achat et la préparation de celui-ci.
Un tel serveur peut être celui utilisé pour le site vitrine de votre J.E.
====



=== Choix d'un hébergeur

Il existe de nombreux hébergeurs avec différentes offres de serveurs et de qualité de service.

La configuration minimale de Jeyser requiert un serveur privé virtuel (VPS) avec 1 vCore et 1Go de RAM.

Pour faciliter vos démarches, nous avons sélectionné deux prestataires dont les caractéristiques techniques du serveur sont suffisantes, à prix très correct et avec lesquels nous avons déjà travaillé.

* link:https://www.ovh.com/fr/vps/vps-ssd.xml[OVH]
** 2,99€ HT / mois
** 1 vCore
** 2Go RAM
** 10Go stockage SSD
** 1 IPv4

* link:https://www.scaleway.com/pricing/[Scaleway]
** 2,99€ HT /mois
** 2 vCore x86-64
** 2Go RAM
** 50Go stockage SSD
** 1 IPv4

Cette liste est à titre purement indicatif, nous n'avons aucune entente avec l'un de ces hébergeurs.



=== Choix du système d'exploitation

Au moment de la commande, préférez une localisation en France.
Pour le choix du système d'exploitation nous vous recommandons Linux Ubuntu 16.04 64bits car le programme d'installation y a été vérifié.

Au cours des étapes suivantes vous aurez surement à vous créer un compte chez ledit hébergeur puis à renseigner des informations bancaires.




== Nom de domaine

Si vous n'en avez pas encore un, un nom de domaine vous sera plus pratique pour accéder à votre site web ainsi qu'à Jeyser. En louant un nom de domaine auprès d'un registraire de nom de domaine, vous pouvez faire pointer celui ci vers votre l'adresse IP de votre serveur.

Là encore nous vous donnons une liste non exhaustive de registraires :

* link:https://www.1and1.fr/noms-de-domaine[1&1]
** Domaine .fr gratuit la première année puis 9,99€/an
** Domaine .com à 0,99€/an la première année, puis 9,99€/an

* link:https://www.namecheap.com/domains/domain-name-search.aspx[Namecheap]
** Domaine .fr à 7,62€/an
** Domaine .com à 7,43€/an

* link:https://fr.godaddy.com/domains/domain-name-search[GoDaddy]
** Domaine .com à 1,19€ la première année, puis 19,36€/an




== Connexion au serveur

Après paiement vous devriez recevoir un mot de passe pour vous connecter à votre serveur.

Chez certains hébergeurs comme Scaleway vous pouvez avoir à enregistrer une clé dans votre espace client. Référez vous dans ce cas à l'annexe "Connexion par clés".



=== Windows

Le logiciel vous permettant de vous connecter à votre serveur s'appelle PuTTY.

link:https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html[Téléchargez PuTTY]

Une fois installé, démarrez l'exécutable PuTTY. Vous arrivez dans l'espace de configuration de session.

image::Putty_7.png[470,470,align=center]

* Pour le champ "Host Name) entrez l'adresse IP de votre serveur (ou le nom de domaine si vous en avez acheté un), laissez le port 22 et la connection de type SSH.

* Pour que toutes ces manipulations restent enregistrées dans Putty, vous pouvez donner un nom dans le champ "Saved Sessions" et cliquer sur "Save".

* Cliquez en bas sur "Open".

* La connexion s'établit alors avec votre serveur et vous devez saisir un identifiant. Par défaut il s'agit du super administrateur: root

* Validez avec la touche entrée car ici tout se fait au clavier puis saisissez le mot de passe qui vous a été donné.

====
Félicitations, vous avez passé le plus compliqué, vous êtes sur votre serveur ! Dans le chapitre suivant nous allons vous accompagner dans l'installation de Jeyser !
====

If you are asked about SSH key, read [SSH key connection](ssh-key)









### Pointing a subdomain to an IP address guides

Illustrated process of how to point a subdomain on an IP adress

 - [Pointing a subdomain to an IP address - 1and1]()
 
 - [Pointing a subdomain to an IP address - OVH]()

 - Contributions are welcomed. Add your own guide.
