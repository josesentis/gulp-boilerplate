import gulp, { watch } from 'gulp';

import fonts, { FONT_FILES } from './tasks/fonts';
import scripts, { SCRIPTS_FILES } from './tasks/scripts';
import styles, { SASS_FILES } from './tasks/styles';

const build = gulp.parallel(styles, scripts, fonts);

const watcher = () => {
    watch(SASS_FILES, styles);
    watch(SCRIPTS_FILES, scripts);
    watch(FONT_FILES, fonts);
};

export default gulp.series(build, watcher);
