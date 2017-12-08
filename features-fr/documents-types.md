# Documents types

Jeyser vous permet d'éditer et publiposter tous vos documents depuis le web. 
Il utilise la puissance de [Twig](http://twig.sensiolabs.org/), le moteur de template de Symfony. 
N'hésitez pas à consulter la documentation de twig pour mieux comprendre les documents types de démonstration.

Pour plus de simplicité, Jeyser contient déjà quelques [documents types d'exemples](https://github.com/n7consulting/Incipio/tree/master/var/documents).


Les champs accessibles sont ceux utilisés dans les différentes entity du CRM. 

> 11/2017: Nous travaillons pour proposer un moyen fiable et convivial pour vos proposer une liste de tous les champs accessibles pour vos documents.

### Paramètres

Depuis la version 2.0.0 de Jeyser, vous pouvez régler certains de vos paramètres depuis l'espace web. Ces paramètres sont accessibles dans vos documents types via l'extension `param()`.

Les paramètres disponibles sont : 

 - **nom** le nom de votre junior-Entreprise
 - **abbr** l'abbréviation de votre junior-entreprise
 - **logo** l'url du logo de votre junior. Sert surtout pour la page de connexion et n'est pas très utile pour vos documents types.
 - **adresse** l'adresse postale de votre junior-entreprise
 - **url** l'url de votre site web
 - **email** l'email de contact de votre junior-entreprise
 - **domaineEmailEtu** le domaine des mails de vos etudiants (par exemple @etu.enseeiht.fr)
 - **domaineEmailAncien** le domaine des mails des alumnis de votre école ( @alumni.enseeiht.fr)
 - **presidentPrenom** le prénom du président
 - **presidentNom** le nom du président
 - **presidentTexte** un texte introductif précédent sa signature, (par exemple `Son président,`)
 - **tresorierPrenom** similaire au champs ci-dessus
 - **tresorierNom**
 - **tresorierTexte**
 - **tva** le taux de tva. La donnée est un chiffre et peux donc être directement utilisée dans vos calculs
 - **anneCreation** l'année de création de votre junior
 - **annee1Jeyser** l'année d'installation de Jeyser dans votre junior
 - **gaTracking**  un code de suivi google-analytics

Exemple : Mettre `{{ param('abbr') }}` dans votre document type affichera N7C.
 
**Note :** Les paramètres `fraisDossierDefaut` et `pourcentageAcompteDefaut` sont également disponible mais n'ont pas vocations à être utilisés dans vos documents types
 
### balises spécifiques
`{% TRfor %} {%endforTR %}` pour faire une boucle dans une ligne de tableau. Cf l'AP si vous avez besoin d'un exemple.

`{% Pfor %} {%endforP %}` pour faire une boucle dans un paragraphe.

...

### filtres
En plus des filtres Twig habituels, Jeyser comporte quelques filtres supplémentaires :


 - Le filtre `money` arrondi au centime et remplace le point par une virgule dans les nombres décimaux. ` {{ etude.montantHT | money }}`
 
 
 - Le filtre `pluriel` concatène un s si son paramètre est supérieur à 1. ` La charge de travail est estimée à {{ etude.nbrJEH }}  Jour{{ etude.nbrJEH | pluriel }}-Étude Homme`
 
 
 - Le filtre `nbrToLetters` transforme un nombre en lettre. `{{ (etude.montantHT * (1+tva)) | nbrToLetters(1) }}`
 
 
 - Le filtre `nl2wbr` conserve les retours à la ligne du texte d'origine (par défaut ces retours à la ligne sont supprimés).  `{{ etude.presentationProjet | nl2wbr | raw }}`
 
 
 - Le filtre `liaison` vous permet de transformer les `de + voyelle` en `d'voyelle`.


### Avertissement

Word modifie parfois les caractères que vous saisissez pour des raisons esthétiques (remplacement de ' par \` ou de " par \`\` ). Or ces caractères lèveront des erreurs. 
Faites bien attention à utiliser ' et " (apostrophe simple et double) et non \` et \`\` (signe de citation simple et double).

