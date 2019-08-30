
const http = require('http'); // import http from 'http'; // equivalent to do << const http = require(http) >>

// @remark: Callback sintax is not so strange just (params) => { code block goes here }
// is not like the old fashionable cpp that requires the output type...
const internalServer = http.createServer((request, response) => {
    console.log('Received request... starting now!');
    response.write('Hello world! this is the nodejs starter pack :p');
    response.end();
})

// To run this you should write something like node basichttp.js and that's all
// Node is interpreted so there aren't compilation take care of your face with the boom!!!!
internalServer.listen(5290, () => console.log('Server running at http://localhost:5290'));