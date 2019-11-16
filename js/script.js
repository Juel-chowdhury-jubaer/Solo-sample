/* ===============================
        Preloader
   ===============================*/
$(window).on('load',function(){
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* ===============================
        Toggle icon to be cross
   ===============================*/
$(document).ready(function(){
    
    $('.nav-button').click(function(){
        $('.nav-button').toggleClass('change');
    });
    
    
    $('#serivces-02-tabs').responsiveTabs({
        startCollapsed: 'accordion',
        animation: 'slide',
    });
    
    
    
    /* ===============================
        Navbar when scrolling
   ===============================*/
    
    $(window).scroll(function(){
        let position=$(this).scrollTop();
        if(position>=20){
            $('.my-nav').addClass('custom-navbar');
            $('.my-nav a img').attr('src',"img/logo/logo-dark.png");
        }else{
            $('.my-nav').removeClass('custom-navbar');
            $('.my-nav a img').attr('src',"img/logo/logo.png");
        }
    });
    
    /* ===============================
        Team section
   ===============================*/
    
    $("#team-members").owlCarousel({
        items:2,
        margin:10,
        loop:true,
        autoplay:true,
        nav:true
    });
    
    /* ===============================
        Team section
   ===============================*/
  
        
    

var waypoint = new Waypoint({
  element: document.querySelector('.progress-element'),
  handler: function() {
    $('.progress-bar').each(function(){
            $(this).animate({
                width:$(this).attr('aria-valuenow')+'%'
            },1000);
        });
  }
});

 
    
    
    
        
    $(function(){
        $('.progress-element').waypoint(function(){
            $('.progress-bar').each(function(){
            $(this).animate({
                width:$(this).attr('aria-valuenow')+'%'
            },1000);
        });
            $(this).destroy();
        },{
            offset:'bottom-in-view'
        });
        
        
        });
    

    /* ===============================
        Isotope
   ===============================*/

    $('.gallery-list-item').click(function(){
        let value = $(this).attr('data-filter');
        if(value=='all'){
            $('.filter').show(300);
        }else{
            $('.filter').not('.'+value).hide(300);
            $('.filter').filter('.'+value).show(300);
        }
    });
    $('.gallery-list-item').click(function(){
        $(this).addClass('active-item').siblings().removeClass('active-item');
    });
    
    /* ===============================
        Portfolio Image Gallery
   ===============================*/
    $('.portfolio-section').magnificPopup({
        delegate: 'a',
        type:'image',
        gallery:{
            enabled:true
        }
    });
    
    /* ===============================
        Team section
   ===============================*/
    
    $("#testimonial-slider").owlCarousel({
        items:1,
        margin:10,
        loop:true,
        autoplay:false,
        nav:true
    });
    
    /* ===============================
        client section
   ===============================*/
    
    $(".clients-slider").owlCarousel({
        items:5,
        margin:10,
        loop:true,
        autoplay:false,
        nav:true
    });
    
    
});

