var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('sass', function () {
    gulp.src('sass/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('style.css'))
        .pipe(gulp.dest('./css/'))
    return gulp.src('package.json')
});

gulp.task('watch', function () {
    gulp.watch("sass/*.scss", gulp.series('sass'));
});
