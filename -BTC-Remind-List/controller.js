const http = require('http');
const url = require('url');
var listaRecordatorios = new Array();

module.exports = http.createServer((req, res) => {

    var service = require('./service.js');
    const reqUrl = url.parse(req.url, true);

    // GET Endpoint
    if (reqUrl.pathname == '/sample' && req.method === 'GET') {
        console.log('Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname);

        service.sampleRequest(req, res);
	} else if( reqUrl.pathname == '/insertarRecordatorio' && req.method === 'POST'){
		console.log('Request Type:' +
			req.method + ' Endpoint: ' +
			reqUrl.pathname);

		service.insertarRecordatorio(req, res);
	}
});