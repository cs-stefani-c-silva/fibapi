'use strict';

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert')
const Vision = require('@hapi/vision')
const HapiSwagger = require('hapi-swagger')
const routes = require('./routes')

const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});

const init = async () => {    
    const swaggerOptions = {
        info: {
            title: 'Fibonacci API Doc',
            version: '0.0.1'
        }
    }
    
    await server.register([
        Inert,
        Vision,
        {
            plugin: HapiSwagger,
            options: swaggerOptions
        }
    ])

    await server.start();
    console.log('Server running on %s', server.info.uri);
    
};

server.route(routes);

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();

module.exports = server