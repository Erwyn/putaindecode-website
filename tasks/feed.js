var gulp = require("gulp")
  , plumber = require("gulp-plumber")
  , jade = require("gulp-jade")
  , rename = require("gulp-rename")
  , paths = require("./paths")
  , options = require("./cache/options")

module.exports = function(){
  var stream = gulp.src(paths.sources.feed)

  options.update()

  return stream
    .pipe(plumber())
    .pipe(jade(options.value))
    .pipe(rename(paths.dist.feed))
    .pipe(gulp.dest(paths.dist.pages))
}
