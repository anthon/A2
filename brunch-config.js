exports.config = {
	modules: {
		autoRequire: {
			'js/app.js': ['vendor','main']
		}
	},
	files: {
		javascripts: {
			joinTo: {
				'js/vendor.js': /^(node_modules|bower_components)/,
				'js/app.js': /^app/
			},
			order: {
				after: [ /\.html$/, /\.css$/ ]
			}
		},
		stylesheets: {
			joinTo: 'css/main.css'
		},
		templates: {
			joinTo: 'js/app.js'
		}
	},
	paths: {
		public: '../../public'
	},
	plugins: {
		autoReload: {
			enabled: {
				css: true,
				js: true,
				assets: true
			}
		},
		stylus: {
			includeCss: true
		},
		brunchTypescript: {
			ignoreErrors: true
		},
		uglify: {
			mangle: {
				keep_names: true
			}
		}
	},
	overrides: {
		production: {
			optimize: true,
			sourceMaps: false,
			plugins: {
				autoReload: {
					enabled: false
				},
				uglify: {
					mangle: true
				}
			}
		}
	}
}