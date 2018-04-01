const gulp = require('gulp')
const sass = require('gulp-sass')
const hbs = require('gulp-hb')
const sync = require('browser-sync')

var styles = function styles() {
	return gulp.src('./scss/*.scss')
}
