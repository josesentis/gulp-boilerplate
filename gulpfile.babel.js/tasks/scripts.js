import gulp from 'gulp';
import babel from 'gulp-babel';
import rename from 'gulp-rename';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';

import { routes } from '../config';

const SCRIPTS_FILES = `${routes.src.scripts}/**/*.js`;
const SCRIPTS_SRC = `${routes.src.scripts}/*.js`;

const scripts = () =>
  gulp
    .src(SCRIPTS_SRC)
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ['@babel/env'],
      })
    )
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(routes.dest.scripts));

export { SCRIPTS_FILES };
export default scripts;
