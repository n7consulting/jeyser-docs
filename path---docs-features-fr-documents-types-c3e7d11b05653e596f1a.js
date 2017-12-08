webpackJsonp([26788589425328],{362:function(e,t){e.exports={data:{post:{html:'<h1 id="documents-types"><a href="#documents-types" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Documents types</h1>\n<p>Jeyser vous permet d\'éditer et publiposter tous vos documents depuis le web.\nIl utilise la puissance de <a href="http://twig.sensiolabs.org/" target="_blank" rel="nofollow noopener noreferrer">Twig</a>, le moteur de template de Symfony.\nN\'hésitez pas à consulter la documentation de twig pour mieux comprendre les documents types de démonstration.</p>\n<p>Pour plus de simplicité, Jeyser contient déjà quelques <a href="https://github.com/n7consulting/Incipio/tree/master/var/documents" target="_blank" rel="nofollow noopener noreferrer">documents types d\'exemples</a>.</p>\n<p>Les champs accessibles sont ceux utilisés dans les différentes entity du CRM. </p>\n<blockquote>\n<p>11/2017: Nous travaillons pour proposer un moyen fiable et convivial pour vos proposer une liste de tous les champs accessibles pour vos documents.</p>\n</blockquote>\n<h3 id="paramètres"><a href="#param%C3%A8tres" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Paramètres</h3>\n<p>Depuis la version 2.0.0 de Jeyser, vous pouvez régler certains de vos paramètres depuis l\'espace web. Ces paramètres sont accessibles dans vos documents types via l\'extension <code>param()</code>.</p>\n<p>Les paramètres disponibles sont : </p>\n<ul>\n<li><strong>nom</strong> le nom de votre junior-Entreprise</li>\n<li><strong>abbr</strong> l\'abbréviation de votre junior-entreprise</li>\n<li><strong>logo</strong> l\'url du logo de votre junior. Sert surtout pour la page de connexion et n\'est pas très utile pour vos documents types.</li>\n<li><strong>adresse</strong> l\'adresse postale de votre junior-entreprise</li>\n<li><strong>url</strong> l\'url de votre site web</li>\n<li><strong>email</strong> l\'email de contact de votre junior-entreprise</li>\n<li><strong>domaineEmailEtu</strong> le domaine des mails de vos etudiants (par exemple @etu.enseeiht.fr)</li>\n<li><strong>domaineEmailAncien</strong> le domaine des mails des alumnis de votre école ( @alumni.enseeiht.fr)</li>\n<li><strong>presidentPrenom</strong> le prénom du président</li>\n<li><strong>presidentNom</strong> le nom du président</li>\n<li><strong>presidentTexte</strong> un texte introductif précédent sa signature, (par exemple <code>Son président,</code>)</li>\n<li><strong>tresorierPrenom</strong> similaire au champs ci-dessus</li>\n<li><strong>tresorierNom</strong></li>\n<li><strong>tresorierTexte</strong></li>\n<li><strong>tva</strong> le taux de tva. La donnée est un chiffre et peux donc être directement utilisée dans vos calculs</li>\n<li><strong>anneCreation</strong> l\'année de création de votre junior</li>\n<li><strong>annee1Jeyser</strong> l\'année d\'installation de Jeyser dans votre junior</li>\n<li><strong>gaTracking</strong>  un code de suivi google-analytics</li>\n</ul>\n<p>Exemple : Mettre <code>{{ param(\'abbr\') }}</code> dans votre document type affichera N7C.</p>\n<p><strong>Note :</strong> Les paramètres <code>fraisDossierDefaut</code> et <code>pourcentageAcompteDefaut</code> sont également disponible mais n\'ont pas vocations à être utilisés dans vos documents types</p>\n<h3 id="balises-spécifiques"><a href="#balises-sp%C3%A9cifiques" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>balises spécifiques</h3>\n<p><code>{% TRfor %} {%endforTR %}</code> pour faire une boucle dans une ligne de tableau. Cf l\'AP si vous avez besoin d\'un exemple.</p>\n<p><code>{% Pfor %} {%endforP %}</code> pour faire une boucle dans un paragraphe.</p>\n<p>...</p>\n<h3 id="filtres"><a href="#filtres" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>filtres</h3>\n<p>En plus des filtres Twig habituels, Jeyser comporte quelques filtres supplémentaires :</p>\n<ul>\n<li>Le filtre <code>money</code> arrondi au centime et remplace le point par une virgule dans les nombres décimaux. <code>{{ etude.montantHT | money }}</code></li>\n</ul>\n<ul>\n<li>Le filtre <code>pluriel</code> concatène un s si son paramètre est supérieur à 1. <code>La charge de travail est estimée à {{ etude.nbrJEH }} Jour{{ etude.nbrJEH | pluriel }}-Étude Homme</code></li>\n</ul>\n<ul>\n<li>Le filtre <code>nbrToLetters</code> transforme un nombre en lettre. <code>{{ (etude.montantHT * (1+tva)) | nbrToLetters(1) }}</code></li>\n</ul>\n<ul>\n<li>Le filtre <code>nl2wbr</code> conserve les retours à la ligne du texte d\'origine (par défaut ces retours à la ligne sont supprimés).  <code>{{ etude.presentationProjet | nl2wbr | raw }}</code></li>\n</ul>\n<ul>\n<li>Le filtre <code>liaison</code> vous permet de transformer les <code>de + voyelle</code> en <code>d\'voyelle</code>.</li>\n</ul>\n<h3 id="avertissement"><a href="#avertissement" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Avertissement</h3>\n<p>Word modifie parfois les caractères que vous saisissez pour des raisons esthétiques (remplacement de \' par ` ou de " par `` ). Or ces caractères lèveront des erreurs.\nFaites bien attention à utiliser \' et " (apostrophe simple et double) et non ` et `` (signe de citation simple et double).</p>'},navDoc:{edges:[{node:{title:"Installation",path:"install",items:[{id:"environment",title:"Environment",anchors:null},{id:"index",title:"Install Jeyser in minutes",anchors:null},{id:"update",title:"Update Jeyser",anchors:null},{id:"annexes",title:"Annexes",anchors:[{id:"help-for-manual-installation",title:"Help for manual installation"},{id:"ssh-key-connection",title:"SSH Key Connection"}]}]}},{node:{title:"Features",path:"features-fr",items:[{id:"gestion-associative",title:"Gestion associative",anchors:null},{id:"suivi-projet",title:"Suivi de projet",anchors:null},{id:"prospection",title:"Prospection",anchors:null},{id:"rh",title:"Relations humaines",anchors:null},{id:"tresorerie",title:"Trésorerie",anchors:null},{id:"formations",title:"Formations",anchors:null},{id:"indicateurs",title:"Indicateurs",anchors:null},{id:"documents-types",title:"Documents types",anchors:null},{id:"documents-types-faq",title:"FAQ Documents types",anchors:null},{id:"administration",title:"Administration",anchors:null},{id:"gdpr",title:"Règlement général sur la protection des données",anchors:null}]}},{node:{title:"User guides",path:"user-guides",items:[{id:"introduction-to-jeyser-1",title:"Introduction to Jeyser",anchors:null}]}},{node:{title:"Development",path:"dev",items:[{id:"faq",title:"FAQ",anchors:null},{id:"docker-architecture",title:"Architecture Docker",anchors:null},{id:"about",title:"About",anchors:null},{id:"demo-data",title:"Demo data",anchors:null},{id:"contributing",title:"Contributing",anchors:null}]}}]}},pathContext:{path:"docs/features-fr/documents-types",current:{path:"docs/features-fr/documents-types",title:"Features - Documents types"},prev:{path:"docs/features-fr/indicateurs",title:"Indicateurs",rootPath:"Features"},next:{path:"docs/features-fr/documents-types-faq",title:"FAQ Documents types",rootPath:"Features"}}}}});
//# sourceMappingURL=path---docs-features-fr-documents-types-c3e7d11b05653e596f1a.js.map