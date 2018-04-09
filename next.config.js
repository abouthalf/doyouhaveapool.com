module.exports = {
	webpack: (config) => {
		// Fixes npm packages that depend on `fs` module
		config.node = {
			fs: 'empty'
		};

		let rawRule = {
			test: /\.txt$/,
			use: 'raw-loader'
		};

		config.module.rules.push(rawRule);

		return config
	},
	exportPathMap: function(defaultPathMap) {
    return {
      '/': { page: '/' },
			'/about': { page: '/about' }
		}
	}
}
