'use strict';

const Hapi = require('@hapi/hapi');
const usersController = require('./controllers/usersController.js');
const driversController = require('./controllers/driversController.js');
const messageController = require('./controllers/messageController.js');
const passengerController = require('./controllers/passengerController.js');
const reviewController = require('./controllers/reviewController.js');
const tripController = require('./controllers/tripController.js');
//const sequelize = require("./db.js")
// const user = require('./models/user.js')
// const usersController = require("/controllers/usersController.js")
const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    server.route({
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            const person = "Emily"
            return 'Hello ' + person + ". You're a rockstar!";
        }
    });

    server.route({
        method: 'GET',
        path: '/users',
        handler: (request, h) => {
            return usersController.index()
        }
    });

    server.route({
        method: 'POST',
        path: '/users',
        handler: (request, h) => {
            console.log ("payload", request.payload)
            const payload = JSON.parse(request.payload)
            const username = payload.username;
            const password = payload.password;
            const user = {
                username,
                password
            }
            return usersController.create(user)
        }
    });
    server.route({
        method: 'GET',
        path: '/drivers',
        handler: (request, h) => {
            return driversController.index()
        }
    });

    server.route({
        method: 'POST',
        path: '/drivers',
        handler: (request, h) => {
            console.log ("payload", request.payload)
            const payload = JSON.parse(request.payload)
            return driversController.create(payload)
        }
    });
    server.route({
        method: 'GET',
        path: '/message',
        handler: (request, h) => {
            return messageController.index()
        }
    });
    server.route({
        method: 'POST',
        path: '/message',
        handler: (request, h) => {
            console.log ("payload", request.payload)
            const payload = JSON.parse(request.payload)
            return messageController.create(payload)
        }
    });    
    server.route({
        method: 'GET',
        path: '/passenger',
        handler: (request, h) => {
            return passengerController.index()
        }
    });

    server.route({
        method: 'POST',
        path: '/passenger',
        handler: (request, h) => {
            console.log ("payload", request.payload)
            const payload = JSON.parse(request.payload)
            return passengerController.create(payload)
        }
    });
    server.route({
        method: 'GET',
        path: '/review',
        handler: (request, h) => {
            return reviewController.index()
        }
    });

    server.route({
        method: 'POST',
        path: '/review',
        handler: (request, h) => {
            console.log ("payload", request.payload)
            const payload = JSON.parse(request.payload)
            return reviewController.create(payload)
        }
    });
    server.route({
        method: 'GET',
        path: '/trip',
        handler: (request, h) => {
            return tripController.index()
        }
    });

    server.route({
        method: 'POST',
        path: '/trip',
        handler: (request, h) => {
            console.log ("payload", request.payload)
            const payload = JSON.parse(request.payload)
            return tripController.create(payload)
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();

