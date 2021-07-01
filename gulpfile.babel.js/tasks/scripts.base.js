import browserify from 'gulp-browserify';
import gulp from 'gulp';
import rename from 'gulp-rename';
import plumber from 'gulp-plumber';
import size from 'gulp-size';
import sourcemaps from 'gulp-sourcemaps';

import { routes } from '../config';

const SCRIPTS_FILES = `${routes.src.scripts}/**/*.js`;
const SCRIPTS_SRC = `${routes.src.scripts}/*.js`;

const scripts = () =>
  gulp
    .src(SCRIPTS_SRC)
    .pipe(browserify({
      transform: ['babelify'],
      extensions: ['.js']
    }))
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write())
    .pipe(plumber.stop())
    .pipe(size())
    .pipe(gulp.dest(routes.dest.scripts));

export { SCRIPTS_FILES };
export default scripts;
