$( document ).ready( function() {

   /**
    *
    * flying menu
    * 
    */                

    $( window ).scroll( function( event ) {
    
        scrollPos = $( this ).scrollTop();
        
        if( scrollPos >= ( 1200 ) ) $( '#menu .top' ).fadeIn( 300 );
        else $( '#menu .top' ).fadeOut( 300 ); 
        
    });
    
    $( '#menu .top' ).click( function() {
    
        $( 'html, body' ).animate({ 'scrollTop': 0 }, 300 );
    
    });
    
   /**
    *
    * initialize syntaxHighlighter        
    *
    */
        
    SyntaxHighlighter.all();

   /**
    *
    * jQuery plugin - scroll to page section after
    * click on menu item
    * 
    * @author: Martanian <support@martanian.com>
    * @date: 2013-10-27
    * 
    */       
    
    (function( $ ) {
    
        $.fn.martanianMenu = function() {
    
           /**
            *
            * plugin selector
            * 
            */                               
    
            pluginSelector = $( this ).selector;
            
           /**
            *
            * wait for action
            *         
            */ 
            
            $( pluginSelector +' a' ).click( function() {
    
                hash = $( this ).context.hash;
                if( hash != '' && hash != 'undefined' ) {
    
                    sectionPos = getSectionPosition( hash );
                    $( 'html, body' ).animate( { scrollTop : sectionPos }, 500 );
                }
            
            });
            
           /**
            *
            * get the section position in document
            *
            */
            
            function getSectionPosition( sectionName ) {
                
                sectionName = sectionName.substr( 1 );
                section = $( '[data-section-name="'+ sectionName +'"]' );
                
                return( section.offset().top - 70 );
            }                                                             
                                        
           /**
            *
            * end of line.
            *
            */                                        
        }     
    
    }( jQuery )); 
    
   /**
    *
    * menu actions
    * 
    */
    
    $( 'body' ).martanianMenu();               
   
   /**
    *
    * end.
    * 
    */               

});