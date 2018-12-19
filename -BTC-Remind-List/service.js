const url = require('url');
var listaRecordatorios = new Array();


exports.sampleRequest = function (req, res) {
    const reqUrl = url.parse(req.url, true);
    var name = 'World';
    if (reqUrl.query.name) {
        name = reqUrl.query.name
    }

    var response = {
        "text": "Hello " + name
    };

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(response));
};

exports.insertarRecordatorio = function (req, res) {
	const reqUrl = url.parse(req.url, true);

	var message = '';
	var user = '';
	var tiempo = '';

    if (reqUrl.query.message) {
        message = reqUrl.query.message;
	}
	
	if (reqUrl.query.user) {
        user = reqUrl.query.user;
	}

	if (reqUrl.query.tiempo) {
        tiempo = reqUrl.query.tiempo;
    }
	resp = new Respuesta( user, message, tiempo );
	
	res.statusCode = 200;
	res.setHeader( 'Content-Type', 'application/json' );
	res.end( JSON.stringify(resp) );
}



class Respuesta{
	constructor( user, message, tiempo ){
		this.user = user;
		this.message = message;
		this.tiempo = tiempo;
	}
}