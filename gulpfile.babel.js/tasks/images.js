import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

import { routes } from '../config';

const IMAGES_FILES = `${routes.src.images}/**`;

const images = () =>
  gulp
    .src(IMAGES_FILES)
    .pipe(imagemin())
    .pipe(gulp.dest(routes.dest.images));

export { IMAGES_FILES };
export default images;
