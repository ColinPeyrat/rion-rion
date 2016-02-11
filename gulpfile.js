var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');


var sassPaths = [
  'assets/foundation-sites/scss',
  'assets/motion-ui/src'
];

/**
 * Launch the Server
 */
gulp.task('browser-sync', ['sass'], function() {
    browserSync({
        server: {
            baseDir: './'
        },
        notify: false
    });
});




/**
 * Compile scss files and send it to server
 */
gulp.task('sass', function () {
    return gulp.src('css/app.scss')
        .pipe(sass({
            includePaths: sassPaths
          })
          .on('error', sass.logError))
        .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest('css'));
});

/**
 * Send html files to server
 */
gulp.task('html', function () {
    return gulp.src('index.html')
        .pipe(browserSync.reload({stream:true}))
});



/**
 * Watch scss and html files for changes, recompile
 * & reload BrowserSync
 */
gulp.task('watch', function () {
    gulp.watch('css/**', ['sass']);
    gulp.watch('index.html',['html']);
});




/**
 * Default task, running just `gulp` will compile the sass launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
