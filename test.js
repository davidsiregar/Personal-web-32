var now  = "04/09/2013 15:00:00";
var then = "02/09/2013 14:20:30";

var ms = moment(now,"DD/MM/YYYY HH:mm:ss").diff(moment(then,"DD/MM/YYYY HH:mm:ss"));
var d = moment.duration(ms);
var s = d.format("hh:mm:ss");