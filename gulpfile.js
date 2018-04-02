var gulp = require('gulp'),
watch = require("gulp-watch");

gulp.task('default', function() {
    console.log("Lmao");
});

gulp.task('watch', function() {
    watch("./index.html", function() {
        console.log("Index.html has been changed!");
});
});