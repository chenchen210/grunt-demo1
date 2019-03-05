module.exports = function(grunt) {
  grunt.initConfig({
    csshint: {
      css: {
        options: {
            csslintrc : '.csslintrc '
            
        },
          src: ['*.css']
          
      }
               
    }
               
  });

    grunt.loadNpmTasks(' grunt-contrib-csslint');

      grunt.registerTask('default', ['csshint']);

};
