# Sass Bootstrap v3.0.17

Sass Bootstrap is a sleek, intuitive, and powerful front-end framework for faster and easier web development, created and maintained by [Mark Otto](http://twitter.com/mdo) and [Jacob Thornton](http://twitter.com/fat), and ported to Sass/Compass by [Aaron Lademann](https://github.com/alademann).

To get started, check out the [SASS Bootstrap Documentation](http://alademann.github.io/sass-bootstrap/)!



## Quick start

Three quick start options are available:

* [Download the latest release](https://github.com/alademann/sass-bootstrap/releases/tag/3.0.17).
* Clone the repo: `$ git clone git://github.com/alademann/sass-bootstrap.git`.
* Install with [Bower](http://bower.io): `bower install sass-bootstrap-compass`.

Read the [Getting Started page](http://alademann.github.io/sass-bootstrap/getting-started/) for information on the framework contents, templates, examples and more.


## Bugs and feature requests

Have a bug or a feature request? [Please open a new issue](https://github.com/alademann/sass-bootstrap/issues). Before opening any issue, please search for existing issues and read the [Issue Guidelines](https://github.com/necolas/issue-guidelines), written by [Nicolas Gallagher](https://github.com/necolas/).

You may use [this JS Bin](http://jsbin.com/aYazOwU/1/edit) as a template for your bug reports.



## Documentation

SASS Bootstrap's docs are built using [Jekyll](http://jekyllrb.com) and hosted on [GitHub Pages](http://pages.github.com/). To view the [Sass Bootstrap Docs](http://alademann.github.io/sass-bootstrap/) locally, you'll need to [install Jekyll](https://github.com/mojombo/jekyll/wiki/install) to run a local server.


### Running Jekyll Docs locally alongside Sass / Compass

1. If necessary, [install Jekyll](http://jekyllrb.com/docs/installation) (requires v1.x).
2. Install Sass and Compass by running `gem install sass && gem install compass`. (may have to use admin priveledges)
3. Install Grunt dependencies by running `npm install -g grunt-cli && npm install`. (may have to use admin priveledges)
4. Run `grunt dev` - and everything will compile, and be watched... complete with Live Reload functionality! (Requires browser extensions)
5. Open [http://localhost:9001](http://localhost:9001) in your browser, and voila.



### Install Grunt

Sass Bootstrap uses [Grunt](http://gruntjs.com/) with convenient methods for working with the framework. It's how we compile our code, run tests, and more. To use it, install the required dependencies as directed and then run some Grunt commands.

From the command line:

1. Install `grunt-cli` globally with `npm install -g grunt-cli`.
2. Install the [necessary local dependencies](package.json) via `npm install`

When completed, you'll be able to run the various Grunt commands provided from the command line.

**Unfamiliar with `npm`? Don't have node installed?** That's a-okay. npm stands for [node packaged modules](http://npmjs.org/) and is a way to manage development dependencies through node.js. [Download and install node.js](http://nodejs.org/download/) before proceeding.

### Available Grunt commands

#### Build - `grunt`
Run `grunt` to run js tests locally and compile the CSS and JavaScript into `/dist`.

#### Only compile CSS and JavaScript - `grunt dist`
`grunt dist` creates the `/dist` directory with compiled files.

#### Tests - `grunt test`
Runs [JSHint](http://jshint.com) and [QUnit](http://qunitjs.com/) tests headlessly in [PhantomJS](http://phantomjs.org/) (used for CI).

#### Watch - `grunt dev`
This is a convenience method that watches all the assets required to run the documentation locally, and will recompile when you save any HTML / SCSS / JS file.  __Will also automatically refresh your browser if you install the LiveReload browser extension__.

### Troubleshooting dependencies

Should you encounter problems with installing dependencies or running Grunt commands, uninstall all previous dependency versions (global and local). Then, rerun `npm install`.




## Contributing

Please submit all pull requests against *sass-wip branches. If your pull request contains JavaScript patches or features, you must include relevant unit tests. All HTML and CSS should conform to the [Code Guide](http://github.com/mdo/code-guide), maintained by [Mark Otto](http://github.com/mdo).



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
