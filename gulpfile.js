var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var rename = require('gulp-rename');

gulp.task('sass', function () {
    gulp.src('sass/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./css/'))
    return gulp.src('package.json')
});

gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: './'
        },
    });

    gulp.watch("sass/*.scss", gulp.series('sass'));
    gulp.watch("sass/*.scss").on('change', browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', gulp.series('serve'));