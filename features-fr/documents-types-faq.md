# Documents types - FAQ

Voici une liste des questions souvent posées à propos des documents types.

## Formats de documents

 #### Quels sont les formats supportés par Jeyser ?
 
 Jeyser permet le publipostage uniquement en format word `.docx`.
  <br/><br/>

 #### Que faire si mes documents sont dans un format XXX et que je veux utiliser Jeyser ?
 
 Passez vos documents types sous word ou bien n'utilisez pas Jeyser.
  <br/><br/>

 #### Pensez vous ajouter le support du format XXX (notammment `.pptx`)dans les prochaines versions ?
 
 Probablement pas. Nous sommes ouvert aux contributions extérieures sur le sujet. Cependant, d'un point de vue 
 de la Core Team Jeyser, nous préférons imposer un format et garantir son bon fonctionnement plutôt 
 que de proposer de nombreux formats supportéss à moitié et non maintenu par les contributeurs initiaux. 
 
 Pour le cas spécifique des documents Powerpoint, Word permet de faire exactement la même chose 
 il est possible d'avoir un rendu exactement similaire à ce que. Cela demande juste un peu plus de travail.
  <br/><br/>

 #### Peut on exporter directement en PDF ?

 Non. Dans tous les cas, le documents ont souvent besoin d'être modifié à la main; d'où le parti pris de ne pas proposer
 d'export PDF.
 <br/><br/>


## Utilisation du publipostage

 #### Jeyser ne supporte que Word, comment faire pour les documents sur Excel comme les BV ou les factures ?
 
 Vous devrez migrer ces documents sous Word. Heureusement nous fournissons des [exemples de documents types](https://github.com/n7consulting/Incipio/tree/master/var/documents)
 qui vous donneront une base de départ pour tous vos documents types.
  <br/><br/>

 #### Avez vous des conseils sur les documents types ?
 
 Vous devez avoir confiance dans vos documents types. Ne faites donc pas les erreurs suivantes:
  
   - Vous ne devez pas entretenir une liste d'erreur à corriger à la main après export. Si une erreur est présente dans vos documents types,
   corrigez la, demandez de l'aide si vous ne savez pas comment faire, mais surtout 
   **ne dites pas à vos chef de projet de la corriger manuellement après chaque export.**
   
   
   - Vos documents types doivent servir à l'export final de vos documents. N'utilisez pas Jeyser comme un outil pour 
   publier des bouts de documents types, bouts ensuite copié collé dans un autre document pour avoir la bonne mise en page.
   Le but de Jeyser est d'automatiser les taches répétitives, pas d'en créer de nouvelles.



## Dépannage
 <br/>

 #### Lorsque je veux exporter, je reçois une erreur 500 ?
 
 Essayez de lire et comprendre l'erreur pour la corriger. Il s'agit souvent de parenthèses mal fermées, d'erreur dans les tags ou les filtres.
 <br/><br/>

 #### Lorsque j'exporte, certaines parties sont vides au lieu d'être remplies ?
 
 Vous utilisez probablement un attribut qui n'existe pas (`etude.jenexistepas`) ou alors la valeur à été laissée vide du coté de l'ERP
 <br/><br/>
 
 #### Votre module ne marche pas dans le cas <insérez ici la situation de votre choix> ?
 
 Nous sommes déjà plusieurs juniors à utiliser le module d'export pour nos affaires quotidiennes. 
 L'erreur vient plus probablement de votre coté. N'hésitez pas à demander [de l'aide](https://jeyser-crm.n7consulting.fr/support).
 <br/><br/>

 #### Après export, mon document est corrompu ?
 
 Essayez de voir si le message d'erreur de Word ne vous apporte pas des informations supplémentaires. 
 
 Attention à ne pas confondre différents caractères, comme le moins `-` et le tiret long `—`
 (qui lui est invalide dans une formule, mais est parfois utilisé par Word pour des raisons esthétiques à la place du moins.). 
 
 Il est également déconseillé de faire du copier-coller de texte entre document car cela à tendance à le casser.

 
 *For the record,* il existe une méthode pour débugger à la main les documents types, mais elle exige un peu de compétences
 techniques. En voici les grandes lignes:
 
   - Un document word est une simple archive zip. Il peut donc être modifié sans avoir Word.
   1. Avec un gestionnaire d'archive, ouvrez (ouvrir ne veut pas dire extraire) l'archive.
   2. Avec un éditeur de code (notepad++ ...) ouvrez le document `word/document.xml`
   3. Appliquez une expression régulière pour aérer le document. Par exemple remplaces `/>` par `/>\n`
   4. Sauvegardez, fermez l'archive.
   5. Mettez le document en ligne et recommençez l'export.
   6. Le message d'erreur devrait être le même, mais le numéro de ligne devrait à présent être différent de 2, 
      donc vous donner une information plus précise sur la localisation de l'erreur.
   7. Ouvrez à nouveau `document.xml` (cf les pas 1 à 3) et essayez de corriger l'erreur.

