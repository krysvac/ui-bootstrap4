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

## Help Wanted

I did this for a work project, and, frankly, we've gotten what we needed out of it. I'd love to see this cleaned up and maybe even maintained... but I just don't have the time myself. I'll accept merge requests, and fight with the build system... but that's basically it. If someone would like to step in, just let me know and I'll add you to the project. Just open an issue, and I'll respond.

Wanting to contribute, but not take over the reigns? The things that are really holding this project back are, as I can see it:

* [ ] Undocumented/confusing build system.
    * [ ] The whole `SNAPSHOT` thing seems like it adds a lot of complexity, for very little gain.
    * [ ] Making a release should be a single `npm` command
    * [ ] Getting started with development should be very simple
* [ ] Switch to ES2015
    * [ ] The code should be cleaned up, and better formatted
    
I'll add more as I think of them / have the time.

## Quick links
- [Demo](#demo)
- [Installation](#installation)
    - [NPM](#install-with-npm)
    - [Custom](#custom-build)
    - [Manual](#manual-download)
- [Webpack / JSPM](#webpack--jspm)
- [Support](#support)
    - [FAQ](#faq)
    - [Code of Conduct](#code-of-conduct)
    - [Supported browsers](#supported-browsers)
    - [Need help?](#need-help)
    - [Found a bug?](#found-a-bug)
- [Contributing to the project](#contributing-to-the-project)
- [Development, meeting minutes, roadmap and more.](#development-meeting-minutes-roadmap-and-more)


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

## Versioning

Pre-2.0.0 does not follow a particular versioning system. 2.0.0 and onwards follows [semantic versioning](http://semver.org/).

## Support

### Supported browsers

Directives from this repository are automatically tested with the following browsers:
* Chrome (stable and canary channel)
* Firefox
* IE 9 and 10
* Opera
* Safari

Modern mobile browsers should work without problems.


## Building a Release

I've currently hacked out a solution, but the whole thing's very messy. For now, to build a release, just do:

```
$ grunt release:3.0.0
```

(Obviously, replace `3.0.0` with the version you're releasing.) That should build a correct release, and update the 
docs, and everything.
