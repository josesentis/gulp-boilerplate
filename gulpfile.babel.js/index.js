import gulp, { watch } from 'gulp';

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
  watch(FONT_FILES, fonts);
  watch(IMAGES_FILES, imageBuild);
  watch(SASS_FILES, buildStyles);
  watch(SCRIPTS_FILES, buildScripts);
  watch(SASS_FILES, buildScripts);
  watch(MARKUP_FILES, buildMarkup);
};

export default gulp.series(build, watcher);
