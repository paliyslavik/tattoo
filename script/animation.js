$('.box')
       .waypoint( function(dir) {
        if ( dir == 'down' )
            $(this).addClass('fadeInLeft');
   }, {
       offset: '85%'
   })
   
   /////////branch animation
   $('.branchAnim')
       .waypoint( function(dir) {
        if ( dir == 'down' )
            $(this)
                .addClass('flipInX');
   }, {
       offset: '85%'
   })
