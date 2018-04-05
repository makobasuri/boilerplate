const gulp = require('gulp')
const sass = require('gulp-sass')
const hbs = require('gulp-hb')
const sync = require('browser-sync')
const rename = require('gulp-rename');

const styles = () => {
	return gulp.src('./src/scss/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./build/css'))
}

const renderTpls = () => {
	return gulp.src('./src/templates/*.hbs')
		.pipe(hbs().partials('./src/templates/partials/**/*.hbs'))
		.pipe(rename({extname: '.html'}))
		.pipe(gulp.dest('./build'))
}

const watchStyles = () => gulp.watch('./src/scss/**/*.scss', styles)
const watchTemplates = () => gulp.watch('./src/templates/**/*.hbs', renderTpls)

const watch = gulp.series(watchStyles, watchTemplates)

const build = gulp.parallel(styles, renderTpls)
const dev = gulp.series(build, watch)

module.exports = {
	styles,
	renderTpls,
	watchStyles,
	watchTemplates,
	watch,
	build,
	dev
}
