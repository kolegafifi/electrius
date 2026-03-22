import { src, dest, watch, series, parallel } from 'gulp'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import postcss from 'gulp-postcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import rename from 'gulp-rename'
import babel from 'gulp-babel'
import terser from 'gulp-terser'
import browserSyncPkg from 'browser-sync'

const sass = gulpSass(dartSass)
const browserSync = browserSyncPkg.create()

const paths = {
	styles: {
		src: './src/sass/**/*.scss',
		dest: './dist/css',
	},
	scripts: {
		src: './src/js/**/*.js',
		dest: './dist/js',
	},
	images: {
		src: './src/img/*.{png,jpg,jpeg,gif,svg}',
		dest: './dist/img',
	},
	html: './*.html',
}

export function styles() {
	return src(paths.styles.src, { sourcemaps: true })
		.pipe(sass.sync().on('error', sass.logError))
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(rename({ suffix: '.min' }))
		.pipe(dest(paths.styles.dest, { sourcemaps: '.' }))
}

export function scripts() {
	return src(paths.scripts.src, { sourcemaps: true })
		.pipe(
			babel({
				presets: ['@babel/preset-env'],
			})
		)
		.pipe(terser())
		.pipe(rename({ suffix: '.min' }))
		.pipe(dest(paths.scripts.dest, { sourcemaps: '.' }))
}

export function images() {
	return src(paths.images.src).pipe(dest(paths.images.dest))
}

export function serve(done) {
	browserSync.init({
		server: {
			baseDir: './',
		},
	})
	done()
}

export function reload(done) {
	browserSync.reload()
	done()
}

export function watcher() {
	watch(paths.html, reload)
	watch(paths.styles.src, series(styles, reload))
	watch(paths.scripts.src, series(scripts, reload))
	watch(paths.images.src, series(images, reload))
}

const build = parallel(styles, scripts, images)

export { build }
export default series(build, serve, watcher)
