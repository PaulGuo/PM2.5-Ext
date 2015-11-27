/* jshint node: true */
'use strict';

var pmx = require('pmx');
var init = pmx.init({
    http          : true,
    http_latency  : 200,
    http_code     : 500,
    ignore_routes : ['/test'],
    profiling     : true,
    errors        : true,
    // By default if you add alert subfield in custom
    // it's going to be enabled
    alert_enabled : true,
    custom_probes : true,
    network       : true,
    ports         : true
});

var middleware = function(req, res, next) {

};

module.exports = {
    init: init,
    middleware: middleware
};
