var edge_bipartite = 5.5;

var board_bipartite = JXG.JSXGraph.initBoard('bipartite', {
    boundingbox: [-edge_bipartite, edge_bipartite, edge_bipartite, -edge_bipartite],
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



var n_bipartite = 4
var x_bipartite = -3
var V1_bipartite = new Array(n_bipartite)
var V2_bipartite = new Array(n_bipartite)

var A_bipartite = new Array(n_bipartite);
var B_bipartite = new Array(n_bipartite);

for (let index = 0; index < n_bipartite; index++)
{

    var a1_bipartite = board_bipartite.create('point', [x_bipartite, 2], {visible:false})
    var a2_bipartite = board_bipartite.create('point', [x_bipartite, 1.5], {visible:false})

    var b1_bipartite = board_bipartite.create('point', [x_bipartite, -2], {visible:false})
    var b2_bipartite = board_bipartite.create('point', [x_bipartite,-1.5], {visible:false})

    A_bipartite[index] = a1_bipartite;
    B_bipartite[index] = b1_bipartite

    var v1_bipartite = board_bipartite.create('circle',[a1_bipartite, a2_bipartite], {strokeWidth:3, color:'#000'});
    V1_bipartite[index] = v1_bipartite
    
    var v2_bipartite = board_bipartite.create('circle',[b1_bipartite, b2_bipartite], {strokeWidth:3, color:'#000'});
    V2_bipartite[index] = v2_bipartite


    for(let j = 0; j < index; j++)
    {
        var s_bipartite = board_bipartite.create('segment',[A_bipartite[j], b1_bipartite], {strokeWidth:3, color:'#000'});
    }

    

    x_bipartite += 2;
}


var ell1_bipartite = board_bipartite.create('ellipse', [[-5, -2], [5, -2], [0, -3.2]], {fillColor:'#7DAAFF', strokeColor:'#7DAAFF'})

var ell2_bipartite = board_bipartite.create('ellipse', [[-5, 2], [5, 2], [0, 3.2]], {fillColor:'#B57DFF', strokeColor:'#B57DFF', opacity: 0.5 })

var s1_bipartite = board_bipartite.create('segment',[A_bipartite[1], B_bipartite[0]], {strokeWidth:3, color:'#000'});

var s2_bipartite = board_bipartite.create('segment',[A_bipartite[n_bipartite-1], B_bipartite[0]], {strokeWidth:3, color:'#000'});

var s3_bipartite = board_bipartite.create('segment',[A_bipartite[n_bipartite-1], B_bipartite[n_bipartite-1]], {strokeWidth:3, color:'#000'});

var s4_bipartite = board_bipartite.create('segment',[A_bipartite[n_bipartite-1], B_bipartite[n_bipartite-3]], {strokeWidth:3, color:'#000'});

var textX_bipartite = board_bipartite.create('text', [0, -4, "$Y$"],{color:'#5583d7', fontSize: 18})

var textX_bipartite = board_bipartite.create('text', [0, 4, "$X$"],{color:'#B57DFF', fontSize: 18})