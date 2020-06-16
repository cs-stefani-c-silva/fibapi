'use strict';

const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert')
const Vision = require('@hapi/vision')
const HapiSwagger = require('hapi-swagger')
const routes = require('./routes')

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

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
    
    
    
    try {
        await server.start();
        console.log('Server running on %s', server.info.uri);
    } catch (error) {
        console.log(error);
    }
    
    server.route(routes);
    
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();