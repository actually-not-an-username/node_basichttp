// Docs https://hapijs.com/
const Hapi = require('hapi');

const internalServer = new Hapi.Server({
    host: 'localhost',
    port: 5290
});

/* Hey!!! if you don't any route (yes routes just like flask :)) this pretty little thing
called error appears
{
    "statusCode": 404,
    "error": "Not Found",
    "message": "Not Found"
} 

Routes are added before the start
*/

internalServer.route({
    method: 'GET',
    path: '/',    
    handler: (request, reply) => {return 'Hello world from Hapi.js :)!!!!'}
});

internalServer.route({
    method: 'GET',
    path: '/json',    
    handler: (request, reply) => {
        return {message: 'Hello, this is how Hapi.js handles JSON'}
    }
});

// look at this fancy variable that gets the uri :o    
console.log('Hey there! running at: %s', internalServer.info.uri);
internalServer.start();