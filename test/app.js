'use strict';
var path = require('path');
var fs = require('fs-extra');
var assert = require('yeoman-assert');
var helpers = require('yeoman-generator').test;

describe('ts-module', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../app'))
    .inDir(path.join(__dirname, '.tmp'))
    .withPrompts({
      moduleName: 'test',
      moduleDescription: 'testDescription',
      authorName: 'joedoe',
      fullName: 'Joe Doe',
      emailAddress: 'joe@doe.com'
    })
    .on('end', done);
  });

  after(function(done) {
    fs.remove(path.join(__dirname, '.tmp'), done);
  });

  it('creates files and configuration', function () {
    assert.file([
      'package.json',
      'README.md',
      'test/index.spec.ts',
      'LICENSE',
      '.babelrc',
      '.npmignore',
      'tslint.json',
      'gulpfile.js',
      'tsconfig.json',
      'typings.json',
      '.gitignore',
      'src/index.ts',
    ]);

  /*
   assert.fileContent('gulpfile.js', 'gulp.task(\'coveralls\'');
   assert.fileContent('gulpfile.js', 'gulp.task(\'test\'');
   assert.fileContent('gulpfile.js', 'gulp.task(\'static\'');

   assert.fileContent('package.json', 'gulp');
   assert.fileContent('package.json', 'gulp-coveralls');
   assert.fileContent('package.json', '"test": "gulp"');
   assert.fileContent('package.json', '"prepublish": "gulp prepublish"');
   */
  });

  /*
   it('does not include babel configurations', function () {
   assert.noFileContent('gulpfile.js', 'gulp.task(\'babel\'');
   assert.noFileContent('package.json', 'gulp-babel');
   });
   describe('excluding coveralls', function () {
   before(function (done) {
   helpers.run(path.join(__dirname, '../generators/gulp'))
   .withOptions({
   coveralls: false,
   projectRoot: 'lib'
   })
   .on('end', done);
   });

   it('does not include coveralls configurations', function () {
   assert.noFileContent('gulpfile.js', 'gulp.task(\'coveralls\'');
   assert.noFileContent('package.json', 'gulp-coveralls');
   });
   });

   describe('--no-coveralls', function () {
   before(function (done) {
   helpers.run(path.join(__dirname, '../generators/gulp'))
   .withOptions({
   coveralls: false,
   projectRoot: 'lib'
   })
   .on('end', done);
   });

   it('does not include coveralls configurations', function () {
   assert.noFileContent('gulpfile.js', 'gulp.task(\'coveralls\'');
   assert.noFileContent('package.json', 'gulp-coveralls');
   });
   });

   describe('--babel', function () {
   before(function (done) {
   helpers.run(path.join(__dirname, '../generators/gulp'))
   .withOptions({
   babel: true,
   projectRoot: 'lib'
   })
   .on('end', done);
   });

   it('includes babel configuration', function () {
   assert.fileContent('gulpfile.js', 'gulp.task(\'babel\'');
   assert.fileContent('gulpfile.js', 'gulp.task(\'prepublish\', [\'nsp\', \'babel\']);');
   assert.fileContent('package.json', 'gulp-babel');
   assert.fileContent('.gitignore', 'dist');
   });
   });

   describe('--projectRoot', function () {
   before(function (done) {
   helpers.run(path.join(__dirname, '../generators/gulp'))
   .withOptions({
   projectRoot: 'generators'
   })
   .on('end', done);
   });

   it('define a custom root', function () {
   });
   });
   });

   describe('node:gulp', function () {
   describe('including coveralls with generate-into option', function () {
   before(function (done) {
   helpers.run(path.join(__dirname, '../generators/gulp'))
   .withOptions({
   coveralls: true,
   projectRoot: 'lib',
   generateInto: 'other/'
   })
   .on('end', done);
   });

   it('creates files and configuration', function () {
   assert.file([
   'other/gulpfile.js',
   'other/package.json'
   ]);

   assert.fileContent('other/gulpfile.js', 'gulp.task(\'coveralls\'');
   assert.fileContent('other/gulpfile.js', 'gulp.task(\'test\'');
   assert.fileContent('other/gulpfile.js', 'gulp.task(\'static\'');

   assert.fileContent('other/package.json', 'gulp');
   assert.fileContent('other/package.json', 'gulp-coveralls');
   assert.fileContent('other/package.json', '"test": "gulp"');
   assert.fileContent('other/package.json', '"prepublish": "gulp prepublish"');
   });

   it('does not include babel configurations', function () {
   assert.noFileContent('other/gulpfile.js', 'gulp.task(\'babel\'');
   assert.noFileContent('other/package.json', 'gulp-babel');
   });
   });

   describe('excluding coveralls with generate-into option', function () {
   before(function (done) {
   helpers.run(path.join(__dirname, '../generators/gulp'))
   .withOptions({
   coveralls: false,
   projectRoot: 'lib',
   generateInto: 'other/'
   })
   .on('end', done);
   });

   it('does not include coveralls configurations', function () {
   assert.noFileContent('other/gulpfile.js', 'gulp.task(\'coveralls\'');
   assert.noFileContent('other/package.json', 'gulp-coveralls');
   });
   });

   describe('--no-coveralls and --generate-into', function () {
   before(function (done) {
   helpers.run(path.join(__dirname, '../generators/gulp'))
   .withOptions({
   coveralls: false,
   projectRoot: 'lib',
   generateInto: 'other/'
   })
   .on('end', done);
   });

   it('does not include coveralls configurations', function () {
   assert.noFileContent('other/gulpfile.js', 'gulp.task(\'coveralls\'');
   assert.noFileContent('other/package.json', 'gulp-coveralls');
   });
   });

   describe('--babel and --generate-into', function () {
   before(function (done) {
   helpers.run(path.join(__dirname, '../generators/gulp'))
   .withOptions({
   babel: true,
   projectRoot: 'lib',
   generateInto: 'other/'
   })
   .on('end', done);
   });

   it('includes babel configuration', function () {
   assert.fileContent('other/gulpfile.js', 'gulp.task(\'babel\'');
   assert.fileContent('other/gulpfile.js', 'gulp.task(\'prepublish\', [\'nsp\', \'babel\']);');
   assert.fileContent('other/package.json', 'gulp-babel');
   assert.fileContent('other/.gitignore', 'dist');
   });
   });

   describe('--projectRoot and --generate-into', function () {
   before(function (done) {
   helpers.run(path.join(__dirname, '../generators/gulp'))
   .withOptions({
   projectRoot: 'generators',
   generateInto: 'other/'
   })
   .on('end', done);
   });

   it('define a custom root', function () {
   });
   });
   */
  });
