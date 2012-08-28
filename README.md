**ubuif** first version prototype is now ready, this version is very much a proof of concept version and needs tremendous amounts of work but the basics are similar to that of Zend Framework.

For those who don't and have never used the Zend Framework (poor you, its awesome) here is a short intro to **ubuif** so you can get an idea of what needs updating, replacing and any bugs/issues.

To start using Ubuif clone the repo somewhere and run these commands (in order)

* npm install supervisor -g
* cd ubuif && npm install .
* supervisor ubuif.js development

then start developing and playing and send me all bugs and feature requests.

The structure of Ubuif is almost identicle to the Zend Framework in the hope that familiarity will bring comfort to developers using Ubuif.

Here is the structure of your app in Ubuif

* Ubuif -
* * application -
* * * configs -
* * * * Where you keep custom configurations and the Ubuif config object
* * * controllers -
* * * * Where you keep your controllers
* * * layouts -
* * * * Where you store your layouts
* * * models -
* * * * This will be later used for I guess mainly models? Didn't use any during the dev testing but you might
* * * views -
* * * * index -
* * * * * The default controller and views scripts
* * library -
* * * Ubuif -
* * * * The standard Ubuif library files
* * node_modules -
* * * this is where the symlink/shortcut for Ubuif is and external modules used in Ubuifs and your developments
* * tests -
* * * Will be used for test stubs when creating objects using the cli tool

Unlike Zend, there's no need to suffix your controller file names, its pointless and endlessly annoying. The actions within though are suffixed with Action and must be to be considered a valid action in the url format /controller/action both which default to index so calling / will serve /index/index/

There currently is no ORM as this was more of an "can it been done and done in a useful way" effort. Gladly I can say it is possible and very much cool! so the next planned steps are to tidy up and make the current code base more usable in a production environment and then add new modules such as an ORM and other requested features.

-------------

**ubuif** was born out of the need for a framework, a framework that could do anything, be anything and at the same time be friendly to the developers and business.

It is a **full MVC** framework and can be used for websites, CMS', command line, **it is still in development** and I try to update it at least once a day but since I only get 2 hours a day to work on it around the rest of my life progress might not be as fast as people want it.

The structure of the framework is loosely based on the Zend Framework, I think its best for developers to stick to something they already know (and if they don't know it, its a good way to expand their knowledge of the structure of a full MVC framework)

I plan to have the firs version completed by the end of this year (2012) and released very early 2013 and I will be looking for developers to add to it, to give me constructive criticism and to help build upon the framework. All contributors will be credited and noted on both the wiki and the website.

I will write full documentation on it one I have a more stable version ready.
