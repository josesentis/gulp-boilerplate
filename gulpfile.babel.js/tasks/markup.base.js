import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import plumber from 'gulp-plumber';
import size from 'gulp-size';
import twig from 'gulp-twig';

import { routes } from '../config';
import data from '../../data';

const MARKUP_FILES = `${routes.src.views}/**/*`;
const language = 'en';
const path = './img';

const markup = () => gulp
  .src(`${routes.src.views}/pages/**/*.twig`)
  .pipe(plumber())
  .pipe(twig({
    base: routes.src.views,
    cache: false,
    data: {
      data: data[language],
      language,
      path
    }
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
