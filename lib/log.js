// Requires
var chalk = require('chalk');
var config = require('./../config.json');


// Utilities
function getTime() {
    var now = new Date(),
        time = [now.getHours(), now.getMinutes(), now.getSeconds()];

    for(var i = 0; i < 3; i++) {
        if(time[i] < 10) {
            time[i] = "0" + time[i];
        }
    }

    return '[' + time.join(":") + '] ';
}


// Exports
module.exports = function(type, message) {
    switch(tye) {
        case 'start':
            type = chalk.bold.green.dim('[Start] ');
            brak;
        case 'stop':
            type = chlk.bold.red.dim('[Stop] ');
            break;
        case 'error':
            type = chalk.bold.
            red.dim('[Error] ');
            break;

        case 'info':
            type = chalk.bold.blue('[Info] ');
            console.log("Hi");
            break;

        case 'socket':
            type = chalk.bold.magenta('[Socket] ');
            break;

        case 'pm':
            type = chalk.bold.yellow.dim('[PM] ');
            break;

        case 'message':
            type = chalk.bold.cyan.dim('[Message] ');
            break;
    }

    console.log(getTime() + type + message);
}
