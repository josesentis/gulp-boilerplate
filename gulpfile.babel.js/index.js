import gulp from 'gulp';
import rename from 'gulp-rename'; 

gulp.task('default', function() {
    console.log('execute gulp file');

    return gulp.src('src/assets/scss/styles.scss')
        .pipe(rename('css/styles.css'))
        .pipe(gulp.dest('dist'));
});
