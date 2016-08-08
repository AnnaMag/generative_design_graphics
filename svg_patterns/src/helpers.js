//import underscore from 'underscore';
var _ = require('underscore');
//"use strict";
module.exports = {

    getRandom: function(weights, values) {
        var num = Math.random(),
            s = 0,
            lastIndex = weights.length - 1;
        for (var i = 0; i < lastIndex; ++i) {
            s += weights[i];
            if (num < s) {
                return values[i];
            }
          }
    return values[lastIndex];
  },

    charCount: function(str) {
      return _(str.split('')).countBy(function(char) {
    //    console.log(char);
        return char.toLowerCase();
      });
    },

    wordCount: function(str) {
      return _(str.split(' ')).countBy(function(char) {
        return char.replace(/\./g, "").toLowerCase();
      });
    },

    getCharacter: function () {
        return String.fromCharCode(65+Math.floor((Math.random()*26)));
    },

    sum: function (o){
        for(var s = 0, i = o.length; i; s += o[--i]);
        return s;
    }
};
