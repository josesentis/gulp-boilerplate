import gulp from 'gulp';
import cssnano from 'gulp-cssnano';
import autoprefixer from 'gulp-autoprefixer';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

import { routes } from '../config';

const SASS_FILES = `${routes.src.styles}/**/*.scss`;

const AUTOPREFIXER_ARGS = {
  browsers: ['last 2 versions'],
  cascade: false,
};

const styles = () =>
  gulp
    .src(SASS_FILES)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer(AUTOPREFIXER_ARGS))
    .pipe(
      cssnano({
        discardComments: { removeAll: true },
        reduceIndents: false,
        zIndex: false,
      })
    )
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write())
    .pipe(plumber.stop())
    .pipe(gulp.dest(routes.dest.styles));

export { SASS_FILES };
export default styles;
