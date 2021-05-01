 $('#Mune-bar').click(function(){
        $(this).toggleClass('fas fa-hamburger');
        $('.narbar').toggleClass('nav-toggle');
    });


$(window).on('scroll load ', function(){

$('Mune-bar').removeClass('fas fa-hamburger');
$('.narbar').removeClass('nav-toggle');


});

$('.Mune .list .btn').click(function(){
    $(this).addClass('active').siblings().removeClass('active');

    let src = $(this).attr('data-src');
    $('#Mune-img').attr('src',src);

});





