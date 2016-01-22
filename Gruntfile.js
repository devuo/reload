module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');

  var baseDirectory = grunt.option('base-directory');

  // File Patterns
  // --------------------------------------------------------------------------
  var extensions = ['.css', '.tpl.php', '.twig', '.js'];
  var filePatterns = [];

  for (var i = 0; i < extensions.length; i++) {
    filePatterns.push(baseDirectory + '/**/*' + extensions[i]);
  }

  // Task Configuration
  // --------------------------------------------------------------------------
  var tasks = {

    // Watch file changes
    // ------------------------------------------------------------------------
    watch: {
      options: {
        livereload: true
      },

      files: {
        files: filePatterns,
        tasks: []
      },

    }

  };

  // Composite Tasks
  // --------------------------------------------------------------------------

  grunt.registerTask('default', 'watch');

  // Finish configuring Grunt
  // --------------------------------------------------------------------------

  grunt.initConfig(tasks);

};
