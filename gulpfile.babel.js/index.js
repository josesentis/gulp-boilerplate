import gulp, { watch } from 'gulp';

import styles, { SASS_FILES } from './tasks/styles';

const watcher = () => {
    watch(SASS_FILES, styles);
};

export default gulp.series(styles, watcher);