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


function bipartite_applet(board)
{

    var n = 4
    var x = -3
    var V1 = new Array(n)
    var V2 = new Array(n)

    var A = new Array(n);
    var B = new Array(n);

    for (let index = 0; index < n; index++)
    {

        var a1 = board.create('point', [x, 2], {visible:false, fixed:true})
        var a2 = board.create('point', [x, 1.5], {visible:false, fixed:true})

        var b1 = board.create('point', [x, -2], {visible:false, fixed:true})
        var b2 = board.create('point', [x,-1.5], {visible:false, fixed:true})

        A[index] = a1;
        B[index] = b1

        var v1 = board.create('circle',[a1, a2], {strokeWidth:3, color:'#000', fixed:true});
        V1[index] = v1
        
        var v2 = board.create('circle',[b1, b2], {strokeWidth:3, color:'#000', fixed:true});
        V2[index] = v2


        for(let j = 0; j < index; j++)
        {
            var s = board.create('segment',[A[j], b1], {strokeWidth:3, color:'#000', fixed:true});
        }

        x += 2;
    }

    var ell1 = board.create('ellipse', [[-5, -2], [5, -2], [0, -3.2]], {fillColor:'#7DAAFF', strokeColor:'#7DAAFF', fixed:true})

    var ell2 = board.create('ellipse', [[-5, 2], [5, 2], [0, 3.2]], {fillColor:'#B57DFF', strokeColor:'#B57DFF', opacity: 0.5, fixed:true})

    var s1 = board.create('segment',[A[1], B[0]], {strokeWidth:3, color:'#000', fixed:true});

    var s2 = board.create('segment',[A[n-1], B[0]], {strokeWidth:3, color:'#000', fixed:true});

    var s3 = board.create('segment',[A[n-1], B[n-1]], {strokeWidth:3, color:'#000', fixed:true});

    var s4 = board.create('segment',[A[n-1], B[n-3]], {strokeWidth:3, color:'#000', fixed:true});

    var textX = board.create('text', [0, -4, "$Y$"],{color:'#5583d7', fontSize: 18, fixed:true});

    var textX = board.create('text', [0, 4, "$X$"],{color:'#B57DFF', fontSize: 18, fixed:true});

}


bipartite_applet(board_bipartite);