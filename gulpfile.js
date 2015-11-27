'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');

var src = {};
var exclude = [
  '!./**/*test**',
  '!./__tests__/**',
  '!./test/**',
  '!./node_modules/**',
  '!./bin/**',
  '!./gulp*',
  '!./dist/**'
];

gulp.task('scripts', function() {
  src.scripts = ['./**/*.js'].concat(exclude);

  var bundler = browserify({
    entries: ['./src/application.js'],
    transform: ['babelify']
  });

  return bundler
    .bundle()
    .on('error', function(err) { console.log(err) })
    .pipe(source('application.js'))
    .pipe(buffer())
    .pipe(gulp.dest('./dist/scripts'))
    .pipe(livereload());
});

gulp.task('styles', function() {
  return gulp
    .src([ 'src/styles.scss' ])
    .pipe(sass({
      sourceMap: 'scss',
      sourceComments: 'normal',
      precision: 10
    }))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/styles'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('src/**/*.scss', ['styles']);
  gulp.watch('src/**/*.js', ['scripts']);
});

gulp.task('build', ['scripts', 'styles']);
gulp.task('default', ['build']);
