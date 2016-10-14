var navLi = $('.navbar li');
        
        $('.tarcked').waypoint( function() {
            var hash = $(this).attr('id');
            
            navLi.removeClass('active');
            
            $.each( navLi, function() {
                if( $(this).children('a').attr('href').slice(1) == hash) {
                    $(this).addClass('active');
                }
            });
        }, {
            offset: '10%'
        });