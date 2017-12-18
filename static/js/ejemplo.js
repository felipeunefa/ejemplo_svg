 $(document).ready(function(){
     var svg=function(g,a,d,f,e,divId,w,h){
         var $div=$(divId);
         var s1=Snap().attr({
            width:w,
            height:h
             });
         s1.append(g);
         var secondScene = new Snap.Matrix();
         secondScene.a=a;
         secondScene.d=d;
         secondScene.f=f;
         secondScene.e=e;
         g.attr({transform: secondScene});
         $div.append(s1.node)
         }
     Snap.load("static/img/prueba2.svg", function (f) {
     var g=f.select("#g3");
     svg(g,150,150,-10,-15,'#div1',100,100);
     var g2=g.clone()
     svg(g2,300,300,-40,-40,'#div2',200,100);
     var g3=g2.clone()
     svg(g2,600,600,-120,-130,'#div3',200,100);
     var g4=g3.clone()
     svg(g4,1200,1200 ,-240,-240,'#div4',200,160);
     var g5=g4.clone()
     svg(g5,3900,3900 ,-740,-840,'#div5',500,600);
     
     })
     
     });
 

