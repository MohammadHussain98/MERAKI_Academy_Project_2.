
$(document).ready(()=>{    //$(function)

$(section).each(()=>{
 $('#Mune').click(function(){
        $(this).toggleClass('fa fa-star');
        $(this).toggleClass('narbar');
    });


$(window).on('scroll load ',()=>{

$('Mune-bar').removeClass('fa fa-star');
$('.narbar').removeClass('nav-toggle');

});
//scroll

$(section).each(()=>{
    let top =$(window).scrolltop();
    let offset = $(this).offset().top -200;
    let height = $(this).height();
    let id = $(this).attr('id');
    
    if(top > offset && top<offset+height ){
        $('.narbar ul a ').removeClass('active');
        $('.navbar').find(`href`)
    }
    })
    
  


});

$('.Mune .list .btn').click(()=>{
    $(this).addClass('active').siblings().removeClass('active');

    let src = $(this).attr('data-src');
    $('#Mune-img').attr('src',src);

});


});


