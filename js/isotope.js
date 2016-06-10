/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $isogrid = $('#lightbox');
        
        $isogrid.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $isogrid.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

 

// Populate Iso grid

    $("#lightbox").html("");
    
    for (var i = 0; i < portfolioimg.length; i++){

    var $newitems = 
            $('<div class="col-sm-6 col-md-3 col-lg-3 ' + portfolioimg[i].imgClass + '"><div class="portfolio-item"><div class="hover-bg"><div class="hover-text" id="' + [i] + '"><h4>' + portfolioimg[i].noteone + '</h4><small>' + portfolioimg[i].notetwo + '</small><div class="clearfix"></div><i class="fa fa-external-link-square"></i></div><img src="' + portfolioimg[i].cover + '" class="img-responsive darken" alt="' + portfolioimg[i].noteone + '"></div></div>');
        $isogrid.isotope( 'insert', $newitems );

    // var $newitems = 
    //         $('<div class="col-sm-6 col-md-3 col-lg-3' + portfolioimg[i].imgClass + '"><div class="portfolio-item" style="background-image: url(' + portfolioimg[i].cover + ')" alt="' + portfolioimg[i].noteone + '"><div class="hover-bg"><a href="#"><div class="hover-text"><h4>' + portfolioimg[i].noteone + '</h4><small>' + portfolioimg[i].notetwo + '</small><div class="clearfix"></div><i class="fa fa-plus"></i></div></a></div></div>');
    //     $isogrid.isotope( 'insert', $newitems );


    };

   });




               