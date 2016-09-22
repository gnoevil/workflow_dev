var gulp = require('gulp'),
    gutil = require('gulp-util'),
	coffee = require('gulp-coffee');

var coffeSources = ['components/coffee/tagline.coffee'];
gulp.task('coffee', function() {
	gulp.src(coffeSources)
		.pipe(coffee({ bare: true })
			.on('error', gutil.log))
		.pipe(gulp.dest('components/scripts'))
});
