import gulp, { watch } from 'gulp';

import styles, { SASS_FILES } from './tasks/styles';

console.log(SASS_FILES);

// const WATCH_OPTIONS = { usePolling: true };

const watcher = () => {
    watch(SASS_FILES, styles);
};

export default gulp.series(styles, watcher);