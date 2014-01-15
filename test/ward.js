var ward = require('../lib/ward'),
    fs = require('fs'),
    exists = fs.existsSync,
    rmdir = fs.rmdirSync;

describe('File storage ward', function() {
	it('Should create directory at given path if does not exist', function(done) {
		var path = __dirname + '/migrations',
		    env = { path: path };

		exists(path).should.not.be.ok;
		ward.call(env, function() {
			exists(path).should.be.ok;
			rmdir(path);
			done();
		});
	});
});
