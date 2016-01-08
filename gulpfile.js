var $gulp = require('gulp');

var $ts =       require('gulp-typescript');
var $sass =      require('gulp-sass');
var $template =  require('gulp-templatecache');
var $live =      require('gulp-livereload');

var sassConfig = {
    onError: console.error.bind(console, 'SASS Error:')
}

$gulp.task('ts', function() {
    return $gulp.src('ts/**/*.ts')
        .pipe($ts({
            out: 'app.js',
            target: 'ES5'
        }))
        .pipe($gulp.dest('js'));
});
$gulp.task('tst', function() {
    return $gulp.src('ts/**/*.html')
        .pipe($template({
            root: '/ts',
            moduleName: 'jstack',
            output: 'app-templates.js',
            strip: __dirname +'/ts/'
        }))
        .pipe($gulp.dest('js'));
});

$gulp.task('sass', function(){

    return $gulp.src('scss/**/*.scss')
        .pipe($sass(sassConfig))
        .pipe($gulp.dest('css'));
});

$gulp.task('watch', ['ts','tst'], function() {

    $live.listen();

    $gulp.watch('ts/**/*.ts', ['ts'])
        .on('change', function(event){
            console.info('-----Change detected on "' + event.path +'"-----');
            //$live.changed(event.path);
        });
    $gulp.watch('ts/**/*.html', ['tst'])
        .on('change', function(event){
            console.info('-----Change detected on "' + event.path +'"-----');
            $live.changed(event.path);
        });

    $gulp.watch('scss/**/*.scss', ['sass'])
        .on('change', function(event){
            console.info('-----Change detected on "' + event.path +'"-----');
            $live.changed(event.path);
        });

    $gulp.watch(['js/**/*.js','css/**/*.css'])
        .on('change', function(event){
            $live.changed(event.path);
        });
});