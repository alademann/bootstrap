/* jshint node: true */
var path = require('path');
var docsFolderMount = function folderMount(connect, point) {
    return connect.static(path.resolve(point+'/_gh_pages/'));
};

module.exports = function(grunt) {
  "use strict";

  var modules = {
      self: this,
      grunt: grunt
  };

  modules.livereload = require('./docs-assets/js/grunts/livereload')(modules);

  RegExp.quote = require('regexp-quote')

  // Project configuration.
  grunt.initConfig({

    // Metadata.
    pkg: grunt.file.readJSON('package.json'),
    banner: '/**\n' +
              '* Sass Bootstrap v<%= pkg.version %> by <%= pkg.author %>\n' +
              '* Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
              '* Licensed under <%= _.pluck(pkg.licenses, "url").join(", ") %>.\n' +
              '*\n' +
              '* Designed and built with all the love in the world by @alademann, @mdo and @fat.\n' +
              '*/\n',
    jqueryCheck: 'if (typeof jQuery === "undefined") { throw new Error(\"Sass Bootstrap requires jQuery\") }\n\n',

    // Task configuration.
    clean: {
      dist: ['dist', '_gh_pages', '<%= pkg.name %>-dist.zip']
    },

    jshint: {
      plugins: {
        options: {
          jshintrc: 'js/.jshintrc'
        },
        src: ['js/*.js']
      },
      docs: {
        options: {
          jshintrc: 'js/.jshintrc'
        },
        src: ['docs-assets/js/application.js']
      },
      test: {
        options: {
          jshintrc: 'js/.jshintrc'
        },
        src: ['js/tests/unit/*.js']
      }
    },

    concat: {
      options: {
        banner: '<%= banner %><%= jqueryCheck %>',
        stripBanners: false
      },
      bootstrap: {
        src: [
          'js/transition.js',
          'js/alert.js',
          'js/button.js',
          'js/carousel.js',
          'js/collapse.js',
          'js/dropdown.js',
          'js/modal.js',
          'js/tooltip.js',
          'js/popover.js',
          'js/scrollspy.js',
          'js/tab.js',
          'js/affix.js'
        ],
        dest: 'dist/js/<%= pkg.name %>.js'
      }
    },

    uglify: {
      options: {
        banner: '<%= banner %>',
        report: 'min'
      },
      bootstrap: {
        src: ['<%= concat.bootstrap.dest %>'],
        dest: 'dist/js/<%= pkg.name %>.min.js'
      }
    },

    cssmin: {
      bootstrap: {
        expand : true,
        cwd    : 'dist/css/',
        src    : [
          '<%= pkg.name %>.css'
        ],
        dest : 'dist/css/',
        ext  : '.min.css',
        options : {
          banner : '' +
            '/*!\n' +
            '* <%= pkg.name %> v<%= pkg.version %>\n' +
            '*\n' +
            '* Copyright <%= grunt.template.today("yyyy") %> Twitter, Inc\n' +
            '* Licensed under the Apache License v2.0\n' +
            '* http://www.apache.org/licenses/LICENSE-2.0\n' +
            '*\n' +
            '* Designed and built with all the love in the world by @mdo and @fat.\n' +
            '* Sass -ified by Aaron Lademann @alademann\n' +
            '*/\n'
        }
      }
    },

    compass: {
      bootstrap: {
        options: {
          config: 'config.rb',
          environment: 'development',
          force: grunt.option('force') || false
        }
      }
    },

    compress: {
      dist: {
        options: {
          archive: '<%= pkg.name %>-dist.zip'
        },
        files: [
          {expand:true, cwd: 'dist/', dest: 'sass-bootstrap/', src: ['**']}
        ]
      }
    },

    copy: {
      fonts: {
        expand: true,
        src: ["fonts/*"],
        dest: 'dist/'
      }
    },

    qunit: {
      options: {
        inject: 'js/tests/unit/phantom.js'
      },
      files: ['js/tests/*.html']
    },

    connect: {
      test: {
        options: {
          port: 3000,
          base: '.'
        }
      },
      // docs server
      docs: {
        options: {
          port: 9001,
          hostname: '0.0.0.0',
          middleware: function(connect, options) {
            return [docsFolderMount(connect, options.base)];
          }
        }
      }
    },

    jekyll: {
      docs: {}
    },

    validation: {
      options: {
        reset: true,
        maxTry: 1,
        relaxerror: [
            "Bad value X-UA-Compatible for attribute http-equiv on element meta.",
            "Element img is missing required attribute src.",
        ]
      },
      files: {
        src: ["_gh_pages/**/*.html"]
      }
    },

    watch: {
      plugins: {
        files: '<%= jshint.plugins.src %>',
        tasks: ['jshint:plugins', 'qunit'],
        options: {
          livereload: true
        }
      },
      docsjs: {
        files: '<%= jshint.docs.src %>',
        tasks: ['jshint:docs'],
        options: {
          livereload: true
        }
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'qunit'],
        options: {
          livereload: true
        }
      },
      scss: {
        files: ['sass/*.scss', 'sass/*/*.scss'],
        tasks: ['compass:bootstrap'],
        options: {
          // no need for this because the compile that occurs in compass
          // will update the css files that are being watched by the watch:html task
          livereload: false
        }
      },
      docshtml: {
        files: ['docs-assets/**/*'],
        tasks: ['jekyll:docs'],
        options: {
          livereload: true
        }
      },
      html: {
        files: [
          // must watch here to trigger jekyll when compass finishes compiling
          'dist/**/*.css',
          'fonts/**/*',
          'js/**/*',
          '**/*.html',
          '!_gh_pages/**/*',
          '!submodules/**/*'
        ],
        tasks: ['jekyll:docs'],
        options: {
          livereload: true
        }
      }
    },

    sed: {
      versionNumber: {
        pattern: (function () {
          var old = grunt.option('oldver')
          return old ? RegExp.quote(old) : old
        })(),
        replacement: grunt.option('newver'),
        recursive: true
      }
    }
  });


  // These plugins provide necessary tasks.
  // grunt.loadNpmTasks('browserstack-runner');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-css');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-sed');


  grunt.registerTask('lr', modules.livereload);

  // Docs HTML validation task
  grunt.registerTask('validate-html', ['clean', 'jekyll', 'validation']);

  // Test task.
  var testSubtasks = ['dist-css', 'jshint', 'qunit', 'validate-html'];
  var testSubtasksNoHTMLValidation = ['dist-css', 'jshint', 'qunit'];
  // Only run BrowserStack tests under Travis
  // if (process.env.TRAVIS) {
  //   // Only run BrowserStack tests if this is a mainline commit in twbs/bootstrap, or you have your own BrowserStack key
  //   if ((process.env.TRAVIS_REPO_SLUG === 'alademann/sass-bootstrap' && process.env.TRAVIS_PULL_REQUEST === 'false') || process.env.ALADEMANN_HAVE_OWN_BROWSERSTACK_KEY) {
  //     testSubtasks.push('browserstack_runner');
  //   }
  // }
  grunt.registerTask('test', testSubtasks);
  grunt.registerTask('test-no-html', testSubtasksNoHTMLValidation);

  // JS distribution task.
  grunt.registerTask('dist-js', ['concat', 'uglify']);

  // CSS distribution task.
  grunt.registerTask('dist-css', ['compass:bootstrap', 'cssmin:bootstrap']);

  // Fonts distribution task.
  grunt.registerTask('dist-fonts', ['copy:fonts']);

  // Full distribution task.
  grunt.registerTask('dist', ['clean', 'dist-fonts', 'dist-css', 'dist-js', 'compress:dist']);

  // Default task.
  grunt.registerTask('default', ['test-no-html', 'dist']);

  // Dev 'default' task that runs jekyll server, delivers uncompressed css and watch capabilities
  grunt.registerTask('dev', 
    [
      'lr',
      'connect:docs',
      'default',
      'watch'
    ]
  );

  // Version numbering task.
  // grunt change-version-number --oldver=A.B.C --newver=X.Y.Z
  // This can be overzealous, so its changes should always be manually reviewed!
  grunt.registerTask('change-version-number', ['sed']);

};
