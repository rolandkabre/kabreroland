

/* Pour le smooth scrolling------------------------------------------*/
$(document).ready(function(){
    // quand un lien du menu est cliqué
    $("#entete a").on("click", function(event){
        //empecher le comportement par defaut defilement instantane
        event.preventDefault();

        // recuperer l'id de la section cible

        let target = $(this).attr("href");

        // defilement anime

        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 700);
    });
});




/* Pour les elements apparaissant et disparaissant de l'appropos---------------------------*/

$('#toggle').click(function(){
    $('#a').toggle();
    $('#b').toggle(1000);
    $('#c').toggle('slow');
    $('#d').toggle('slow',	function(){
    console.log('Élément	#d	est	caché/affiché');
    });
    });
    
    $('.titre3').click(function(){
        $('.description3').fadeToggle(1000);
        });

    $('#titre').click(function(){
        $('#titrepara').toggle(1000);
        });
            $('.title1').click(function(){
                $('.description1').slideToggle(1000);
                $(this).toggleClass("active");
            });

                $('.title2').click(function(){
                    $('.description2').slideToggle(1000);
                    });

                    $('.title3').click(function(){
                        $('.description3').slideToggle(1000);
                        });

    
                   