/* jshint node: true */

module.exports = function(grunt) {
  "use strict";

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
    jqueryCheck: 'if (!jQuery) { throw new Error(\"Sass Bootstrap requires jQuery\") }\n\n',

    // Task configuration.
    clean: {
      dist: ['dist', '<%= pkg.name %>-dist.zip']
    },

    jshint: {
      options: {
        jshintrc: 'js/.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      src: {
        src: ['js/*.js']
      },
      test: {
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
        banner: '<%= banner %>'
      },
      bootstrap: {
        src: ['<%= concat.bootstrap.dest %>'],
        dest: 'dist/js/<%= pkg.name %>.min.js'
      }
    },

    compass: {
      bootstrap: {
        options: {
          config: 'config.rb',
          environment: 'development',
          force: grunt.option('force') || false
        }
      }, 
      min: {
        options: {
          config: 'config.rb',
          environment: 'production',
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
          {expand:true, cwd: 'dist/', dest: 'dist/', src: ['**']}
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
      server: {
        options: {
          port: 9003,
          base: '.'
        }
      }
    },

    jekyll: {
      docs: {}
    },

    validation: {
      options: {
        reset: false
      },
      files: {
        src: ["_gh_pages/**/*.html"]
      }
    },

    watch: {
      src: {
        files: '<%= jshint.src.src %>',
        tasks: ['jshint:src', 'qunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'qunit']
      },
      css: {
        files: ['sass/*.scss', 'sass/*/*.scss'],
        tasks: ['compass:bootstrap']
      }
    }
  });


  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-jekyll');

  // Docs HTML validation task
  grunt.registerTask('validate-html', ['jekyll', 'validation']);

  // Test task.
  grunt.registerTask('testSubtasks', ['jshint', 'qunit', 'validate-html']);
  grunt.registerTask('testSubtasksNoValidation', ['jshint', 'qunit', 'jekyll']);
  grunt.registerTask('test', 
    function() {
      if(grunt.option('validate')) {
        grunt.task.run('testSubtasks');
      } else {
        grunt.task.run('testSubtasksNoValidation');
      }
    }
  );

  // JS distribution task.
  grunt.registerTask('dist-js', ['concat', 'uglify']);

  // CSS distribution task.
  grunt.registerTask('dist-css', ['compass:bootstrap']);

  // Fonts distribution task.
  grunt.registerTask('dist-fonts', ['copy:fonts']);

  // Full distribution task.
  grunt.registerTask('dist', ['clean', 'dist-fonts', 'dist-css', 'dist-js', 'compress:dist']);

  // Default task.
  grunt.registerTask('default', ['test', 'dist']);

};