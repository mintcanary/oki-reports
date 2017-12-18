module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      main: {
        files: [{
          expand: true,
          cwd: '.',
          src: ['styles/base.scss', 'styles/prism.scss'],
          dest: 'docs/css',
          ext: '.css'
        }]
      },
      scoped: {
        files: [{
          expand: true,
          cwd: '.',
          src: ['avoiding-data-use-silos/style.scss', 'governing-by-rankings/style.scss', 'spatial-data-package-investigation/style.scss'],
          dest: 'docs/css',
          ext: '.css'
        }]
      }
    },

    postcss: {
      options: {
        map: true,
        processors: [
          require('autoprefixer')
        ]
      },
      dist: {
        src: 'docs/**/*.css'
      }
    },

    includes: {
      files: {
        src: ['avoiding-data-use-silos/index.html', 'governing-by-rankings/index.html', 'spatial-data-package-investigation/index.html'], // Source files
        dest: 'docs', // Destination directory
        cwd: '.',
        options: {
          silent: true
        }
      }
    },

		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass', 'postcss:dist']
			},
      includes: {
        files: ['avoiding-data-use-silos/index.html', 'governing-by-rankings/index.html', 'spatial-data-package-investigation/index.html'],
        tasks: ['includes']
      },
      options: {
        livereload: true,
      }
    },

    connect: {
      server: {
        options: {
          base: 'docs',
          livereload: true
        }
      }
    }
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-includes');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default',['connect', 'watch']);

};
