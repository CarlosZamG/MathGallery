JXG.Options.text.useMathJax = true;


var edge_open_ball = 4.5;

var board = JXG.JSXGraph.initBoard('open_ball', {
    boundingbox: [-edge_open_ball, edge_open_ball, edge_open_ball, -edge_open_ball],
    showCopyright:false,
    axis:false,
    keepaspectratio: true,
    pan: {
        enabled: false
    },
    browserPan: false,
    zoom: {
        enabled: false
    },
    showScreenshot:true
});

var r = 4;
var x = board.create('point',[0,0], {name:'$x$',size: 4, face: 'o', color:'#B57DFF', fixed:true});
var open_ball = board.create('circle',[x,[r,0]], {strokeWidth:3, dash:2, strokeColor:'#B57DFF', fillColor:'#B57DFF', fillOpacity:0.1});
var y = board.create('point',[-2,2], {name:'$y$',size: 4, face: 'o', color:'#7DAAFF'});
var r1 = board.create('segment', [x, [r,0]], {name:'$r$', color:'#B57DFF', withLabel:true});
var dxy = board.create('segment', [x, y], {name:'$d(x,y)$', color:'#FF7D7D', withLabel:true});
var r2 = board.create('segment', [y, [function(){
                                                var dist = Math.sqrt(y.X() ** 2 + y.Y() ** 2);
                                                return r/dist*y.X();
                                            },
                                        function(){
                                                var dist = Math.sqrt(y.X() ** 2 + y.Y() ** 2);
                                                return r/dist*y.Y();
                                            }
                                        ]], {name:'$r_2$', color:'#7DAAFF', withLabel:true});



var inner_ball = board.create('circle', [y, [function(){return y.X()},
                                            function(){
                                                var dist = Math.sqrt(y.X() ** 2 + y.Y() ** 2);
                                                var new_r = r - dist;
                                                return y.Y() + new_r;
                                            }
]], {strokeWidth:3, dash:2, strokeColor:'#7DAAFF', fillColor:'#7DAAFF', fillOpacity:0.2} )


board.on('move', function(){
    var xx = y.X();
    var yy = y.Y();
    var d = Math.sqrt(xx ** 2 + yy ** 2);
    if( d > 0.9*r){
        board.suspendUpdate();
        y.moveTo([0.9*r*xx / d, 0.9*r*yy / d]);
        board.unsuspendUpdate();
    }
})
