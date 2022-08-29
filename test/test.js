var request = require('supertest');
var app = require('../app.js');
describe('GET /health', function() {
    it('respond with app is up & running', function(done) {
        request(app).get('/health').expect('{ "response": "app is up & running" }', done);
    });
});
