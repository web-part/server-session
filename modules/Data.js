
const $String = require('@definejs/string');
const File = require('@definejs/file');

let indexCounter = 0;
let id$session = {};


module.exports = {

    make(server) {
        let id = $String.random(16);

        let session = id$session[id] = {
            'index': indexCounter++,
            'id': id,
            'time': Date.now(),
            'server': server,
        };

        return { id, session, id$session, };
    },



    write(file, session) {
        if (!file) {
            return;
        }


        file = $String.format(file, session);

        File.writeJSON(file, session);

        return file;

    },
};