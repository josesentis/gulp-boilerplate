import gulp from 'gulp';
import cssnano from 'gulp-cssnano';
import autoprefixer from 'gulp-autoprefixer';
import rename from 'gulp-rename';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';

const routes = {
  src: {
    styles: 'src/assets/scss'
  },
  dest: {
    styles: 'dist/assets/css'
  }
};

const SASS_FILES = `${routes.src.styles}/**/*.scss`;
const AUTOPREFIXER_ARGS = {
  browsers: ['last 2 versions'],
  cascade: false
};

gulp.task('default', function() {
  return gulp
    .src(SASS_FILES)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(AUTOPREFIXER_ARGS))
    .pipe(
      cssnano({
        discardComments: { removeAll: true },
        reduceIndents: false,
        zIndex: false
      })
    )
    .pipe(rename({ suffix: '.min' }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(routes.dest.styles));
});
