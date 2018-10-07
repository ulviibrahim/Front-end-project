$(document).ready(function(){


   
    var $grid = $('.myverystrangediv').isotope({
        // options
        itemSelector: '.image-grid',
        layoutMode: 'fitRows',

    });
    $('.stopa').on('click', function (e) {
        e.ventDefault;
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });


    });


//Search form toggler
    $(".searchactivate").click(function () {
      
     
        $("#search").fadeToggle("slow");
    });

   

    new WOW().init();
    // Navbar
    $(window).scroll(function (e) {
        if ($(this).scrollTop() > 80) {
            $("header").removeClass("scrolled");
        } else {
            $("header").addClass("scrolled");
        }
    });

    // Testimonial

    $("#owl-carousel").owlCarousel({
        nav:true,
        navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
        margin:15,
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
              
                nav:false
            },
           1000:{
            items:3,
           
                nav:true
            }
        }
    });

    // Event section

    $("#upcoming_news").owlCarousel({
        nav:true,
        nav:true,
        navText: ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
        margin:15,
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
              
                nav:false
            },
           1000:{
            items:2,
           
                nav:true
            }
        }
    });
    var a = 0;
      $(window).on('scroll',function() {
          var oTop = $('#counter').offset().top - window.innerHeight;
          if (a == 0 && $(window).scrollTop() > oTop) {
              $('.counter_value').each(function() {
                  var $this = $(this),
                      countTo = $this.attr('data-count');
                  $({
                      countNum: $this.text()
                  }).animate({
                          countNum: countTo
                      },
                      {
                          duration: 2000,
                          easing: 'swing',
                          step: function() {
                              $this.text(Math.floor(this.countNum));
                          },
                          complete: function() {
                              $this.text(this.countNum);
                              //alert('finished');
                          }
      
                      });
              });
              a = 1;
          }
        });



        $('.skillbar-1').each(function(){
            $(this).find('.skillbar-bar').animate({
                width:$(this).attr('data-percent')
            },3000);
            });



            // $(".element-wrapper").isotope({
            //     itemSelector: '.element-item',
            //     layoutMode: 'fitRows',
                
            // })
            // $('.skillbar-1').each(function(){
            //     $(this).find('.skillbar-bar').animate({
            //         width:$(this).attr('data-percent')
            //     },3000);
            //     });
            //     $('.skillbar-1').each(function(){
            //         $(this).find('.skillbar-bar').animate({
            //             width:$(this).attr('data-percent')
            //         },3000);
            //         });
            //         $('.skillbar-1').each(function(){
            //             $(this).find('.skillbar-bar').animate({
            //                 width:$(this).attr('data-percent')
            //             },3000);
            //             });
                        
        
       
 
});

// Number from 0.0 to 1.0

    // if ($(this).scrollTop() > 0) {
    //     $(".first").addClass("fixed-top");
    // } else {
    //     $(".first").removeClass("fixed-top");
    // }

    // $("nav .my-container ul li").click(function(){
    //     $("nav .my-container ul li ul").removeClass("d-none")
    // })