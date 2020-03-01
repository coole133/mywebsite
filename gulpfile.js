let gulp = require("gulp");
let rename = require("gulp-rename");
let sass = require("gulp-sass");

function css_style(done) {
  gulp
    .src("./src/scss/style.scss")
    .pipe(
      sass({
        errorLogToConsole: true,
        outputStyle: "compressed"
      })
    )
    .on("error", console.error.bind(console))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("./dist/css/"));

  done();
}

gulp.task(css_style);
