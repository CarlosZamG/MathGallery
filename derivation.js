JXG.Options.text.useMathJax = true;


var edge_derivate = 3.5;

var board_derivate = JXG.JSXGraph.initBoard('derivation', {
    boundingbox: [-edge_derivate, edge_derivate, edge_derivate, -edge_derivate],
    showCopyright:false,
    axis:true,
    defaultAxes: {
        x: { ticks: { drawLabels: false } },
        y: { ticks: { drawLabels: false } }
    },
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

function derivate_applet(board)
{
    var sin_f = board.create('functiongraph', [function(xv){return Math.sin(xv);},-2*Math.PI,2*Math.PI], {strokeWidth:2});
    var x = board.create('glider', [-3/2, 0, sin_f], {name:'$x$'});
    var h = board.create('slider', [[-3, -2], [3, -2], [-3, 3, 3]], {suffixLabel: '$h = $', snapWidth:0.05});
    var x_h = board.create('point', [function(){return x.X() + h.Value()}, function(){return Math.sin(x.X() + h.Value())}], {name: function(){
        if(h.Value() == 0) return '';
        else return '$x+h$'
    }});
    var line = board.create('line', [x, x_h], {color:'#FF9382'})

    var df = board.create('segment',[x_h, function() {return [x_h.X(), x.Y()]}], {dash:true, color:'#006831'});
    var dx = board.create('segment',[x, function(){return [x_h.X(), x.Y()]}], {dash:true, color:'#8840e5'});

    var tan_line = board.create('functiongraph', [function(xv){return Math.cos(x.X())*(xv - x.X())+Math.sin(x.X());},-2*Math.PI,2*Math.PI], {strokeWidth:2, color: '#FF0000',visible:function(){return h.Value() == 0}});
    var derivate_text = board.create('text', [function(){return x.X()-0.1} ,2.8 , "$f'(x)$"], {visible: function(){return h.Value() == 0} })
    var df_text = board.create('text', [function() {return (x.X() + x_h.X())/2}, 3, '$f(x+h)-f(x)$'], {visible: function(){return h.Value() != 0}, color:'#006831'})
    var dx_text = board.create('text', [function() {return df_text.X() + 1.2}, 2.45, '$h$'], {visible: function(){return h.Value() != 0}, color:'#8840e5'})
    var seg_frac = board.create('segment', [[function(){return df_text.X()} , 2.7], [function(){return df_text.X()+2.5} , 2.7]], {visible:function(){return h.Value() != 0}, color:'#000', strokeWidth:1})
}

derivate_applet(board_derivate);