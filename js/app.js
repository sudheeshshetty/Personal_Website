$(document).ready(function(){
    $('.carousel.carousel-slider').carousel({fullWidth: true,duration:2000});
    $('.parallax').parallax();
    $('.materialboxed').materialbox();
    $(document).scroll(function() { 
        if($(this).scrollTop() > $('#slider').offset().top) {
            $("nav").attr("style",'background-color:#000000 !important');
            $("nav ul li a").attr("style",'color:white !important');
            $(".brand-logo").attr("style",'color:white !important');
            $("nav ul li a").hover(function(){
                $(this).attr("style",'background-color:gray !important');
            },function(){
                $(this).attr("style",'background-color:#000000 !important');
                $("nav ul li a").attr("style",'color:white !important');
            });
        } else {
            $("nav").attr("style",'background-color:transparent !important');
            $("nav ul li a").attr("style",'color:#000000 !important');
            $(".brand-logo").attr("style",'color:black !important');
            $("nav ul li a").hover(function(){
                $(this).attr("style",'background-color:gray !important');
            },function(){
                $(this).attr("style",'background-color:transparent !important');
                $("nav ul li a").attr("style",'color:#000000 !important');
            });
        }
    });
    
});