var gulp        = require('gulp'),
	sass        = require('gulp-sass'),
	browserSync = require('browser-sync'),
	concat      = require('gulp-concat'),
	uglify      = require('gulp-uglifyjs');

gulp.task('sass',function() {
	return gulp.src('app/sass/**/*.sass')
		.pipe(sass())
		.pipe(gulp.dest('app/css'))
		.pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts',function(){
	return gulp.src([
			
			
			'app/libs/jquery/jquery-2.1.3.min.js',
			'app/libs/slick/slick.min.js',
			'app/libs/bootstrap/js/dist/modal.js',
			'app/libs/magnific-popup/dist/jquery.magnific-popup.min.js',
			'app/libs/owl-carousel/owl.carousel.min.js',
			'app/libs/revealator/fm.revealator.jquery.js',
		])
	.pipe(concat('libs.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('app/js'));
});

gulp.task('browser-sync',function(){
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});


gulp.task('watch',['browser-sync','sass','scripts'],function() {
	gulp.watch('app/sass/**/*.sass',['sass']);
	gulp.watch('app/*.html',browserSync.reload);
	gulp.watch('app/js/**/*.js',browserSync.reload);
});