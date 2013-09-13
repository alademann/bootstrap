<a href="http://alademann.github.io/sass-bootstrap/">
  <img src="http://alademann.github.io/sass-bootstrap/assets/img/bootstrap-docs-readme.png" width="100px">
</a>

# Sass Bootstrap v3.0.15

Sass Bootstrap is a sleek, intuitive, and powerful front-end framework for faster and easier web development, created and maintained by [Mark Otto](http://twitter.com/mdo) and [Jacob Thornton](http://twitter.com/fat), and ported to Sass/Compass by [Aaron Lademann](https://github.com/alademann).

To get started, check out the [SASS Bootstrap Documentation](http://alademann.github.io/sass-bootstrap/)!



## Quick start

Three quick start options are available:

* [Download the latest release](https://github.com/alademann/sass-bootstrap/zipball/master).
* Clone the repo: `$ git clone git://github.com/alademann/sass-bootstrap.git`.
* Install with [Bower](http://bower.io): `bower install alademann-sass-bootstrap`.

Read the [Getting Started page](http://alademann.github.io/sass-bootstrap/getting-started/) for information on the framework contents, basic template guidelines, and more.


## Bugs and feature requests

Have a bug or a feature request? [Please open a new issue](https://github.com/alademann/sass-bootstrap/issues). Before opening any issue, please search for existing issues and read the [Issue Guidelines](https://github.com/necolas/issue-guidelines), written by [Nicolas Gallagher](https://github.com/necolas/).



## Documentation

SASS Bootstrap's docs are built using [Jekyll](http://jekyllrb.com) and hosted on [GitHub Pages](http://pages.github.com/). To view the [Sass Bootstrap Docs](http://alademann.github.io/sass-bootstrap/) locally, you'll need to [install Jekyll](https://github.com/mojombo/jekyll/wiki/install) to run a local server.


### Running Jekyll locally alongside Sass / Compass

We have [Sass](http://sass-lang.com) set up to compile static CSS into the directory that Jekyll "watches" when instructed to automatically regenerate.  If you are wanting to view documentation locally at ```localhost:9003```, we recommend uncommenting the ```auto: --auto``` instruction in ```_config.yml```.  This way, when running ```$ compass watch```, the updated CSS files injected into the directory Jekyll is watching will force regeneration of your static documentation files.  

You should also comment out the remote url instruction in ```_config.yml``` and uncomment the local ```url: /``` declaration so that the dynamic ```{{ site.url }}``` tags in the Jekyll templates will generate URLs that will work on your rig.



## Compiling CSS and JavaScript

### Install SCSS

SASS Bootstrap makes use of [Sassy CSS](http://sass-lang.com) and [Compass](http://compass-style.org), so you'll need to install both ruby gems to generate static CSS.

```
$ sudo gem install sass
```

```
$ sudo gem install compass
```

### Install Grunt

Sass Bootstrap uses [Grunt](http://gruntjs.com/) with convenient methods for working with the framework. It's how we compile our code, run tests, and more. To use it, install the required dependencies as directed and then run some Grunt commands.

From the command line:

1. Install `grunt-cli` globally with `npm install -g grunt-cli`.
2. Install the [necessary local dependencies](package.json) via `npm install`

When completed, you'll be able to run the various Grunt commands provided from the command line.

**Unfamiliar with `npm`? Don't have node installed?** That's a-okay. npm stands for [node packaged modules](http://npmjs.org/) and is a way to manage development dependencies through node.js. [Download and install node.js](http://nodejs.org/download/) before proceeding.

### Available Grunt commands

#### Build - `grunt`
Run `grunt` to run tests locally and compile the CSS and JavaScript into `/dist`. **Uses [recess](http://twitter.github.io/recess/) and [UglifyJS](http://lisperator.net/uglifyjs/).**

#### Only compile CSS and JavaScript - `grunt dist`
`grunt dist` creates the `/dist` directory with compiled files. **Uses [recess](http://twitter.github.io/recess/) and [UglifyJS](http://lisperator.net/uglifyjs/).**

#### Tests - `grunt test`
Runs [JSHint](http://jshint.com) and [QUnit](http://qunitjs.com/) tests headlessly in [PhantomJS](http://phantomjs.org/) (used for CI).

#### Watch - `grunt watch`
This is a convenience method for watching just Less files and automatically building them whenever you save.

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
