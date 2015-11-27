/* jshint node: true */
'use strict';

var pmx = require('pmx');
var probe = pmx.probe();
var init = pmx.init({
    http          : true,
    http_latency  : 200,
    http_code     : 500,
    ignore_routes : [],
    profiling     : true,
    errors        : true,
    // By default if you add alert subfield in custom
    // it's going to be enabled
    alert_enabled : true,
    custom_probes : true,
    network       : true,
    ports         : true
});

var meter = probe.meter({
    name      : 'req/sec',
    samples   : 1,
    timeframe : 60
});

var middleware = function(req, res, next) {
    meter.mark();
    next();
};

module.exports = {
    init: function() {
        init.apply(this, arguments);
        return this;
    },
    middleware: middleware
};
