import gulp from 'gulp';
import svgo from 'gulp-svgo';

import { routes } from '../config';

const svg = () =>
  gulp
    .src(`${routes.src.images}/*.svg`)
    .pipe(svgo())
    .pipe(gulp.dest(routes.dest.images));

export default svg;
