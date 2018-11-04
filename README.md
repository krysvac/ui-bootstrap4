# UI Bootstrap 4

_[AngularJS](http://angularjs.org/) directives specific to [Bootstrap 4](http://getbootstrap.com)_

[![Build Status](https://travis-ci.org/krysvac/ui-bootstrap4-fixed.svg?branch=master)](https://travis-ci.org/krysvac/ui-bootstrap4-fixed)
[![devDependencies Status](https://david-dm.org/krysvac/ui-bootstrap4-fixed/dev-status.svg)](https://david-dm.org/krysvac/ui-bootstrap4-fixed?type=dev)

## Fork

This is a fork of the [ui-bootstrap4][] project, which in turn is a fork of the original [angular-ui-bootstrap][] project. It has been modified to work with Bootstrap 4. The reason this repository exists is because some applications are choosing (or are forced to chose) to stick with AngularJS, but would like to move to Bootstrap 4. (Especially considering the fact that [Bootstrap 3 is EoL](https://github.com/twbs/bootstrap/issues/20631).)

The [ui-bootstrap4][] fork makes as few changes as possible to the original source code, so that upstream changes can be merged in with minimal issues. Some work has been used from other attempts to do the same thing, such as the fork from [dietergeerts][].

This fork aims to further improve and cleanup the project to make it more easily used.

[dietergeerts]: https://github.com/dietergeerts/bootstrap
[ui-bootstrap4]: https://github.com/morgul/ui-bootstrap4
[angular-ui-bootstrap]: https://github.com/angular-ui/bootstrap
[ui-bootstrap4-fixed]: https://github.com/krysvac/ui-bootstrap4-fixed
[docs]: https://krysvac.github.io/ui-bootstrap4-fixed/docs/
[docs-build]: https://github.com/krysvac/ui-bootstrap4-fixed/tree/master/docs

## Quick links

- [Demo](#demo)
- [Installation](#installation)
    - [NPM](#install-with-npm)
    - [Custom](#custom-build)
    - [Manual](#manual-download)
- [Webpack / JSPM](#webpack--jspm)
- [Available grunt commands and short description](#available-grunt-commands-and-short-description)
    - [The commands that matter](#the-commands-that-matter)
    - [Building a release](#building-a-release)
- [Files; Where they're located and what they do](#files-where-theyre-located-and-what-they-do)
    - [Directives](#directives)
        - [Templates for directives](#templates-for-directives)
    - [Tests](#tests)
    - [Documentation](#documentation)
        - [Generation of documentation](#generation-of-documentation)
- [Configurable values](#configurable-values)
- [Versioning](#versioning)
- [Support](#support)
    - [FAQ](#faq)
    - [Supported browsers](#supported-browsers)

## Demo

Do you want to see directives in action? Visit the [docs] page!

## Installation

Installation is easy as UI Bootstrap has minimal dependencies - only the AngularJS and Twitter Bootstrap's CSS are required.

### Module dependencies 

* UI Bootstrap depends on [ngAnimate](https://docs.angularjs.org/api/ngAnimate) for transitions and animations, such as the accordion, carousel, etc. Include `ngAnimate` in the module dependencies for your app in order to enable animation.
* UI Bootstrap depends on [ngTouch](https://docs.angularjs.org/api/ngTouch) for swipe actions. Include `ngTouch` in the module dependencies for your app in order to enable swiping.

### Angular Requirements

* UI Bootstrap 1.0 and higher _requires_ Angular 1.4.x or higher and it has been tested with Angular 1.4.8.

### Bootstrap Requirements

* UI Bootstrap 3.0 and higher _requires_ Bootstrap CSS version 4.x or higher and it has been tested with Bootstrap CSS 4.1.3

#### Install with NPM

```sh
$ npm install ui-bootstrap4-fixed
```

#### Install with Yarn

```sh
$ yarn add ui-bootstrap4-fixed
```

#### Custom build

Head over to [docs][] and hit the _Create a build_ button to create your own custom UI Bootstrap build, just the way you like it.

#### Manual download

After downloading dependencies (or better yet, referencing them from your favorite CDN) you need to download build version of this project. All the files and their purposes are described here:
[docs-build].  
Don't worry, if you are not sure which file to take, opt for `ui-bootstrap-tpls-[version].min.js`.

### Adding dependency to your project

When you are done downloading all the dependencies and project files the only remaining part is to add dependencies on the `ui.bootstrap` AngularJS module:

```js
angular.module('myModule', ['ui.bootstrap']);
```

## Webpack / JSPM

To use this project with webpack, follow the [NPM](#install-with-npm) instructions.
Now, if you want to use only the accordion, you can do:

```js
import accordion from 'ui-bootstrap4-fixed/src/accordion';

angular.module('myModule', [accordion]);
```

You can import all the pieces you need in the same way:

```js
import accordion from 'ui-bootstrap4-fixed/src/accordion';
import datepicker from 'ui-bootstrap4-fixed/src/datepicker';

angular.module('myModule', [accordion, datepicker]);
```

This will load all the dependencies (if any) and also the templates (if any).

Be sure to have a loader able to process `css` files like `css-loader`.

If you would prefer not to load your css through your JavaScript file loader/bundler, you can choose to import the `index-nocss.js` file instead, which is available for the modules:
* carousel
* datepicker
* datepickerPopup
* dropdown
* modal
* popover
* position
* timepicker
* tooltip
* typeahead

The other modules, such as `accordion` in the example below, do not have CSS resources to load, so you should continue to import them as normal:

```js
import accordion from 'ui-bootstrap4-fixed/src/accordion';
import typeahead from 'ui-bootstrap4-fixed/src/typeahead/index-nocss.js';

angular.module('myModule', [accordion, typeahead]);
```

## Available grunt commands and short description

### Predefined helper tasks

* `eslint` Runs ESLint on `Gruntfile.js` and all of the `.js` files in the `src` folder
* `html2js` Converts the `.html` files in the `template` folder to javascript AngujarJS module template files
* `before-test` Runs the `eslint` and `html2js` tasks
* `build` Creates the required variables and files to build docs or make a release etc. 
* `copy` Copies docs assets and files etc.
* `after-test` Runs the `build` and `copy` tasks

### The commands that matter

* `grunt`

    Default command. This runs the `before-test`, `test` and `after-test` tasks

* `grunt test`

    Runs the `test` task, which only executes the tests defined in the test-files. For more information see [Tests](#tests)

* `grunt watch`

    Watches your directive and template files, as well as the docs and continually rebuilds them

* `grunt docs`

    Rebuilds your docs - See [Documentation](#documentation) for more information.

* `grunt release`
 
    Creates a release - See [Building a release](#building-a-release) for more information

### Building a release

```
grunt release:3.0.0
```
(Obviously, replace `3.0.0` with the version you're releasing.)

This will build all of the docs and bundle everything together etc. It will add the docs to git, tag the commit and push it. After that it will build the project and publish to npm.

## Files; Where they're located and what they do

### Directives

All of the directives are stored in the `src` folder in a folder named after the directive.

To create a new directive you need two things in said folder (for this example the folder would be named `newDirective`):
* An `index.js` file formatted like this:
```js
require('./newDirective');

var MODULE_NAME = 'ui.bootstrap.module.newDirective';

angular.module(MODULE_NAME, ['ui.bootstrap.newDirective']);

module.exports = MODULE_NAME;
```
* The `.js` file containing an AngularJS module, named the same as the folder it resides in. For this example it would be named `newDirective.js`

Aside from the index and directive files, you can have a `.css` file and an optional `index-nocss.js` file. Which, unsurprisingly, should not include any css-files.

#### Templates for directives

To add templates to your directive, create a folder named after your directive in the `template` folder.  

Place one or more files named after the controller(s) that exist in your module in said folder.

Controllers are named using `camelCase` in the code and the template files are named the same using `snake-case` with hyphens.

### Tests

The tests are located in `src/XXX/test/XXX.spec.js` and are run with karma and jasmine.  
To run the tests you simply run the `grunt test` command.

### Documentation

The documentation for each directive is stored in its respective folder, i.e for _**accordion**_ it would be `src/accordion/docs`.  

It consists of three files, a _**demo.html**_ view containing one or more examples, a _**demo.js**_ controller containing the logic, and a _**readme.md**_ file containing the documentation for that particular directive.  

If a directive lacks one or more of these files, it won't be shown on the docs page.

#### Main part

The main part of the documentation comes from the files in the `misc/demo` folder. What you see on the docs page is based on the template file `index.html` and the controller(s) in the `assets/app.js` file.

#### Generation of documentation

To (re)generate the docs, perhaps after you've added a directive or updated some information, run the `grunt docs` command.

## Configurable values

For this project, there are several configurable values. Most of them don't need to be changed, however, there are a few files which contain values of interest.

These files are:
* `misc/demo/assets/app.js`

    In this file, in the MainCtrl function, there are two variables, `repoName` and `versionsMappingUrl` used to generate the url to the `versions-mapping.json` file that the docs page uses.
    
* `misc/demo/assets/plunker.js`

    This file contains three variables: `accountName`, `accountUrl` and `repoName`. These are used to generate the correct link to the template files when opening an example in plunker.
    
* `Gruntfile.js`

    This file has a lot of variables. But the ones to note are: `reponame`, `accountname` and `pathToDocsFolder`.  
    The two first variables are used to generate the correct links for various documents. The third one is used to create a correct link to the source code for the docs page using this format
    
    ```
    https://github.com/<%= accountname %>/<%= reponame %>/<%= pathToDocsFolder %>
    ```
    
    **It's important to note that all links generated are using github as the domain.**

## Versioning

Pre-2.0.0 does not follow a particular versioning system. 2.0.0 and onwards follows [semantic versioning](http://semver.org/).

## Support

### FAQ



### Supported browsers

Directives from this repository are automatically tested with the following browsers:
* Chrome (stable and canary channel)
* Firefox
* IE 9 and 10
* Opera
* Safari

Modern mobile browsers should work without problems.
