import gulp, { watch } from 'gulp';

import fonts, { FONT_FILES } from './tasks/fonts';
import styles, { SASS_FILES } from './tasks/styles';

const build = gulp.parallel(styles, fonts);

const watcher = () => {
    watch(SASS_FILES, styles);
    watch(FONT_FILES, fonts);
};

export default gulp.series(build, watcher);