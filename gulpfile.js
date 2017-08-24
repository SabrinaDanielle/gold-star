var path = require('path');
var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cssmin = require('gulp-cssmin');

gulp.task('sass', function() {
  return gulp.src(path.resolve(__dirname + '/styles/style.scss'))
  .pipe(sass({
    outputStyle: 'expanded'
  }).on('error', sass.logError))
  .pipe(rename('styles.css'))
  .pipe(gulp.dest(path.resolve(__dirname + '/public/css')));
});

gulp.task('sass:watch', function() {
  return gulp.watch('styles/**/*.scss', ['sass', 'minifyCSS']);
});

gulp.task('minifyCSS', function() {
  return gulp.src(path.resolve(__dirname + '/public/css/styles.css'))
  .pipe(cssmin())
  .pipe(rename('styles.min.css'))
  .pipe(gulp.dest(path.resolve(__dirname + '/public/css')));
});

gulp.task('default', ['sass', 'minifyCSS'], function() {
  return;
});
