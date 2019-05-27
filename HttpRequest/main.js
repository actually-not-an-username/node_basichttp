const request = require('request');
const arguments = require('yargs').argv;

let userName = arguments.userName;
let host = 'api.github.com';
//! GitHub api request a user-agent in the request as mandatory so let's use a generic one
let ubuntuUserAgent = {'user-agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:67.0) Gecko/20100101 Firefox/67.0'};
let method = 'GET';

let requests = [
    {
        host: host,
        path: `/users/${userName}`,
        method: method,        
        headers: ubuntuUserAgent
    },
    {
        host: host,
        path: `/users/${userName}/repos`,
        method: method,        
        headers: ubuntuUserAgent
    }
];

console.log(`about to request information from ${host}, and user ${userName}`);
//! This is a single request...
// request({url:`https://${host}/users/${userName}`,
//         json:true,
//         headers: ubuntuUserAgent},
//         (error, response, body) => {
//             // console.log("=======================");
//             // console.log("Reading response fields");
//             // console.log(`\terror: ${error}`);
//             // console.log(`\tresponse: ${JSON.stringify(response)}`);
//             // console.log(`\tbody: ${JSON.stringify(body)}`);            
//             // console.log("=======================");
//             if(error){
//                 throw error;
//             } else if (response.statusCode === 200) {                
//                 console.log("Information acquired, now formatting");
//                 console.log("=======================");
//                 if (body.name)
//                 {
//                     console.log(`Seems like you're: ${body.name}`)                    
//                 }
//                 else{
//                     console.log(`Jmmm you don't have a name so your nickname is: ${body.login}`)
//                 }                
//             }            
//         });

//! And this is my fancy way to do both requests all in one :)
//! I know this seems like a shitty thing but it's just a PoC
requests.forEach((currentRequest) => {
    console.log("=======================");
    console.log(`${currentRequest.method}:${currentRequest.host}${currentRequest.path}`);
    request({url: `https://${currentRequest.host}${currentRequest.path}`,
             json: true,
             headers: ubuntuUserAgent},
             (error, response, body) => {
                if(error){
                    throw error;
                }
                else if(response.statusCode === 200)
                {
                    console.log(`\tValid response received, formatting response`);
                    console.log(`\t${JSON.stringify(body, undefined, 2)}`);
                }
                else
                {
                    console.error("Some weird thing happens, we should not get here...");
                }
             });
    console.log("=======================");
});