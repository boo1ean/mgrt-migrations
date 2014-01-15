var install = require('../');

describe('Migrations install script', function() {
	it('Should install all the stuff', function() {
		var env = {
			path: __dirname + '/assets',
			wards: []
		}

		install.apply(env);

		env.should.have.property('wards').and.be.instanceof(Array).and.have.lengthOf(1);
		env.wards[0].should.be.type('function');
	});
});
