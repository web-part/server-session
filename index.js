


const Data = require('./modules/Data');
const API = require('./modules/API');

module.exports = {

    start(app) {
        let { session, id$session, } = Data.make();
     
        API.start(app, id$session);

        return session;
    },

    test: function (opt) {
        API.test(opt);
    },
};