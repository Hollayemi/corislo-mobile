const gulp = require("gulp");
const rename = require("gulp-rename");
// import del from "del";

function convertToTS() {
  return gulp
    .src(["**/*.js"])
    .pipe(rename({ extname: ".ts" })) // Rename to .ts, adjust for .tsx
    .pipe(gulp.dest("./"));
}

exports.convertToTS = convertToTS;

function convertAndDeleteToTS() {
  return gulp
    .src(["**/*.js", "**/*.jsx"])
    .pipe(rename({ extname: ".ts" })) // Rename to .ts, adjust for .tsx
    .pipe(gulp.dest("./"));
  // .pipe(del({ delSrc: true })); // Delete original file after copying
}

exports.convertAndDeleteToTS = convertAndDeleteToTS;

function deleteJS() {
  // return del(["**/*.js", "**/*.jsx"]);
}

exports.deleteJS = deleteJS;
