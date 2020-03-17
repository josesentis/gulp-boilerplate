import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import plumber from 'gulp-plumber';
import size from 'gulp-size';
import twig from 'gulp-twig';

import { routes } from '../config';

const MARKUP_FILES = `${routes.src.views}/**/*`;
import data from '../../src/data';

const markup = () => gulp
    .src(`${routes.src.views}/pages/**/*.twig`)
    .pipe(plumber())
    .pipe(twig({
      base: routes.src.views,
      cache: false,
      data
    }))
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyCSS: true
    }))
    .pipe(plumber.stop())
    .pipe(size())
    .pipe(gulp.dest(`${routes.dest.views}`));

export { MARKUP_FILES };
export default markup;
