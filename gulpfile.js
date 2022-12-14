const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');
const imgCompress  = require('imagemin-jpeg-recompress');
const fileinclude = require('gulp-file-include');
const webpack = require('webpack-stream');


// gulp.task('weBpack', function() {
//     return gulp.src('src/*.js')
//       .pipe(webpack({
//         mode: 'development',
//         watch: true,
//       }))
//       .pipe(gulp.dest('dist/'));
//   });

function joinHtml() {
    return  gulp.src([
    	'src/*.html',
    	])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.stream());
}
gulp.task('joinHtml', joinHtml);


gulp.task('server', function() {
    browserSync({
        server: {
            baseDir: "dist"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/sass/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});


// gulp.task('html', function() {
//     return gulp.src("src/*.html")
//         .pipe(htmlmin({ collapseWhitespace: true }))
//         .pipe(gulp.dest("dist/"));
// });

// gulp.task('scripts', function() {
//     return gulp.src("src/js/*.js")
//         .pipe(gulp.dest("dist/js"))
//         .pipe(browserSync.stream());
// });
gulp.task("scripts", () => {
    return gulp.src("./src/js/main.js")
                .pipe(webpack({
                    mode: 'development',
                    output: {
                        filename: 'script.js'
                    },
                    watch: false,
                    devtool: "source-map",
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    debug: true,
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest('./dist/js'))
                .on("end", browserSync.reload);
});

gulp.task('fonts', function() {
    return gulp.src("src/fonts/*")
        .pipe(gulp.dest("dist/fonts"))
        .pipe(browserSync.stream());
});

gulp.task('php', function() {
    return gulp.src("src/smart.php")
        .pipe(gulp.dest("dist/"));
});


gulp.task('icons', function() {
    return gulp.src("src/icons/**/*.+(svg|png|jpeg)")
    .pipe(imagemin([
        imgCompress({
            loops: 4,
            min: 70,
            max: 80,
            quality: 'high'
        }),
        imagemin.gifsicle(),
        imagemin.optipng(),
        imagemin.svgo()
        ]))
    .pipe(gulp.dest("dist/icons"))
    .pipe(browserSync.stream());
});

gulp.task('mailer', function() {
    return gulp.src("src/mailer/**/*")
        .pipe(gulp.dest("dist/mailer"));
});

gulp.task('images', function() {
    return gulp.src("src/img/**/*.+(jpg|png|jpeg)")
    .pipe(imagemin([
        imgCompress({
          loops: 4,
          min: 70,
          max: 80,
          quality: 'high'
        }),
        imagemin.gifsicle(),
        imagemin.optipng(),
        imagemin.svgo()
      ]))
        .pipe(gulp.dest("dist/img"))
        .pipe(browserSync.stream());
}); 
// gulp.task('svg', function() {
//     return gulp.src("src/img/**/*.+(svg|ico)")
//         .pipe(gulp.dest("dist/img"));
// });


gulp.task('watch', function() {
    
    gulp.watch("src/sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    // gulp.watch("src/*.html").on('change', gulp.parallel('html'));
    gulp.watch("src/**/*.html").on('change', gulp.parallel('joinHtml'));
    gulp.watch("src/img/**/*.*").on('all', gulp.parallel('images'));
    gulp.watch("src/js/**/*.js", gulp.parallel('scripts'));
    gulp.watch("src/fonts/**/*").on('all', gulp.parallel('fonts'));
    gulp.watch("src/icons/**/*").on('all', gulp.parallel('icons'));
});

gulp.task("build-prod-js", () => {
    return gulp.src("./src/js/main.js")
                .pipe(webpack({
                    mode: 'production',
                    output: {
                        filename: 'script.js'
                    },
                    module: {
                        rules: [
                          {
                            test: /\.m?js$/,
                            exclude: /(node_modules|bower_components)/,
                            use: {
                              loader: 'babel-loader',
                              options: {
                                presets: [['@babel/preset-env', {
                                    corejs: 3,
                                    useBuiltIns: "usage"
                                }]]
                              }
                            }
                          }
                        ]
                      }
                }))
                .pipe(gulp.dest('dist/js'));
});


gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'scripts', 'fonts', 'icons', 'images', 'joinHtml', 'mailer'));