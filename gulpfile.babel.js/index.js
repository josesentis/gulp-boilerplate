import gulp, { watch } from 'gulp';

import fonts, { FONT_FILES } from './tasks/fonts';
import images, { IMAGES_FILES } from './tasks/images.base';
import svg from './tasks/images.svg';
import scripts, { SCRIPTS_FILES } from './tasks/scripts.base';
import scriptsLint from './tasks/scripts.lint';
import styles, { SASS_FILES } from './tasks/styles.base';
import stylesLint from './tasks/styles.lint';

const imageBuild = gulp.series(images, svg);
const buildStyles = gulp.series(stylesLint, styles);
const buildScripts = gulp.series(scriptsLint, scripts);
const build = gulp.parallel(fonts, imageBuild, buildStyles, buildScripts);

const watcher = () => {
  watch(FONT_FILES, fonts);
  watch(IMAGES_FILES, imageBuild);
  watch(SASS_FILES, buildStyles);
  watch(SCRIPTS_FILES, buildScripts);
};

export default gulp.series(build, watcher);
