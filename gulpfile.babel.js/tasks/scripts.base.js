import babelify from 'babelify';
import browserify from 'browserify';
import gulp from 'gulp';
// import babel from 'gulp-babel';
import rename from 'gulp-rename';
import plumber from 'gulp-plumber';
import size from 'gulp-size';
import uglify from 'gulp-uglify';
import sourcemaps from 'gulp-sourcemaps';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

import { routes } from '../config';

const SCRIPTS_FILES = `${routes.src.scripts}/**/*.js`;
const SCRIPTS_SRC = `${routes.src.scripts}/app.js`;

// const scripts = () =>
//  gulp
//     .src(SCRIPTS_SRC)
//     .pipe(source('app.min.js'))
//     .pipe(plumber())
//     .pipe(sourcemaps.init())
//     .pipe(
//       babel({
//         presets: ['@babel/env'],
//       })
//     )
//     .pipe(uglify())
//     .pipe(rename({ suffix: '.min' }))
//     .pipe(sourcemaps.write())
//     .pipe(plumber.stop())
//     .pipe(size())
//     .pipe(gulp.dest(routes.dest.scripts));

const scripts = () => {
  return browserify({ entries: SCRIPTS_SRC })
    .transform(babelify.configure({ presets: ['@babel/env'] }))
    .bundle()
    .pipe(source('app.js'))
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
