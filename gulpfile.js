// dependencies -----------------------------------------------------------

    var gulp         = require('gulp'),
        babelify     = require('babelify'),
        browserify   = require('browserify'),
        browserSync  = require('browser-sync'),
        buffer       = require('vinyl-buffer'),
        changed      = require('gulp-changed'),
        csso         = require('gulp-csso'),
        del          = require('del'),
        notify       = require('gulp-notify'),
        reload       = browserSync.reload,
        sass         = require('gulp-sass'),
        source       = require('vinyl-source-stream'),
        sourcemaps   = require('gulp-sourcemaps'),
        uglify       = require('gulp-uglify'),
        watchify     = require('watchify');

// project config ---------------------------------------------------------

    var p = {
        jsMain:     './app/browser.js',
        scss:       './app/scss/*.scss',
        scssMain:   './app/scss/app.scss',
        assets:     './app/assets/*',

        dist:       'dist',
        distAssets: 'dist/assets',
        bundleName: 'app.min.js',
    };

// primary tasks ----------------------------------------------------------

    gulp.task('build', ['clean'], function() {
        process.env.NODE_ENV = 'production';
        gulp.start(['styles', 'copy', 'build']);
    });

    gulp.task('watch', [], function() {
        gulp.start(['watchStyles', 'watchApp', 'styles', 'copy', 'browserSync']);
    });

    gulp.task('default',['watch'], function() {
        console.log('Running"');
    });

// tasks ------------------------------------------------------------------

    // clean before build
    gulp.task('clean', function(cb) {
          del(['dist'], cb);
    });

    // sync changes
    gulp.task('browserSync', function() {
        browserSync.init(null, {
            proxy: "http://localhost:5000",
            files: ["dist/**/*.*"],
            browser: "google chrome",
            port: 7000
        });
    });

    // copy
    gulp.task('copy', function () {
        gulp.src(p.assets).pipe(gulp.dest(p.distAssets));
    });

    // watch for changes
    gulp.task('watchApp', function() {
        var bundler = watchify(browserify(p.jsMain, watchify.args));
        function rebundle() {
            return bundler
                .bundle()
                .on('error', notify.onError())
                .pipe(source(p.bundleName))
                .pipe(gulp.dest(p.dist))
                .pipe(reload({stream: true}));
        }
        bundler.transform(babelify).on('update', rebundle);
        return rebundle();
    });

    // bundle js
    gulp.task('build', function() {
        browserify(p.jsMain)
            .transform(babelify)
            .bundle()
            .pipe(source(p.bundleName))
            .pipe(buffer())
            .pipe(sourcemaps.init({loadMaps: true}))
            .pipe(uglify())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(p.dist));
    });

    // compile & minify scss
    gulp.task('styles', function() {
        return gulp.src(p.scssMain)
            .pipe(changed(p.dist))
            .pipe(sass({errLogToConsole: true}))
            .on('error', notify.onError())
            .pipe(csso())
            .pipe(gulp.dest(p.dist))
            .pipe(reload({stream: true}));
    });

    // watch styles
    gulp.task('watchStyles', function() {
        gulp.watch(p.scss, ['styles']);
    });