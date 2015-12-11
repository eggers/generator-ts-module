'use strict';
require('babel-polyfill');

var gulp = require('gulp');

var del = require('del');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var merge = require('merge2');
var tsc = require('gulp-typescript');
var tslint = require('gulp-tslint');
var mocha = require('gulp-mocha');
var path = require('path');

var tsProject = tsc.createProject('tsconfig.json', {
  typescript: require('typescript'),
  noEmit: false,
  declaration: true
});

gulp.task('clean', function() {
  return del(path.join('lib', '.test'));
});

gulp.task('lint', function(){
  return gulp.src(['src/**/*.ts', 'test/**/*.ts'])
  .pipe(tslint())
  .pipe(tslint.report('verbose'));
});

gulp.task('build', ['clean'], function() {
  var stream = gulp.src(['src/*.ts'])
  .pipe(sourcemaps.init())
  .pipe(tsc(tsProject));

  return merge([
    stream.dts.pipe(gulp.dest('lib')),
    stream.js.pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('lib'))
  ]);

});

gulp.task('test.build', ['build'], function() {
  var stream = gulp.src(['test/*.spec.ts'])
  .pipe(sourcemaps.init())
  .pipe(tsc(tsProject));

  return stream.js.pipe(babel())
    .pipe(sourcemaps.write('.test'))
    .pipe(gulp.dest('.test'));
});

gulp.task('test', ['test.build'], function() {
  return gulp.src(['.test/**/*.spec.js'])
  .pipe(mocha());
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['lint', 'test']);

