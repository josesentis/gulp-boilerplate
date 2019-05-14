import gulp from 'gulp';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';

import { routes } from '../config';

const SCRIPTS_FILES = `${routes.src.scripts}/**/*.js`;
const SCRIPTS_SRC = `${routes.src.scripts}/*.js`;

const scripts = () => gulp
  .src(SCRIPTS_SRC)
  .pipe(sourcemaps.init())
  .pipe(rename({ suffix: '.min' }))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(routes.dest.scripts));

export { SCRIPTS_FILES };
export default scripts;
