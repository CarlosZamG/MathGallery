JXG.Options.text.useMathJax = true;


var edge_open_ball = 4.5;

var board_open_ball = JXG.JSXGraph.initBoard('open_ball', {
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

var r_open_ball = 4;
var x_open_ball = board_open_ball.create('point',[0,0], {name:'$x$',size: 4, face: 'o', color:'#B57DFF', fixed:true});
var open_ball = board_open_ball.create('circle',[x_open_ball,[r_open_ball,0]], {strokeWidth:3, dash:2, strokeColor:'#B57DFF', fillColor:'#B57DFF', fillOpacity:0.1});
var y_open_ball = board_open_ball.create('point',[-2,2], {name:'$y$',size: 4, face: 'o', color:'#7DAAFF'});
var r1_open_ball = board_open_ball.create('segment', [x_open_ball, [r_open_ball,0]], {name:'$r$', color:'#B57DFF', withLabel:true});
var dxy_open_ball = board_open_ball.create('segment', [x_open_ball, y_open_ball], {name:'$d(x,y)$', color:'#FF7D7D', withLabel:true});
var r2_open_ball = board_open_ball.create('segment', [y_open_ball, [function(){
                                                var dist = Math.sqrt(y_open_ball.X() ** 2 + y_open_ball.Y() ** 2);
                                                return r_open_ball/dist*y_open_ball.X();
                                            },
                                        function(){
                                                var dist = Math.sqrt(y_open_ball.X() ** 2 + y_open_ball.Y() ** 2);
                                                return r_open_ball/dist*y_open_ball.Y();
                                            }
                                        ]], {name:'$r_2$', color:'#7DAAFF', withLabel:true});



var inner_ball = board_open_ball.create('circle', [y_open_ball, [function(){return y_open_ball.X()},
                                            function(){
                                                var dist = Math.sqrt(y_open_ball.X() ** 2 + y_open_ball.Y() ** 2);
                                                var new_r = r_open_ball - dist;
                                                return y_open_ball.Y() + new_r;
                                            }
]], {strokeWidth:3, dash:2, strokeColor:'#7DAAFF', fillColor:'#7DAAFF', fillOpacity:0.2} )


board_open_ball.on('move', function(){
    var xx = y_open_ball.X();
    var yy = y_open_ball.Y();
    var d = Math.sqrt(xx ** 2 + yy ** 2);
    if( d > 0.9*r_open_ball ){
        board_open_ball.suspendUpdate();
        y_open_ball.moveTo([0.9*r_open_ball*xx / d, 0.9*r_open_ball*yy / d]);
        board_open_ball.unsuspendUpdate();
    }
})
