module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			options: {
				includePaths: ['sass']
			},
			dist: {
				options: {
					outputStyle: 'expanded',
					sourceMap: true,
					style: 'expanded',
				},
				files: {
					'style.css': 'sass/style.scss',
				}
			}
		},

		autoprefixer:{
			dist: {
				files: {
					'style.css': 'style.css',
				},
			},
		},

		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'style.min.css': ['style.css']
				}
			}
		},

		watch: {
			grunt: {
				options: {
					reload: true
				},
				files: ['Gruntfile.js']
			},

			sass: {
				files: 'sass/**/*.scss',
				tasks: ['sass']
			},
		}
	});

	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-autoprefixer');

	grunt.registerTask('build', ['sass']);
	grunt.registerTask('default', ['build','watch']);
	grunt.registerTask('css', ['sass', 'autoprefixer']);
	grunt.registerTask('minify', ['cssmin', 'uglify']);
}
