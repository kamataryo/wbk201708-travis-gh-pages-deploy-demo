const gulp = require('gulp')
const stylus = require('gulp-stylus')

gulp.task('style', () => gulp
  .src('./src/styles/*.styl')
  .pipe(stylus())
  .pipe(gulp.dest('./dist'))
)

gulp.task('html', () => gulp
  .src('./src/index.html')
  .pipe(gulp.dest('./dist'))
)

gulp.task('default', ['style', 'html'])
