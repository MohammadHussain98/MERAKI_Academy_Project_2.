

$(section).each(function(){
 $('#Mune-bar').click(function(){
        $(this).toggleClass('fas fa-hamburger');
        $('.narbar').toggleClass('nav-toggle');
    });


$(window).on('scroll load ', function(){

$('Mune-bar').removeClass('fas fa-hamburger');
$('.narbar').removeClass('nav-toggle');


//scroll

$(section).each(function(){
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

$('.Mune .list .btn').click(function(){
    $(this).addClass('active').siblings().removeClass('active');

    let src = $(this).attr('data-src');
    $('#Mune-img').attr('src',src);

});


});


