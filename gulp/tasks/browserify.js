/* browserify task
   ---------------
   Bundle javascripty things with browserify!
*/

var gulp = require('gulp');

gulp.task('browserify', ['jshint'], function(){
  var browserify   = require('gulp-browserify');
  var debowerify   = require('debowerify');
  var reactify     = require('reactify');
  var handleErrors = require('../util/handleErrors');
  var plumber      = require('gulp-plumber');
  var paths        = require('../config/paths');
  var rename       = require('gulp-rename');
  var size         = require('gulp-size');

  return gulp.src(paths.source.main_script, {read: false})
    .pipe(plumber(handleErrors))
    .pipe(browserify({
      transform: ['debowerify', 'reactify'],
      debug: true,
      extensions: ['.js', '.jsx']
    }))
    .pipe(rename('app.js'))
    .pipe(size())
    .pipe(gulp.dest(paths.dest.scripts));
});
