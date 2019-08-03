import babelify from 'babelify';
import browserify from 'browserify';
import gulp from 'gulp';
import rename from 'gulp-rename';
import plumber from 'gulp-plumber';
import size from 'gulp-size';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

import { routes } from '../config';

const SCRIPTS_FILES = `${routes.src.scripts}/**/*.js`;
const FILE_NAME = 'app.js';

const scripts = () => {
  return browserify({ entries: `${routes.src.scripts}/${FILE_NAME}` })
    .transform(babelify.configure({ presets: ['@babel/env'] }))
    .bundle()
    .pipe(source(FILE_NAME))
    .pipe(buffer())
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write())
    .pipe(plumber.stop())
    .pipe(size())
    .pipe(gulp.dest(routes.dest.scripts));
}

export { SCRIPTS_FILES };
export default scripts;
