Prerequisites
=============
You will need the following to start working on the project:

1. Node
2. NPM
3. Grunt
4. Bower
5. Git

Overview
========

Shortcuts
---------
As the task supposed to take 4-6h, there where few shortcuts taken to only illustrate some concepts rather than fully complete them. Examples of shortcuts: styles haven't been applied, only very basic responsive layout, numbers of tests is lower than should be (especially end to end), server side code hasn't been added. 

Technologies Utilised
---------------------
Project heavily uses Grunt tasks both for building, development and deploying. 

Testing utilises: Jasmine, Protractor, Karma and uses chrome for e2e test.

UI: bootstrap

Routing: ng-route

Setup
=====
1. Clone the repo using: `git clone`
2. Optionally restore bower and npm packages using `npm install` and `bower install`

Running Locally
===============
To start application locally use `npm start` (it will install npm and bower and will run it locally)

Running Tests
=============
To run tests use `npm test`. This will run Unit Tests and end to end tests.

Building
========
To build website for deployment (theoretically), run `grunt build` this will create a folder called 'dist'. It will contain minfied and concatenated js and css as well as optimised images.

__Note: website isn't ready to be deployed in the current shape and form. Check 'Next Steps' for the things which are still missing.__

Next Steps
==========
1. Add server, which host code. Node would be an easy choice
2. Chnage grunt task to use node rather than 'connect'
3. Extend number of e2e tests as at the moment it has only few to illustrate the conecpt, as well as Unit Tests
4. Style website
5. Setup CI, which will run Unit Tests and push to a test environemnt
6. Run end to end test on a BrowserStack or other platform which allows to cover a big chank of browsers
7. Add logging of errors and perfromance monitoring with something like NewRelic 