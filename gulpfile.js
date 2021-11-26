const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('assets/**/*.scss').pipe(sass()).pipe(dest('assets'));
}

function watchTask() {
  watch(['assets/**/*.scss'], buildStyles);
}

exports.default = series(buildStyles, watchTask);
