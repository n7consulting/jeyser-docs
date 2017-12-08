# FAQ

Frequently asked questions about Jeyser CRM. If you are looking for answers about doctypes,
go to [doctypes FAQ](../features-fr/documents-types-faq.md)
 <br/><br/>

 #### I followed the docker installation instructions but it doesn't work

Your best option is to [Ask for support](https://jeyser-crm.n7consulting.fr/support)

**Note** The error is extremely likely to come from your side. Our installation process 
is checked [at every moment](https://travis-ci.org/n7consulting/Incipio) of our development process. 
However, don't worry nothing is broken forever and we are pleased to help newcomers to the Jeyser community.
 <br/><br/>


 #### Which server shall I use ?

 For every question on hosting read [the install guide](../install/index.md).
  <br/><br/>


 #### What is the difference between Incipio and Jeyser CRM ?

Incipio is the original name of Jeyser CRM. it is under that name that M-Gate released its ERP. 
However, as long as it is a very common name among the web, we decided to change it to something more distinctive. 
It comes from JE (for Junior-Entreprise) and ER (first letters of ERP). 
Jeyser is an update of Incipio, therefore they should be compatible.
 <br/><br/>


 #### Do you provide hosting for Jeyser ?

No we don't. Hosting a software is a full time job to maintain servers, improve code, deliver a good quality of service.
We aren't looking for such experience, besides it would have a low profitability. 
If you can't install Jeyser, ask us for support or to your engineering partner.
 <br/><br/>


 #### Can I install Jeyser on a shared hosting ?

Technically you can. However such installation will be time-consuming (even more than a custom installation) 
and won't give the best from Jeyser. Several features such as Gantt export as image won't be possible and 
some might be buggy. We invested a lot of time in the docker install, a VPS is definitely affordable, 
thus we strongly advocate against an installation on a shared hosting. Keep in mind that we will provide 
absolutely no support to such initiatives.
<br/><br/>

 #### Why do you use Symfony ? 

Because it's the best way to have a standard, consistent software. 
It's a widely used framework, popular among PHP community, and definitely the best for complex systems.
 <br/><br/>

 #### Why Docker ?

 Docker is the best option we have found to provide an easy installation, ready out of the box. 
 We use it ship configuration and content, to create a multi component application with ease and improve security.
 Besides, it provides some interesting features about application state management.
 <br/><br/>
 
 #### Why don't you create images on the Docker Hub ?

 Jeyser is managed with. If we were distributing Docker images through the Docker hub, it would create a lock and reduce
  the spirit of "keep control over your information system" we want to put in Jeyser.
