const server = require('../src/index')
const supertest = require('supertest')
const request = supertest(server)

// Start app before running the test case
beforeAll((done) => {
    server.events.on('start', () => {
        done()
    })
})

// Stop application after running the test case
afterAll((done) => {
    server.events.on('stop', () => {
        done()
    })
    server.stop()
})

test('Should success with server connection', async function () {
    const options = {
        method: 'GET',
        url: '/'
    };
    const data = await server.inject(options);
    expect(data.statusCode).toBe(200);
});

test('Should get number successfully', async function () {
    const data = await server.inject('/fib/6');
    expect(data.statusCode).toBe(200);
    expect(data.result.position).toBe(6);
    expect(data.result.value).toBe(13);
});