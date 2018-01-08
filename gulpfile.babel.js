import gulp from 'gulp';
import webpack from 'gulp-webpack';
import concat from 'gulp-concat';

gulp.task('start', () => {
    
});

gulp.task('concat' () => {
    const files = ['./src/header.js', './src/main.js'];
    gilp.src(files)
        .pipe(concat('pixiv_eject_self.js'))
        .pipe(gulp.dest('./release'));
});

gulp.task('webpack', () => {
    
});