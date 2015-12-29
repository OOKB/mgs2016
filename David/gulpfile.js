
var gulp = require('gulp');
var sync = require('browser-sync');
var reload = sync.reload;
var wiredep = require('wiredep').stream;
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var styledocco = require('gulp-styledocco');
var sass = require('gulp-ruby-sass');
var sourcemaps = require('gulp-sourcemaps');


gulp.task('styledocco', function () {
    gulp.src('app/css/*.css')
      .pipe(styledocco({
        out: 'docs',
        name: 'Decker Library',
        'no-minify': true
      }))
});

// gulp.task('styles', function () {
//   gulp.src('app/styles/sass/*.scss')
//     .pipe(sourcemaps.init())
//       .pipe(sass())
//     .pipe(sourcemaps.write())
//     .pipe(gulp.dest('app/styles'));
// });

gulp.task('styles', function () {
  return sass('app/styles/sass/styles.scss')
    .pipe(gulp.dest('app/css'));
});


//method of gulp, gulp represents a javascript object
//an object is a way to store information
//you can store functions in that object (task)
//first we are going to pass a string of sync and then
//a function. They are parameters of this method
//information that we are passing into the method
//so that it can use it.

//Setup Server
gulp.task('sync', function () {
      //set up a parameter of options
      sync({
              server:{
                baseDir: ['app'],
                directory: true,
                routes: {
                  "/bower_components": "bower_components",
                  "/docs": "docs"
                }
              }
      });
});


//Watch Files

//watch is the name of our task, sync is it's dependancy
//and last is the function we want to happen
gulp.task('watch', ['sync', 'styledocco', 'styles'], function () {
    //Matches any html file in our folder
    //Watches and runs reload
    gulp.watch('app/*.html', reload);
    gulp.watch('docs/*.html',reload);
    gulp.watch('bower.json', ['wiredep']);
    gulp.watch('app/css/*.css', ['styledocco', reload]);
    gulp.watch('app/styles/sass/**/*.scss', ['styles', reload]);
});


//Watch Bower
gulp.task('wiredep', function(){
  gulp.src('app/*.html')
    .pipe(wiredep({
        directory: 'bower_components',
        ignorePath: '../'
    }))

    .pipe(gulp.dest('app'));
});
