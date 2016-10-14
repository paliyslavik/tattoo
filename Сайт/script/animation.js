$('.box')
       .waypoint( function(dir) {
        if ( dir == 'down' )
            $(this)
                .removeClass('fadeOutRight')
                .addClass('fadeInLeft');
        else
            $(this)
                .removeClass('fadeInLeft')
                .addClass('fadeOutRight');
   }, {
       offset: '75%'
   })
   .waypoint( function(dir) {
        if ( dir == 'down' )
            $(this)
                .removeClass('fadeInLeft')
                .addClass('fadeOutRight');
        else
            $(this)
                .removeClass('fadeOutRight')
                .addClass('fadeInLeft');
   }, {
       offset: -50
   })
   
   /////////branch animation
   $('.branchAnim')
       .waypoint( function(dir) {
        if ( dir == 'down' )
            $(this)
                .removeClass('flipOutX')
                .addClass('flipInX');
        else
            $(this)
                .removeClass('flipInX')
                .addClass('flipOutX');
   }, {
       offset: '75%'
   })
   .waypoint( function(dir) {
        if ( dir == 'down' )
            $(this)
                .removeClass('flipInX')
                .addClass('flipOutX');
        else
            $(this)
                .removeClass('flipOutX')
                .addClass('flipInX');
   }, {
       offset: -50
   })