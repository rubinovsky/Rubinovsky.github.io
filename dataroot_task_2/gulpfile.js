var gulp     	 = require('gulp'), 
	sass         = require('gulp-sass'),
	browserSync  = require('browser-sync'),
	concat       = require('gulp-concat'), 
	uglify       = require('gulp-uglifyjs'),
	cssnano      = require('gulp-cssnano'),
	rename       = require('gulp-rename'), 
	del          = require('del'), 
	imagemin     = require('gulp-imagemin'), 
	pngquant     = require('imagemin-pngquant'), 
	cache        = require('gulp-cache'),
	autoprefixer = require('gulp-autoprefixer'),
	pug 		 = require('gulp-pug');

gulp.task('sass', function(){ 
	return gulp.src('src/style/*.+(scss|sass)')
		.pipe(sass()) 
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
		.pipe(gulp.dest('src/css')) 
		.pipe(browserSync.reload({stream: true})) 
});
gulp.task('browser-sync', function() {
	browserSync({
		server: { 
			baseDir: 'src' 
		},
		notify: false 
	});
});
gulp.task('pug', function(){
	return gulp.src(['src/template/*.pug','!src/template/_*.pug'])
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest('src'));
})
gulp.task('watch', ['browser-sync', 'pug', 'sass'], function() {
	gulp.watch('src/**/*.+(scss|sass)', ['sass']);
	gulp.watch('src/**/*.pug', ['pug']); 
	gulp.watch('src/*.html', browserSync.reload); 
	gulp.watch('src/js/*.js', browserSync.reload); 
});
gulp.task('clean', function() {
	return del.sync('build'); 
});

gulp.task('img', function() {
	return gulp.src('src/img/**/*')
		.pipe(cache(imagemin({ 
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('build/img'));
});

gulp.task('build', ['clean', 'img', 'sass'], function() {

	var buildCss = gulp.src('src/css/*.css')
	.pipe(gulp.dest('build/css'))

	var buildJs = gulp.src('src/js/*') 
	.pipe(gulp.dest('build/js'))

	var buildIndex = gulp.src('src/*.html') 
	.pipe(gulp.dest('build'));
});

gulp.task('clear', function (callback) {
	return cache.clearAll();
})
