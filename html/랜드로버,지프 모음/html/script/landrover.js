$(document).ready(function(){
    $("nav li a").mouseenter(function(){
        $(this).addClass("green");
    });

    $("nav li a").mouseleave(function(){
        $(this).removeClass("green");
    });
});
