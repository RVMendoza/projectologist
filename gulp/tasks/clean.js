var gulp  = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean', function () {
  return gulp.src('build/**/*').pipe(clean());
});

