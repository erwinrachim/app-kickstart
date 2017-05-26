module.exports = function (grunt) {

    var sassOptions = {
        style: 'compressed',
        precision: 9,
        unixNewlines: true
    };
    grunt.initConfig({
        sass: {
            bootstrap: {
                options: sassOptions,
                files: {
                    'assets/css/bootstrap.min.css': 'assets/scss/bootstrap/bootstrap.scss'
                }
            },
            style: {
                options: sassOptions,
                files: {
                    'assets/css/style.min.css': 'assets/scss/style/style.scss'
                }
            },
            app: {
                options: sassOptions,
                files: [
                    {
                        expand: true,
                        cwd: 'assets/scss/app/',
                        src: '**/*.scss',
                        dest: 'assets/css',
                        ext: '.min.css'
                    }
                ]
            },
            widgets: {
                options: sassOptions,
                files: [
                    {
                        expand: true,
                        cwd: 'assets/widgets',
                        src: ['**/*.scss'],
                        dest: 'assets/widgets',
                        ext: '.min.css'
                    }
                ]
            }
        },
        uglify: {
            scripts: {
                files: [
                    {
                        expand: true,
                        cwd: 'assets/js',
                        src: ['**/*.js', '!**/*.min.js'],
                        dest: 'assets/js',
                        rename: function (dest, src) {
                            return dest + '/' + src.replace(/\.js$/, '.min.js');
                        }
                    }
                ]
            },
            widgets: {
                files: [
                    {
                        expand: true,
                        cwd: 'assets/widgets',
                        src: ['**/*.js', '!**/*.min.js'],
                        dest: 'assets/widgets',
                        rename: function (dest, src) {
                            return dest + '/' + src.replace(/\.js$/, '.min.js');
                        }
                    }
                ]
            }
        },
        clean: {
            styles: 'assets/css/**/*.css',
            widgetStyles: 'assets/widgets/**/*.css',
            scripts: 'assets/js/**/*.min.js',
            widgetScripts: 'assets/widgets/**/*.min.js'
        },
        watch: {
            bootstrap: {
                files: 'assets/scss/bootstrap/**/*.scss',
                tasks: ['sass:bootstrap']
            },
            style: {
                files: ['assets/scss/style/**/*.scss', 'assets/scss/bootstrap/_variables.scss'],
                tasks: ['sass:style']
            },
            app: {
                files: 'assets/scss/app/**/*.scss',
                tasks: ['sass:app']
            },
            widgetStyles: {
                files: ['assets/widgets/**/*.scss'],
                tasks: ['clean:widgetStyles', 'sass:widgets']
            },
            scripts: {
                files: ['assets/js/**/*.js', '!assets/js/**/*.min.js'],
                tasks: ['clean:scripts', 'uglify:scripts']
            },
            widgetScripts: {
                files: ['assets/widgets/**/*.js', '!assets/widgets/**/*.min.js'],
                tasks: ['clean:widgetScripts', 'uglify:widgets']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['clean', 'sass', 'uglify']);
    grunt.registerTask('minify-js', ['clean:scripts', 'uglify:scripts']);

};
