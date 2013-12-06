/* jshint node:true */

module.exports = function(grunt) {

  // Configuration
  grunt.initConfig({

    'ftp-deploy': {
      build: {
        auth: {
          host: 'startcontinue.com',
          port: 21
        },
        src: '_site',
        dest: 'blog',
        exclusions: ['Gruntfile.js',
                     'package.json',
                     '.git*',
                     'node_modules']
      }
    },

    jekyll: {
      build: {
        options: {
          dest: '_site',
          config: '_config.yml'
        }
      },
      watch: {
        options: {
          dest: '_site',
          config: '_config.yml',
          serve: true,
          watch: true
        }
      }
    }

  });

  // Plugins
  grunt.loadNpmTasks('grunt-ftp-deploy');
  grunt.loadNpmTasks('grunt-jekyll');

  // Tasks
  grunt.registerTask('default', ['jekyll:build']);
  grunt.registerTask('watch', ['jekyll:watch']);
  grunt.registerTask('deploy', ['default', 'ftp-deploy']);

};
