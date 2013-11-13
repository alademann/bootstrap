# Sass Bootstrap v3.0.21 [![Build Status](https://travis-ci.org/alademann/sass-bootstrap.png)](https://travis-ci.org/alademann/sass-bootstrap) [![devDependency Status](https://david-dm.org/alademann/sass-bootstrap/dev-status.png)](https://david-dm.org/alademann/sass-bootstrap#info=devDependencies)

**Sass Bootstrap is focused on being a 1:1 translation from Twitter Bootstrap's Less to Sass.** Bootstrap is a sleek, intuitive, and powerful front-end framework for faster and easier web development, created and maintained by [Mark Otto](http://twitter.com/mdo) and [Jacob Thornton](http://twitter.com/fat), and ported to Sass by [Aaron Lademann](http://twitter.com/alademann).

To get started, check out the [SASS Bootstrap Documentation](http://alademann.github.io/sass-bootstrap/)!



## Quick start

Three quick start options are available:

* [Download the latest release](https://github.com/alademann/sass-bootstrap/releases/tag/3.0.21).
* Clone the repo: `git clone git://github.com/alademann/sass-bootstrap.git`.
* **Install with [Bower](http://bower.io)**: `bower install sass-bootstrap-compass`.

Read the [Getting Started page](http://alademann.github.io/sass-bootstrap/getting-started/) for information on the framework contents, templates and examples, and more.

### What's included

Within the download you'll find the following directories and files, logically grouping common assets and providing both compiled and minified variations. You'll see something like this:

```
sass-bootstrap/
├── css/
│   ├── sass-bootstrap.css
│   └── sass-bootstrap.min.css
├── js/
│   ├── sass-bootstrap.js
│   └── sass-bootstrap.min.js
└── fonts/
    ├── glyphicons-halflings-regular.eot
    ├── glyphicons-halflings-regular.svg
    ├── glyphicons-halflings-regular.ttf
    └── glyphicons-halflings-regular.woff
```

We provide compiled CSS and JS (`sass-bootstrap.*`), as well as compiled and minified CSS and JS (`sass-bootstrap.min.*`). Fonts from Glyphicons are included.



## Bugs and feature requests

Have a bug or a feature request? [Please open a new issue](https://github.com/alademann/sass-bootstrap/issues). Before opening any issue, please search for existing issues and read the [Issue Guidelines](https://github.com/necolas/issue-guidelines), written by [Nicolas Gallagher](https://github.com/necolas/).

You may use [this JS Bin](http://jsbin.com/EbewaNeN/2/embed?html,css,js,output) as a template for your bug reports.



## Documentation

SASS Bootstrap's documentation, included in this repo in the root directory, is built with [Jekyll](http://jekyllrb.com) and publicly hosted on GitHub Pages at <http://alademann.github.io/sass-bootstrap/>. The docs may also be run locally.


### Running documentation locally

1. From the Sass Bootstrap directory, run our handy setup script: `./setup.sh`.
  - If that doesn't work, try installing the Ruby gems separately by running `gem install bundler && bundle`.
2. From the root Sass Bootstrap directory, run `jekyll serve` in the command line.
  - **Windows users:** run `chcp 65001` first to change the command prompt's character encoding ([code page](http://en.wikipedia.org/wiki/Windows_code_page)) to UTF-8 so Jekyll runs without errors.
3. Open <http://localhost:9001> in your browser, and voila.

Learn more about using Jekyll by reading its [documentation](http://jekyllrb.com/docs/home/).

## Compiling CSS and JavaScript

Sass Bootstrap uses [Grunt](http://gruntjs.com/) with convenient methods for working with the framework. It's how we compile our code, run tests, and more. To use it, install the required dependencies as directed and then run some Grunt commands.

### Install Grunt

From the command line:

1. Install `grunt-cli` globally with `npm install -g grunt-cli`.
2. Navigate to the root Sass Bootstrap directory, then run `npm install`. npm will look at [package.json](package.json) and automatically install the necessary local dependencies listed there.

When completed, you'll be able to run the various Grunt commands provided from the command line.

**Unfamiliar with `npm`? Don't have node installed?** That's a-okay. npm stands for [node packaged modules](http://npmjs.org/) and is a way to manage development dependencies through node.js. [Download and install node.js](http://nodejs.org/download/) before proceeding.

### Available Grunt commands

#### Build - `grunt`
Run `grunt` to run tests locally and compile the CSS and JavaScript into `/dist`.

#### Only compile CSS and JavaScript - `grunt dist`
`grunt dist` creates the `/dist` directory with compiled files.

#### Tests - `grunt test`
Runs [JSHint](http://jshint.com) and [QUnit](http://qunitjs.com/) tests headlessly in [PhantomJS](http://phantomjs.org/) (used for CI).

#### Watch - `grunt dev`
This is a convenience method that watches all the assets required to run the documentation locally, and will recompile when you save any HTML / SCSS / JS file.  __Will also automatically refresh your browser if you install the LiveReload browser extension__.

### Troubleshooting dependencies

Should you encounter problems with installing dependencies or running Grunt commands, uninstall all previous dependency versions (global and local). Then, rerun `npm install`.



## Contributing

Please read through our [contributing guidelines](CONTRIBUTING.md). Included are directions for opening issues, coding standards, and notes on development.

More over, if your pull request contains JavaScript patches or features, you must include relevant unit tests. All HTML and CSS should conform to the [Code Guide](http://github.com/mdo/code-guide), maintained by [Mark Otto](http://github.com/mdo).

Editor preferences are available in the [editor config](.editorconfig) for easy use in common text editors. Read more and download plugins at <http://editorconfig.org>.





## Versioning

For transparency and insight into our release cycle, and for striving to maintain backward compatibility, Sass Bootstrap will be maintained under the Semantic Versioning guidelines as much as possible.

Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

* Breaking backward compatibility bumps the major (and resets the minor and patch)
* New additions without breaking backward compatibility bumps the minor (and resets the patch)
* Bug fixes and misc changes bumps the patch

For more information on SemVer, please visit <http://semver.org/>.



## Authors

**Mark Otto**

+ [http://twitter.com/mdo](http://twitter.com/mdo)
+ [http://github.com/mdo](http://github.com/mdo)

**Jacob Thornton**

+ [http://twitter.com/fat](http://twitter.com/fat)
+ [http://github.com/fat](http://github.com/fat)

**Aaron Lademann**

+ [http://twitter.com/alademann](http://twitter.com/alademann)
+ [http://github.com/alademann](http://github.com/alademann)



## Copyright and license

Copyright 2013 Twitter, Inc and Aaron Lademann - under [the Apache 2.0 license](LICENSE).
