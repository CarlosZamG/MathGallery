JXG.Options.text.useMathJax = true;

function Arg(z){
    if(Math.abs(z.Y()) < 0.0000001 && z.X() < 0){
        return Math.PI
    }else{
        var theta = 2*Math.atan(z.Y()/(z.X()+Math.sqrt(z.X()**2+z.Y()**2)))
        if(theta < 0){
            theta = theta + 2*Math.PI
        }
        return theta
    }
}


var edge_complex_multi = 10;

var board = JXG.JSXGraph.initBoard('complex_multiplication', {
    boundingbox: [-edge_complex_multi, edge_complex_multi, edge_complex_multi, -edge_complex_multi],
    showCopyright:false,
    axis:true,
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

var z = board.create('point',[2,2], {name:'$z$',size: 4, face: 'o', color:'#FF9382'});
var w = board.create('point',[-2,2], {name:'$w$',size: 4, face: 'o', color:'#7DAAFF'});

var origin = board.create('point', [0,0], {name:'', fixed: true, color:'none'});
var x_ref = board.create('point', [1,0], {name:'', fixed: true, color:'none'});



var z_vect = board.create('arrow',[origin, z], {size: 4, face: 'o', color:'#FF9382', opacity:0.6});
var w_vect = board.create('arrow',[origin, w], {size: 4, face: 'o', color:'#7DAAFF', opacity:0.6});


var z_angle = board.create('angle',[x_ref, origin, z], {name:'$Arg(z)$',radius: 3, face: 'o', color:'#FF9382', opacity:0.5, label: {strokeColor:'#FF5F47'}});
var w_angle = board.create('angle',[x_ref, origin, w], {name:'$Arg(w)$',radius: 2, face: 'o', color:'#7DAAFF', opacity:0.6, label: {strokeColor:'#2672FF'}});


var zw = board.create('point', [function(){return w.X()*z.X() - w.Y()*z.Y()}, 
                                function(){return w.Y()*z.X() + w.X()*z.Y()}],
                            {name:'$zw$',size: 4, face: 'o', color:'#B57DFF'})

var zw_vect = board.create('arrow',[origin, zw], {size: 4, face: 'o', color:'#B57DFF', opacity:0.6});
var zw_angle = board.create('angle',[x_ref, origin, zw], {name:'$Arg(zw)=Arg(z)+Arg(w)$',radius: 4, face: 'o', color:'#B57DFF', opacity:0.2, label: {strokeColor:'#9542FF'}});

var zw_full_angle = board.create('circle', [[0,0], [0,4]], {fillColor:'#B57DFF', fillOpacity:0.2, strokeColor:'#B57DFF', strokeOpacity:0, visible: function(){return (Arg(z) + Arg(w) > 2*Math.PI)}})