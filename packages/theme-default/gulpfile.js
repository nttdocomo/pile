const gulp = require('gulp');
const postcss = require('gulp-postcss');
const atImport = require('postcss-import');
const postcssPresetEnv = require('postcss-preset-env');
const cssnano = require('cssnano');
const postcssColorMod = require('postcss-color-mod-function');
const postBem = require('./scripts/postcss-bem2');
const pkg = require('./package.json');

gulp.task('compile', () => gulp.src('./src/*.css')
  .pipe(postcss([
    atImport(),
    postBem({
      shortcuts: {
        'component-namespace': 'ns',
        component: 'c',
        modifier: 'm',
        descendent: 'd',
      },
    }),
    postcssPresetEnv({
      stage: 0,
      browsers: pkg.browserslist,
    }),
    postcssColorMod(/* pluginOptions */),
    // cssnano({ preset: 'default' }),
  ]))
  .pipe(gulp.dest('./lib')));

gulp.task('copyfont', () => gulp.src('./src/fonts/**')
  .pipe(gulp.dest('./lib/fonts')));

gulp.task('build', ['compile', 'copyfont']);

gulp.task('watch-css', function () {
    gulp.watch('./src/**/*.*', ['build']); // 注意，任务列表是个数组，即使只有一个元素。
});