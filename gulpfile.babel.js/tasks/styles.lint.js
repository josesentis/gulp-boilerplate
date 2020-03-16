import gulp from 'gulp';
import stylelint from 'gulp-stylelint';

import { SASS_FILES } from './styles.base';

const lint = () => {
  return gulp
    .src(SASS_FILES)
    .pipe(stylelint({
      syntax: 'scss',
      failAfterError: false,
      reporters: [{
        formatter: 'string',
        console: true
      }]
    }));
};

export default lint;
