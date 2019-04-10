//alert("hello world");
$(".waypoint--1").waypoint(function(direction){
    if(direction == "down"){
        //alert("hellow worlds");
        $('.waypoint--1').addClass('fixed-nav');
    }
}, {
    offset: '65%'
});
$(".waypoint--2").waypoint(function(direction){
    if(direction == "down"){
        //alert("hellow worlds");
        $('.waypoint--2').addClass('fadeIn-center');
    }
}, {
    offset: '65%'
});