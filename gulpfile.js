var gulp = require('gulp'),
watch = require("gulp-watch"), 
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssvars = require("postcss-simple-vars"),
nested = require("postcss-nested"),
cssImport = require("postcss-import");

gulp.task('default', function() {
    console.log("Lmao");
});

gulp.task("styles", function() {
    return gulp.src("./assets/styles/style.css")
    .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
    .pipe(gulp.dest("./assets/temp/styles/styles.css"));
});

gulp.task('watch', function() {
    watch("./index.html", function() {
        console.log("Index.html has been changed!");
});
});