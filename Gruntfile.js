module.exports = function (grunt) {
  grunt.initConfig({
        cssmin: {  
          options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
          },
          target: {
            files: {
              'dist/rectangle.css': ['./retangle.css']
            }   
          }
        }                 
  });

    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['cssmin']); 

};
