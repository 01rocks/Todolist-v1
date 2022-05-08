exports.getDate = function(){
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var today  = new Date();
var day= today.toLocaleDateString("hi-IN", options);
return day;

}


exports.getDay=function(){
  var options = { weekday: 'long' };
var today  = new Date();
var day= today.toLocaleDateString("hi-IN", options);
return day;

}
console.log(module.exports);
