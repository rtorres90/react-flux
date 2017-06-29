"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect');//Runs a local dev server
var open = require('gulp-open');//Open the url on the browser

var config = {
  port: 9085,
  devBaseUrl: 'http://localhost',
  paths: {
    html: './src/*.html',
    dist: './dist'
  }
}

//Star local server
gulp.task('connect', function (){
  connect.server({
    root: ['dist'],
    port: config.port,
    base: config.devBaseUrl,
    livereload: true
  })
});

gulp.task('open', ['connect'], function () {
  gulp.src('dist/index.html').pipe(open({uri:config.devBaseUrl + ":" + config.port + "/"}));
});

gulp.task('html', function () {
  gulp.src(config.paths.html).pipe(gulp.dest(config.paths.dist)).pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch(config.paths.html, ['html'])
});

gulp.task('default', ['html', 'open', 'watch']);
