//载入gulp核心包
const gulp = require('gulp');


//参数：任务名，任务执行体
gulp.task('hello',function () {
	// body...
	console.log('hello word');
});

//命令行让任务运行




//拷贝文件

gulp.task('dest',function(){
	//获取文件
	gulp.src(['src/**/*.*','!src/demo.html'])
		//让文件流走向下一个环节
		.pipe(gulp.dest('dist/'));
});


gulp.task('default',function(){
	//默认任务
	gulp.watch('src/*',['dest']);//当src目录下文件发生变化，自动执行
});

//gulp原本不支持任何功能，只提供最基础的API


const less = require('gulp-less');

gulp.task('style',function(){
	gulp.src('src/**/*.less')
		//让less转化为css   插件gulp-less
		.pipe(less())
 		.pipe(gulp.dest('dist/'));
});
gulp.task('watch',function(){
	gulp.watch('src/**/*.less',['style']);
});

//css版本号
const rev = require('gulp-rev-easy');
gulp.task('reveasy',function(){
	gulp.src('dist/**/*.html')
		.pipe(rev())
		.pipe(gulp.dest('dist/'));
});



//定义一个HTTp服务器任务
const connect = require('gulp-connect');
gulp.task('serve',function(){
	//创建一个服务器，监听
	connect.server({
		root:'public',
		livereload:true
	});
	gulp.watch('public/**/*.*',['reload']);
});
gulp.task('reload',function(){
	gulp.src('public/**/*.*')
		.pipe(connect.reload());	
});