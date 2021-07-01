import gulp from 'gulp';
import autoprefixer from 'gulp-autoprefixer';
import cssnano from 'gulp-cssnano';
import gcmq from 'gulp-group-css-media-queries';
import gulpIf from 'gulp-if';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import gulpSass from 'gulp-sass';
import size from 'gulp-size';
import sourcemaps from 'gulp-sourcemaps';
import nodeSass from 'node-sass';

import { routes } from '../config';

const sass = gulpSass(nodeSass);
const SASS_FILES = `${routes.src.styles}/**/*.scss`;
const AUTOPREFIXER_ARGS = {
  cascade: false
};

const styles = () =>
  gulp
    .src([`${routes.src.styles}/*.scss`, `${routes.src.styles}/crp/*.scss`])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer(AUTOPREFIXER_ARGS))
    .pipe(gcmq())
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
    .pipe(size())
    .pipe(gulpIf(function (file) {
      return file.path.includes('crp');
    },
      gulp.dest(`${routes.src.views}/crp`),
      gulp.dest(routes.dest.styles)
    ));

export { SASS_FILES };
export default styles;
