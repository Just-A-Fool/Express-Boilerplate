const app = require('../src/app');

describe('GET /boilerplate endpoint BOILERPLATE', () => {
    it('Returns 200 and "boilerplate" message when requested', () => {
        return supertest(app)
        .get('/boilerplate')
        .expect('Content-Type', /json/)
        .expect(200, {message: 'boilerplate'});
    });
});