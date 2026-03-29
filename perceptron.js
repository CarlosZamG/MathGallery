
var board_perceptron = JXG.JSXGraph.initBoard('perceptron', {
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

var y_perceptron = 5;


for (let i = 0; i < 6; i++) 
{
    var wlabel_perceptron = '$w_'+ i + '$'
    var xlabel_perceptron = '$x_'+ i + '$'

    var s_perceptron = board_perceptron.create('segment', [[1,0], [-4, y_perceptron - 0.5]], {layer:5, name:wlabel_perceptron, withLabel:true, label:{offset:[2*y_perceptron-4, 5*y_perceptron]}});
    var p1_perceptron = board_perceptron.create('point', [-4.0, y_perceptron], {visible: false});
    var p2_perceptron = board_perceptron.create('point', [-5.0, y_perceptron], {visible: false});
    var pol_perceptron = board_perceptron.create('regularpolygon', [p1_perceptron, p2_perceptron, 4], {color: '#69c384', withLines:false, name:xlabel_perceptron, withLabel:true, opacity:1, label:{offset:[-4, 0]}});
    pol_perceptron.vertices[2].setAttribute({visible: false});
    pol_perceptron.vertices[3].setAttribute({visible: false});
    y_perceptron = y_perceptron - 2;

}


var neuron_perceptron = board_perceptron.create('circle', [[1,0], 2.1], {color:'#e7aaff', layer:10});

var sumtext_perceptron = board_perceptron.create('text', [-0.1, 0.3, '$z =w^{\\top} x + b=$'],{fontSize: 10})
var sumtext2_perceptron = board_perceptron.create('text', [-0.9, -0.2, '$w_0\\cdot x_0 + \\dots + w_5\\cdot x_5+b$'],{fontSize: 10})

var output_perceptron = board_perceptron.create('regularpolygon', [[4, -0.5], [5,-0.5], 4], {color: '#62a3e8', withLines:false, name:'$H(z)$', withLabel:true, layer:10, opacity:1, label:{offset:[-15, 0]}})
output_perceptron.vertices[0].setAttribute({visible: false});
output_perceptron.vertices[1].setAttribute({visible: false});
output_perceptron.vertices[2].setAttribute({visible: false});
output_perceptron.vertices[3].setAttribute({visible: false});
var l1_perceptron = board_perceptron.create('arrow', [[0,0], [6,0]], {layer:5});
