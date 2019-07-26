import gulp, { watch } from 'gulp';

import { reload, serve } from './tasks/browser-sync';
import fonts, { FONT_FILES } from './tasks/fonts';
import images, { IMAGES_FILES } from './tasks/images.base';
import svg from './tasks/images.svg';
import scripts, { SCRIPTS_FILES } from './tasks/scripts.base';
import scriptsLint from './tasks/scripts.lint';
import styles, { SASS_FILES } from './tasks/styles.base';
import stylesLint from './tasks/styles.lint';
import markup, { MARKUP_FILES } from './tasks/markup.base';

const imageBuild = gulp.series(images, svg);
const buildStyles = gulp.series(stylesLint, styles);
const buildScripts = gulp.series(scriptsLint, scripts);
const buildMarkup = gulp.series(markup);
const build = gulp.parallel(fonts, imageBuild, buildStyles, buildScripts, buildMarkup);

const watcher = () => {
  watch(FONT_FILES, fonts, reload);
  watch(IMAGES_FILES, imageBuild, reload);
  watch(SASS_FILES, buildStyles, reload);
  watch(SCRIPTS_FILES, buildScripts, reload);
  watch(SASS_FILES, buildScripts, reload);
  watch(MARKUP_FILES, buildMarkup, reload);
};

export default gulp.series(build, serve, watcher);
