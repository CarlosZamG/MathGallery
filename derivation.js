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


var sin_f_derivate = board_derivate.create('functiongraph', [function(xv){return Math.sin(xv);},-2*Math.PI,2*Math.PI], {strokeWidth:2});
var x_derivate = board_derivate.create('glider', [-3/2, 0, sin_f_derivate], {name:'$x$'});
var h_derivate = board_derivate.create('slider', [[-3, -2], [3, -2], [-3, 3, 3]], {suffixLabel: '$h = $', snapWidth:0.05});
var x_h_derivate = board_derivate.create('point', [function(){return x_derivate.X() + h_derivate.Value()}, function(){return Math.sin(x_derivate.X() + h_derivate.Value())}], {name: function(){
    if(h_derivate.Value() == 0) return '';
    else return '$x+h$'
}});
var line_derivate = board_derivate.create('line', [x_derivate, x_h_derivate], {color:'#FF9382'})

var df_derivate = board_derivate.create('segment',[x_h_derivate, function() {return [x_h_derivate.X(), x_derivate.Y()]}], {dash:true, color:'#006831'});
var dx_derivate = board_derivate.create('segment',[x_derivate, function(){return [x_h_derivate.X(), x_derivate.Y()]}], {dash:true, color:'#8840e5'});

var tan_line_derivate = board_derivate.create('functiongraph', [function(xv){return Math.cos(x_derivate.X())*(xv - x_derivate.X())+Math.sin(x_derivate.X());},-2*Math.PI,2*Math.PI], {strokeWidth:2, color: '#FF0000',visible:function(){return h_derivate.Value() == 0}});
var derivate_text = board_derivate.create('text', [function(){return x_derivate.X()-0.1} ,2.8 , "$f'(x)$"], {visible: function(){return h_derivate.Value() == 0} })
var df_text_derivate = board_derivate.create('text', [function() {return (x_derivate.X() + x_h_derivate.X())/2}, 3, '$f(x+h)-f(x)$'], {visible: function(){return h_derivate.Value() != 0}, color:'#006831'})
var dx_text_derivate = board_derivate.create('text', [function() {return df_text_derivate.X() + 1.2}, 2.45, '$h$'], {visible: function(){return h_derivate.Value() != 0}, color:'#8840e5'})
var seg_frac_derivate = board_derivate.create('segment', [[function(){return df_text_derivate.X()} , 2.7], [function(){return df_text_derivate.X()+2.5} , 2.7]], {visible:function(){return h_derivate.Value() != 0}, color:'#000', strokeWidth:1})