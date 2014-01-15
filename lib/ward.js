var fs = require('fs'),
    mkdirp = require('mkdirp');

var ward = function(next) {
	if (!fs.existsSync(this.path)) {
		mkdirp.sync(this.path);
	}

	next();
}

module.exports = ward;
