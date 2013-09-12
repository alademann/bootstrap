<a href="http://alademann.github.io/sass-bootstrap/">
  <img src="http://alademann.github.io/sass-bootstrap/assets/img/bootstrap-docs-readme.png" width="100px">
</a>

# Sass Bootstrap v3.0.0

Sass Bootstrap is a sleek, intuitive, and powerful front-end framework for faster and easier web development, created and maintained by [Mark Otto](http://twitter.com/mdo) and [Jacob Thornton](http://twitter.com/fat), and ported to Sass/Compass by [Aaron Lademann](https://github.com/alademann).

To get started, check out the [SASS Bootstrap Documentation](http://alademann.github.io/sass-bootstrap/)!



## Quick start

Three quick start options are available:

* [Download the latest release](https://github.com/alademann/sass-bootstrap/zipball/master).
* Clone the repo: `$ git clone git://github.com/alademann/sass-bootstrap.git`.

Read the [Getting Started page](http://alademann.github.io/sass-bootstrap/getting-started/) for information on the framework contents, basic template guidelines, and more.


## Bugs and feature requests

Have a bug or a feature request? [Please open a new issue](https://github.com/alademann/sass-bootstrap/issues). Before opening any issue, please search for existing issues and read the [Issue Guidelines](https://github.com/necolas/issue-guidelines), written by [Nicolas Gallagher](https://github.com/necolas/).



## Documentation

SASS Bootstrap's docs are built using [Jekyll](http://jekyllrb.com) and hosted on [GitHub Pages](http://pages.github.com/). To view the [Sass Bootstrap Docs](http://alademann.github.io/sass-bootstrap/) locally, you'll need to [install Jekyll](https://github.com/mojombo/jekyll/wiki/install) to run a local server.


### Running Jekyll locally alongside Sass / Compass

We have [Sass](http://sass-lang.com) set up to compile static CSS into the directory that Jekyll "watches" when instructed to automatically regenerate.  If you are wanting to view documentation locally at ```localhost:9001```, we recommend uncommenting the ```auto: --auto``` instruction in ```_config.yml```.  This way, when running ```$ compass watch```, the updated CSS files injected into the directory Jekyll is watching will force regeneration of your static documentation files.  

You should also comment out the remote url instruction in ```_config.yml``` and uncomment the local ```url: /``` declaration so that the dynamic ```{{ site.url }}``` tags in the Jekyll templates will generate URLs that will work on your rig.



## Compiling CSS

SASS Bootstrap makes use of [Sassy CSS](http://sass-lang.com) and [Compass](http://compass-style.org), so you'll need to install both ruby gems to generate static CSS.

```
$ sudo gem install sass
```

```
$ sudo gem install compass
```

Once you've installed these gems, simply run terminal from your repo directory, and run

```
$ compass watch
```

This will poll your Sass (`.scss`) source files for changes, and automatically update your static CSS for you.  To make this polling a little more user-friendly on a mac, we recommend installing [Compass Growl](https://github.com/Compass/compass-growl)

```
$ sudo gem install compass-growl
```

Then you can be notified via your native OSX growl notifications by adding this to your watch command

```
$ compass watch -r compass-growl
```




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
