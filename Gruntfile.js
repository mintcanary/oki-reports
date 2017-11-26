module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      main: {
        files: [{
          expand: true,
          cwd: '.',
          src: ['styles/base.scss'],
          dest: 'docs/css',
          ext: '.css'
        }]
      },
      scoped: {
        files: [{
          expand: true,
          cwd: '.',
          src: ['understanding-the-drivers-of-open-licence-proliferation/style.scss', 'governing-by-rankings/style.scss'],
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
        src: ['understanding-the-drivers-of-open-licence-proliferation/index.html', 'governing-by-rankings/index.html'], // Source files
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
        files: ['understanding-the-drivers-of-open-licence-proliferation/index.html', 'governing-by-rankings/index.html'],
        tasks: ['includes']
      }
		}
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-includes');

  grunt.registerTask('default',['watch']);

};
