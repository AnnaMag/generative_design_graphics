Snap.load("tiles.svg", function (f) {
          var g = f.select("g");
          s.append(g);
          console.log(g);
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
