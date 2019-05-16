import gulp, { watch } from 'gulp';

import fonts, { FONT_FILES } from './tasks/fonts';
import images, { IMAGES_FILES } from './tasks/images';
import scripts, { SCRIPTS_FILES } from './tasks/scripts';
import styles, { SASS_FILES } from './tasks/styles';

const build = gulp.parallel(fonts, images, styles, scripts);

const watcher = () => {
  watch(FONT_FILES, fonts);
  watch(IMAGES_FILES, images);
  watch(SASS_FILES, styles);
  watch(SCRIPTS_FILES, scripts);
};

export default gulp.series(build, watcher);
