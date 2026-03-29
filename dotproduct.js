JXG.Options.text.useMathJax = true;

function dot_product(u, v){
    return u.X()*v.X() + u.Y()*v.Y();
}


function proj_u_v(u,v){
    udotv = dot_product(u,v);
    vdotv = dot_product(v,v);
    return [udotv*v.X() / vdotv, udotv*v.Y() / vdotv];
}


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

var edge_dp = 7.5;

var board_dp = JXG.JSXGraph.initBoard('dotproduct', {
    boundingbox: [-edge_dp, edge_dp, edge_dp, -edge_dp],
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


function dot_product_applet(board)
{
    var u = board.create('point', [2,0], {name:'$u$', color:'#6eb4ff'});
    var v = board.create('point', [-4,2], {name:'$v$'});

    v.setAttribute({color:function(){
        if(Math.abs(dot_product(u, v)) < 0.05){ return '#784fd7';}
        else if(dot_product(u, v) > 0){ return '#7ae3fe';}
        else if(dot_product(u, v) < 0){ return '#ff5c64';}
    }});

    var origin = board.create('point', [0,0], {name:'', fixed: true, color:'none'});

    var u_arrow = board.create('arrow', [origin, u], {color:'#2e80d9', opacity:0.6});
    var v_arrow = board.create('arrow', [origin, v], {opacity:0.6});

    v_arrow.setAttribute({color:function(){
        if(Math.abs(dot_product(u, v)) < 0.05){ return '#784fd7';}
        else if(dot_product(u, v) > 0){ return '#7ae3fe';}
        else if(dot_product(u, v) < 0){ return '#ff5c64';}
    }});

    var u_line = board.create('line', [origin, u], {dash:true, color: function(){return u_arrow.visProp.color}, opacity: function(){return u_arrow.visProp.opacity}});
    var v_line = board.create('line', [origin, v],{dash:true,  opacity: function(){return v_arrow.visProp.opacity}});

    v_line.setAttribute({color:function(){
        if(Math.abs(dot_product(u, v)) < 0.05){ return '#784fd7';}
        else if(dot_product(u, v) > 0){ return '#7ae3fe';}
        else if(dot_product(u, v) < 0){ return '#ff5c64';}
    }});

    var dotproduct_text = board.create('text', [-2.2, 5, function() {
        return '$u\\cdot v =' + Math.round((dot_product(u,v) + Number.EPSILON) * 10) / 10 + '$'
        }], {fontSize:27, color:function(){
        if(Math.abs(dot_product(u, v)) < 0.05){ return '#784fd7';}
        else if(dot_product(u, v) > 0){ return '#2e80d9';}
        else if(dot_product(u, v) < 0){ return '#d4474e';}
    }});

    var arrow_proy_u_v = board.create('arrow', [origin ,function(){return proj_u_v(u,v)}], {color: function(){return u_arrow.visProp.color}, opacity: function(){return u_arrow.visProp.opacity} });

    var proy_v_u = board.create('arrow', [origin , function(){return proj_u_v(v,u)}], {opacity:0.6});


    proy_v_u.setAttribute({color:function(){
        if(Math.abs(dot_product(u, v)) < 0.05){ return '#784fd7';}
        else if(dot_product(u, v) > 0){ return '#7ae3fe';}
        else if(dot_product(u, v) < 0){ return '#ff5c64';}
    }});


    var segment_u_proy = board.create('segment', [function(){return proj_u_v(u,v)} , u], {color:'#784fd7', dash:true});

    var segment_v_proy = board.create('segment', [function(){return proj_u_v(v,u)} , v], {color:'#784fd7', dash:true});

    var uv_angle = board.create('angle', [u, origin, v], {radius:2, face:'o', visible: function(){
        var arg_u_v = Arg(u)- Arg(v);
        if(arg_u_v < 0)
        {
            arg_u_v += 2*Math.PI;  
        }
        return (arg_u_v >= Math.PI);}, orthoType:'sector'});

    var vu_angle = board.create('angle', [v, origin, u], {radius:2, face:'o', visible: function(){
        var arg_u_v = Arg(u)- Arg(v);
        if(arg_u_v < 0)
        {
            arg_u_v += 2*Math.PI;  
        }
        return (arg_u_v <  Math.PI); }, orthoType:'sector'});



    vu_angle.setAttribute({color:function(){
        if(Math.abs(dot_product(u, v)) < 0.05){ return '#784fd7';}
        else if(dot_product(u, v) > 0){ return '#7ae3fe';}
        else if(dot_product(u, v) < 0){ return '#ff5c64';}
    }});


    uv_angle.setAttribute({color:function(){
        if(Math.abs(dot_product(u, v)) < 0.05){ return '#784fd7';}
        else if(dot_product(u, v) > 0){ return '#7ae3fe';}
        else if(dot_product(u, v) < 0){ return '#ff5c64';}
    }});
}

dot_product_applet(board_dp);