import gulp from 'gulp';

import { routes } from '../config';

const FONT_FILES = `${routes.src.fonts}/**/*`;

const fonts = () => gulp
  .src(FONT_FILES)
  .pipe(gulp.dest(routes.dest.fonts));

export { FONT_FILES };
export default fonts;