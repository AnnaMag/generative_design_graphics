//console.log(__dirname + 'ls');
import jquery from 'jquery';
import underscore from 'underscore';
import Snap from 'snapsvg';

var fun = require('./helpers.js');

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
var s = Snap("14in","14in");
Snap.load("tiles.svg", function (f) {
          var g = f.select("g");
          s.append(g);
          for ( i=0; i<cols; i++) {
             for ( j=0; j<rows; j++) {
                if (i || j ) {   // skip the first cell
                   var h = g.clone();
                   var x = i*width+10;
                   var y = j*height+30;
                   var tstr = "translate("+x+","+y+")";
                   h.transform(tstr);
                   $( "tspan" ).each(function( index ) {
                         //$(this).text(getCharacter());
                         $(this).text(getRandom (weighted_prob, letters));
                     });
                }
             }
          }
      });
