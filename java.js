/*$('#toggle').click(function(){
    $('#a').toggle();
    $('#b').toggle(1000);
    $('#c').toggle('slow');
    $('#d').toggle('slow',	function(){
    console.log('Élément	#d	est	caché/affiché');
    });
    });
    

    $('#titre').click(function(){
        $('#titrepara').toggle(1000);
        });

        $('#titre2').click(function(){
            $('#titrepara2').fadeToggle(1000);
            });

            $('#titre3').click(function(){
                $('#titrepara3').slideToggle(1000);
                }); */

$(window).on("scroll", function(){
    $(".text").each(function(){
        var elementTop = $(this).offset().top;
        var topp = $(window).scrollTop()+$(window).height();
        if (elementTop < topp -50){
            $(this).addClass("visible");
        }
    })
});

$(window).on("scroll", function(){
    $(".pho").each(function(){
        var moi = $(this).offset().top;
        var toppp = $(window).scrollTop()+$(window).height();
        if (moi < toppp -50){
            $(this).addClass("vis");
        }
    })
});


$(document).ready(function(){
    var $container = $(".image-container");
    var $images = $container.find("img");
    var currentIndex = 0;


    function showNextImage(){
        $images.eq(currentIndex).removeClass('active').fadeOut();

        currentIndex = (currentIndex + 1) % $images.length;

        $images.eq(currentIndex).addClass("active").fadeIn();
    }
       

setInterval(showNextImage, 2000);
});


