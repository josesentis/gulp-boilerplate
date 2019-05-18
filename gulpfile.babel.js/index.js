import gulp, { watch } from 'gulp';

import fonts, { FONT_FILES } from './tasks/fonts';
import images, { IMAGES_FILES } from './tasks/images.base';
import svg from './tasks/images.svg';
import scripts, { SCRIPTS_FILES } from './tasks/scripts.base';
import styles, { SASS_FILES } from './tasks/styles.base';

const imageBuild = gulp.series(images, svg);
const build = gulp.parallel(fonts, imageBuild, styles, scripts);

const watcher = () => {
  watch(FONT_FILES, fonts);
  watch(IMAGES_FILES, imageBuild);
  watch(SASS_FILES, styles);
  watch(SCRIPTS_FILES, scripts);
};

export default gulp.series(build, watcher);
