
const $String = require('@definejs/string');

let indexCounter = 0;
let id$session = {};


module.exports = {

    make() {
        let id = $String.random(16);

        let session = id$session[id] = {
            'index': indexCounter++,
            'id': id,
            'time': Date.now(),
        };

        return { id, session, id$session, };
    },



};