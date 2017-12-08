webpackJsonp([0xde776a14d635],{378:function(e,n){e.exports={data:{post:{html:'<h2 id="migration"><a href="#migration" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Migration</h2>\n<p>That new version has no big database changes. You just have to add a new parameter on configuration dashboard : </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code># go to your installation folder \ncd /var/www/Incipio\ngit pull  # if that step fails, reach us out on the gitter chat\ngit checkout v2.1.0\ndocker-compose stop\ndocker-compose rm web\ndocker-compose build web\nsudo rm -rf var/cache\ndocker-compose up -d\ndocker-compose exec web php bin/console doctrine:migrations:execute 20170614232630</code></pre>\n      </div>\n<p>We also advise you to replace the old docker-compose config file by a new one. To do so, execute :</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code># go to your installation folder \ncd /var/www/Incipio\ndocker-compose stop\n# Create a copy of the current configuration (just in case)\ncp docker-compose.yml docker-compose.save.yml\n# Copy the expected version\ncp docker-compose.yml.dist docker-compose.yml\n# Edit the parameters\nsed -i "s/SYMFONY_ENV: dev/SYMFONY_ENV: prod/g" docker-compose.yml\nsed -i "s/restart: \\"no\\"/restart: always/g" docker-compose.yml\n\n# In the following lines, replace $subdomain & $email by the values that were already set in your file.\n# example : sed -i "s/REPLACE_WITH_YOUR_HOST/dsi@n7consulting.fr/g" docker-compose.yml\nsed -i "s/REPLACE_WITH_YOUR_HOST/$subdomain/g" docker-compose.yml\nsed -i "s/REPLACE_WITH_YOUR_EMAIL/$email/g" docker-compose.yml\n\n# relaunch\ndocker-compose up -d</code></pre>\n      </div>\n<h2 id="changelog"><a href="#changelog" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changelog</h2>\n<ul>\n<li>Fix bug on composer installation</li>\n<li>Bump to PHP 7.1 as minimal supported version</li>\n<li>Add a restart always option for production container (will help many junior-entreprises)</li>\n<li>Largely improve UI and fix bug on Mission management</li>\n<li>Improve UI on doctype selection </li>\n<li>Add validators on several entities</li>\n<li>Improve BA (Bulletin d\'Adhésion) doctype</li>\n<li>Make CI works</li>\n<li>Remove unused methods, functions and fix typo\nmmy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</li>\n</ul>\n<p>{% include links.html %}</p>'},navDoc:{edges:[{node:{title:"Installation",path:"install",items:[{id:"environment",title:"Environment",anchors:null},{id:"index",title:"Install Jeyser in minutes",anchors:null},{id:"update",title:"Update Jeyser",anchors:null},{id:"annexes",title:"Annexes",anchors:[{id:"help-for-manual-installation",title:"Help for manual installation"},{id:"ssh-key-connection",title:"SSH Key Connection"}]}]}},{node:{title:"Features",path:"features-fr",items:[{id:"gestion-associative",title:"Gestion associative",anchors:null},{id:"suivi-projet",title:"Suivi de projet",anchors:null},{id:"prospection",title:"Prospection",anchors:null},{id:"rh",title:"Relations humaines",anchors:null},{id:"tresorerie",title:"Trésorerie",anchors:null},{id:"formations",title:"Formations",anchors:null},{id:"indicateurs",title:"Indicateurs",anchors:null},{id:"documents-types",title:"Documents types",anchors:null},{id:"documents-types-faq",title:"FAQ Documents types",anchors:null},{id:"administration",title:"Administration",anchors:null},{id:"gdpr",title:"Règlement général sur la protection des données",anchors:null}]}},{node:{title:"User guides",path:"user-guides",items:[{id:"introduction-to-jeyser-1",title:"Introduction to Jeyser",anchors:null}]}},{node:{title:"Development",path:"dev",items:[{id:"faq",title:"FAQ",anchors:null},{id:"docker-architecture",title:"Architecture Docker",anchors:null},{id:"about",title:"About",anchors:null},{id:"demo-data",title:"Demo data",anchors:null},{id:"contributing",title:"Contributing",anchors:null}]}}]}},pathContext:{path:"docs/news/2017-06-17-fluor-release"}}}});
//# sourceMappingURL=path---docs-news-2017-06-17-fluor-release-a455d6f99140f98b3d3f.js.map