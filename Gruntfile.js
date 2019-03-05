module.exports = function() {
  grunt.initConfig({
    less: {
      development: {
        files: {
                    'css/': 'less/'
            
        }
                     
      }
                       
    }
            
  });

    grunt.loadNpmTasks('grunt-contrib-less');

      grunt.registerTask('default', ['less']);

};

