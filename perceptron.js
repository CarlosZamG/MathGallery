
var board = JXG.JSXGraph.initBoard('perceptron', {
    boundingbox: [-5.5, 5.5, 6.5, -6.5],
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
    showScreenshot:true,
    screenshot: {
            scale: 3,
        }
});

var y = 5;


for (let i = 0; i < 6; i++) 
{
    var wlabel = '$w_'+ i + '$'
    var xlabel = '$x_'+ i + '$'

    var s = board.create('segment', [[1,0], [-4, y - 0.5]], {layer:5, name:wlabel, withLabel:true, label:{offset:[2*y-4, 5*y]}});
    var p1 = board.create('point', [-4.0, y], {visible: false});
    var p2 = board.create('point', [-5.0, y], {visible: false});
    var pol = board.create('regularpolygon', [p1, p2, 4], {color: '#69c384', withLines:false, name:xlabel, withLabel:true, opacity:1, label:{offset:[-4, 0]}});
    pol.vertices[2].setAttribute({visible: false});
    pol.vertices[3].setAttribute({visible: false});
    y = y - 2;

}


var neuron = board.create('circle', [[1,0], 2.1], {color:'#e7aaff', layer:10});

var sumtext = board.create('text', [-0.1, 0.3, '$z =w^{\\top} x + b=$'],{fontSize: 10})
var sumtext2 = board.create('text', [-0.9, -0.2, '$w_0\\cdot x_0 + \\dots + w_5\\cdot x_5+b$'],{fontSize: 10})

var output = board.create('regularpolygon', [[4, -0.5], [5,-0.5], 4], {color: '#62a3e8', withLines:false, name:'$H(z)$', withLabel:true, layer:10, opacity:1, label:{offset:[-15, 0]}})
output.vertices[0].setAttribute({visible: false});
output.vertices[1].setAttribute({visible: false});
output.vertices[2].setAttribute({visible: false});
output.vertices[3].setAttribute({visible: false});
var l1 = board.create('arrow', [[0,0], [6,0]], {layer:5});
