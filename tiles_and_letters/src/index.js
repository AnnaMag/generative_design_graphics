//import jquery from 'jquery';
var $ = require('jquery');
//import underscore from 'underscore';
//import Snap from 'snapsvg';
//import snap from 'snapsvg';//'imports-loader?this=>window,fix=>module.exports=0!snap.svg.js';

var fun = require('./helpers.js');

//import Snap from './snapsvgImporter';
var Snap = require('snapsvg-cjs');
console.log(Snap);
//let Snap;
//try {
//  Snap = require('imports?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js');
//} catch(e) {
//  Snap = require('snapsvg');
//}


var text_oryg = new String("Out beyond ideas of wrongdoing and rightdoing there is a field. I will meet you there. When the soul lies down in that grass the world is too full to talk about");
var text_t = text_oryg.replace(/\./g, "");
var text = text_t.replace(/\s/g, "");

var s = fun.charCount(text);
//var s = wordCount(text_t);
//console.log(s);
var weights = [];
var letters = [];

for (var key in s) {
  weights.push(s[key]);
  letters.push(key);
}
var w_sum = fun. sum(weights);
var weighted_prob = weights.map(function(x){return x / w_sum});

//'SourceSansPro-Regular.otf'

var width = 320;
var height = 320;
var cols = 4;
var rows = 4;

//console.log(s);
//console.log(__dirname);

var s = Snap("14in","14in");

var s = Snap("#svg");
// Lets create big circle in the middle:
var bigCircle = s.circle(150, 150, 100);
// By default its black, lets change its attributes
bigCircle.attr({
    fill: "#bada55",
    stroke: "#000",
    strokeWidth: 5
});
