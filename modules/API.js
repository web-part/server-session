
const http = require('http');


module.exports = {

    start(app, id$session) {

        app.get('/session/:id', function (req, res, next) {
           
            let { id, } = req.params;
            let session = id$session[id];

            if (session) {
                res.send({
                    'code': 200,
                    'msg': 'ok',
                    'data': session,
                });
            }
            else {
                res.send({
                    'code': 404,
                    'msg': 'Not Found',
                    'data': { id, },
                });
            }

        });

    },


    test(opt) {
        let { host, port, id, success, fail, error, } = opt;
        
        let param = {
            'method': 'GET',
            'hostname': host,
            'port': port,
            'path': `/session/${id}`,
        };

        let req = http.request(param, function (res) {
            if (res.statusCode != 200) {
                error && error({ res, });
                return;
            }

            res.on('data', function (buffer) {
                try {
                    let json = JSON.parse(buffer.toString());
                    let { code, msg, data, } = json;

                    if (code == 200) {
                        success && success(data, json);
                    }
                    else {
                        fail && fail(code, msg, json);
                    }
                }
                catch (ex) {
                    error && error({ res, ex, });
                }

            });
        });

        req.on('error', function (err) {
            error && error({ err, });
        });

        req.end();

    },
};