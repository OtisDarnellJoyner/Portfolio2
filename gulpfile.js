var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var bs = require('browser-sync');

gulp.task('pug', function(){
    return gulp.src('./src/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('./views'))
	.pipe(gulp.dest('./'));
});

gulp.task('pug-watch',['pug'] , function(done){
    bs.reload();
		done();
});

gulp.task('sass', function(){
	return gulp.src('./sass/*.sass')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./css'))
});

gulp.task('sass-watch',['sass'], function(done){
	bs.reload();
	done();
});



gulp.task('default', ['pug-watch', 'sass-watch'], function(){
	bs.init({
		server: {
			baseDir: "./",
			index: "index.html"
		}
	});

	gulp.watch('./src/*.pug', ['pug-watch']);
	gulp.watch('./sass/*.sass', ['sass-watch']);
});