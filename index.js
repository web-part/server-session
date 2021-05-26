

const File = require('@definejs/file');
const Data = require('./modules/Data');
const API = require('./modules/API');

module.exports = {
    start(app, file, server) {
        let { session, id$session, } = Data.make(server);

        file = Data.write(file, session);
        API.start(app, id$session);

        return { file, session, };

    },

    test: function (file, opt) {
        //重载 test(opt);
        if (typeof file == 'object') {
            opt = file;
            file = undefined;
        }
       

        if (file) {
            let { id, server, } = File.readJSON(file);

            opt = {
                ...server,
                id,
                ...opt,
            };
        }

        API.test(opt);
    },
};