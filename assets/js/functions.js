$( document ).ready( function() {

   /**
    *
    * strict mode
    *
    */

    'use strict';

   /**
    *
    * global variables
    *
    */

    var martanianPsychologicalPracticeIntervals = [];
    var martanianPsychologicalPracticeDatepickers = [];
    var martanianPsychologicalPracticeGalleryNeighbors;
    var martanianPsychologicalPracticePageWidth;
    var martanianPsychologicalPracticeDatepickersCount = 0;
    var martanianPsychologicalPracticeDatepickerLanguage = 'en';
    var martanianPsychologicalPracticeResponsiveMenuVisible = false;

   /**
    *
    * functions after window load
    *
    */

    $( window ).load( function() {

       /**
        *
        * configure images backgrounds
        *
        */

        $.martanianPsychologicalPracticeConfigureImagesBackgrounds();

       /**
        *
        * configure images heights
        *
        */

        $.martanianPsychologicalPracticeConfigureImagesHeights();

       /**
        *
        * configure images sliders
        *
        */

        $.martanianPsychologicalPracticeConfigureImagesSlider();

       /**
        *
        * configure gallery
        *
        */

        $.martanianPsychologicalPracticeConfigureGallery();

       /**
        *
        * configure checkbox
        *
        */

        $.martanianPsychologicalPracticeConfigureCheckbox();

       /**
        *
        * configure selects
        *
        */

        $.martanianPsychologicalPracticeConfigureSelects();

       /**
        *
        * configure datepicker
        *
        */

        $.martanianPsychologicalPracticeConfigureDatepicker();

       /**
        *
        * configure tabs
        *
        */

        $.martanianPsychologicalPracticeConfigureTabs();

       /**
        *
        * configure google map
        *
        */

        $.martanianPsychologicalPracticeConfigureGoogleMaps();

       /**
        *
        * configure heading slider
        *
        */

        $.martanianPsychologicalPracticeConfigureHeadingSlider();

       /**
        *
        * configure responsive menu
        *
        */

        $.martanianPsychologicalPracticeConfigureResponsiveMenu();

       /**
        *
        * configure "more / less" button
        *
        */

        $.martanianPsychologicalPracticeConfigureMoreLessButton();

       /**
        *
        * configure overflow elements widths
        *
        */

        $.martanianPsychologicalPracticeConfigureOverflowElementsWidths();

       /**
        *
        * configure timeline
        *
        */

        $.martanianPsychologicalPracticeConfigureTimeline();

       /**
        *
        * page width
        *
        */

        martanianPsychologicalPracticePageWidth = $( 'body' ).width();

       /**
        *
        * delete loader
        *
        */

        $( '#loader' ).animate({ 'opacity': 0 }, 300 );
        setTimeout( function() {

            $( '#loader' ).remove();

        }, 600 );

       /**
        *
        * end of functions.
        *
        */

    });

   /**
    *
    * resize functions
    *
    */

    $.martanianPsychologicalPracticeResizeFunction = function() {

       /**
        *
        * page width
        *
        */

        var newPageWidth = $( 'body' ).width();
        if( newPageWidth != martanianPsychologicalPracticePageWidth ) {

           /**
            *
            * update current page width
            *
            */

            martanianPsychologicalPracticePageWidth = newPageWidth;

           /**
            *
            * configure images heights
            *
            */

            $.martanianPsychologicalPracticeConfigureImagesHeights();

           /**
            *
            * configure timeline
            *
            */

            $.martanianPsychologicalPracticeConfigureTimeline();

           /**
            *
            * configure responsive menu
            *
            */

            $.martanianPsychologicalPracticeConfigureResponsiveMenu();

           /**
            *
            * configure overflow elements widths
            *
            */

            $.martanianPsychologicalPracticeConfigureOverflowElementsWidths();

           /**
            *
            * hide datepicker
            *
            */

            $.martanianPsychologicalPracticeHideDatepicker();

           /**
            *
            * end of functions
            *
            */
        }

       /**
        *
        * change gallery popup sizes when responsiveness changed
        *
        */

        $.martanianPsychologicalPracticeRefreshGallerySizes();

       /**
        *
        * refresh video sizes
        *
        */

        $.martanianPsychologicalPracticeRefreshVideoSizes();

       /**
        *
        * end of functions
        *
        */
    }

   /**
    *
    * catch resize actions
    *
    */

    $( window ).resize( function() { $.martanianPsychologicalPracticeResizeFunction(); });
    $( window ).on( 'orientationchange', function() { $.martanianPsychologicalPracticeResizeFunction(); });

   /**
    *
    * scroll functions
    *
    */

    $( window ).scroll( function() {

       /**
        *
        * update pikaday datepicker position
        *
        */

        $.martanianPsychologicalPracticeUpdateDatepickerPosition();

       /**
        *
        * end of functions.
        *
        */

    });

   /**
    *
    * configure images backgrounds
    *
    */

    $.martanianPsychologicalPracticeConfigureImagesBackgrounds = function() {

        $( '.image-data-for-parent' ).each( function() {

            var image = $( this );
            var imageSrc = image.attr( 'src' );
            var imagePositionY = image.data( 'image-position-y' );
            var imagePositionX = image.data( 'image-position-x' );

            imagePositionY = typeof imagePositionY != 'undefined' && imagePositionY != '' && imagePositionY !== false && imagePositionY !== null ? imagePositionY : '50%';
            imagePositionX = typeof imagePositionX != 'undefined' && imagePositionX != '' && imagePositionX !== false && imagePositionX !== null ? imagePositionX : '50%';

            image.parent().css({ 'background-image': 'url('+ imageSrc +')', 'background-position-y': imagePositionY, 'background-position-x': imagePositionX });
            image.remove();

        });

    };

   /**
    *
    * configure tabs
    *
    */

    $.martanianPsychologicalPracticeConfigureTabs = function() {

        $( 'section.tabs' ).each( function() {

            var section = $( this );
            var tabsSelectors = section.find( 'ul.tabs-selectors' );

            if( tabsSelectors.length == 1 ) {

                var currentTab = tabsSelectors.find( 'li.active' );
                var hash = window.location.hash;

                if( typeof hash != 'undefined' && hash != '' && hash != '#' && hash != false && hash != null ) {

                    hash = hash.substr( 1 );
                    if( hash != '' ) currentTab = tabsSelectors.find( 'li[data-tab-id="'+ hash +'"]' );
                }

                if( currentTab.length == 1 ) {

                    var currentTabID = currentTab.data( 'tab-id' );
                    if( typeof currentTabID != 'undefined' && currentTabID !== false && currentTabID !== null ) {

                        $.martanianPsychologicalPracticeSwitchTab( currentTabID, section );
                    }
                }
            }
        });
    };

   /**
    *
    * tabs
    *
    */

    $( 'body' ).on( 'click touchstart', 'section.tabs ul.tabs-selectors li', function( event ) {

        event.preventDefault();

        var element = $( this );
        if( !element.hasClass( 'active' ) ) {

            var section = element.parents( 'section.tabs' );
            var newTabID = element.data( 'tab-id' );

            window.location.hash = newTabID;
            $.martanianPsychologicalPracticeSwitchTab( newTabID, section );
        }

    });

   /**
    *
    * switch tab function
    *
    */

    $.martanianPsychologicalPracticeSwitchTab = function( tabID, section ) {

        section.find( '.tabs-selectors li' ).removeClass( 'active' );
        section.find( '.tabs-selectors li[data-tab-id="'+ tabID +'"]' ).addClass( 'active' );

        section.find( '.tabs-contents article' ).css({ 'display': 'none' });
        section.find( '.tabs-contents article[data-tab-id="'+ tabID +'"]' ).css({ 'display': 'block' });

    };

   /**
    *
    * automatically images slider
    *
    */

    $.martanianPsychologicalPracticeConfigureImagesSlider = function() {

        var sliderID = 1;
        $( '.images' ).each( function() {

            var slider = $( this );
            if( slider.children( '.image' ).length > 1 ) {

                slider.attr( 'data-images-slider-id', sliderID );

                var imageID = 1;
                slider.children( '.image' ).each( function() {

                    $( this ).attr( 'data-image-id', imageID );
                    if( imageID != 1 ) $( this ).css({ 'display': 'none' });

                    imageID++;

                });

                var navigation = '';
                for( var i = 1; i < imageID; i++ ) {

                    navigation += '<li data-images-slider-image-id="'+ i +'" '+ ( i == 1 ? 'class="active"' : '' ) +'><span class="circle"></span></li>';
                }

                slider.append( '<ul class="navigation">'+ navigation +'</ul>' );

                var intervalTime = slider.data( 'interval' );
                if( typeof intervalTime == 'undefined' || intervalTime === null || intervalTime === false ) intervalTime = 6000;

                if( intervalTime !== 0 ) {

                    martanianPsychologicalPracticeIntervals['images-slider-'+ sliderID] = setInterval( function() {

                        $.martanianPsychologicalPracticeSwitchImagesImage( slider, slider.children( '.image' ).length, 'next' );

                    }, parseInt( intervalTime, 10 ) );
                }

                sliderID++;
            }

        });

    };

   /**
    *
    * switch images slider image
    *
    */

    $.martanianPsychologicalPracticeSwitchImagesImage = function( slider, imagesCount, imageID ) {

        var currentImageID = slider.children( '.navigation' ).children( 'li.active' ).data( 'images-slider-image-id' );

        if( imagesCount == 'find' ) imagesCount = slider.children( '.navigation' ).children( 'li' ).length;
        if( imageID == 'next' ) imageID = currentImageID + 1 > imagesCount ? 1 : currentImageID + 1;

        slider.find( '.image[data-image-id="'+ currentImageID +'"]' ).fadeOut( 300 );
        slider.find( '.image[data-image-id="'+ imageID +'"]' ).fadeIn( 300 );

        slider.children( '.navigation' ).children( 'li[data-images-slider-image-id="'+ currentImageID +'"]' ).removeClass( 'active' );
        slider.children( '.navigation' ).children( 'li[data-images-slider-image-id="'+ imageID +'"]' ).addClass( 'active' );

    };

   /**
    *
    * action after click on images slider navigation
    *
    */

    $( 'body' ).on( 'click touchstart', '.images .navigation li', function( event ) {

        event.preventDefault();

        var element = $( this );
        var slider = element.parent().parent();
        var navigation = element.parent();
        var intervalTime = slider.data( 'interval' );
        var sliderID = slider.data( 'images-slider-id' );
        var imageID = element.data( 'images-slider-image-id' );
        var sliderImagesCount = slider.find( '.navigation' ).children( 'li' ).length;

        if( typeof intervalTime == 'undefined' || intervalTime === null || intervalTime === false ) intervalTime = 6000;
        if( !navigation.hasClass( 'proceed' ) && !element.hasClass( 'active' ) && ( sliderImagesCount > 1 ) ) {

            navigation.addClass( 'proceed' );

            clearInterval( martanianPsychologicalPracticeIntervals['images-slider-'+ sliderID] );
            $.martanianPsychologicalPracticeSwitchImagesImage( slider, 'find', imageID );

            setTimeout( function() {

                if( intervalTime !== 0 ) {

                    martanianPsychologicalPracticeIntervals['images-slider-'+ sliderID] = setInterval( function() {

                        $.martanianPsychologicalPracticeSwitchImagesImage( slider, 'find', 'next' );

                    }, parseInt( intervalTime, 10 ) );
                }

                navigation.removeClass( 'proceed' );

            }, 300 );
        }

    });

   /**
    *
    * configure images heights
    *
    */

    $.martanianPsychologicalPracticeConfigureImagesHeights = function() {

        $( '.images' ).each( function() {

            var element = $( this );
            var relative;
            var contentSize = parseInt( $( 'footer .center' ).css( 'width' ), 10 );
            var additionalSpace = contentSize < 940 ? 60 : 90;

            if( element.parents( 'section.double-content' ).length === 1 ) {

                if( element.parents( 'div.left' ).length === 1 ) relative = element.parents( 'div.left' ).siblings( 'div.right' );
                else relative = element.parents( 'div.right' ).siblings( 'div.left' );

                var newHeight = relative.height() + additionalSpace;
                $.martanianPsychologicalPracticeUpdateElementHeight( element, newHeight, false );
            }

        });

    };

   /**
    *
    * update element height
    *
    */

    $.martanianPsychologicalPracticeUpdateElementHeight = function( element, height, animated ) {

        if( animated == false ) element.css({ 'height': height });
        else {

            element.animate({ 'height': height }, 200 );
        }

    };

   /**
    *
    * configure timeline
    *
    */

    $.martanianPsychologicalPracticeConfigureTimeline = function() {

        $( '.timeline' ).each( function() {

            var element = $( this );
            var left = element.children( '.timeline-left' );
            var right = element.children( '.timeline-right' );
            var lineHeight = 0;
            var timelineElementID = 1;
            var activeTimelineElementID = 0;

            left.children( '.timeline-element' ).each( function() {

                if( !$( this ).hasClass( 'timeline-element-last' ) ) lineHeight += $( this ).height() + 60;
                $( this ).data( 'timeline-element-id', timelineElementID ).attr( 'data-timeline-element-id', timelineElementID );

                if( $( this ).children( '.circle' ).hasClass( 'circle-active' ) ) activeTimelineElementID = timelineElementID;
                timelineElementID++;

            });

            if( activeTimelineElementID == 0 ) {

                activeTimelineElementID = timelineElementID - 1;
                left.children( '.timeline-element[data-timeline-element-id="'+ activeTimelineElementID +'"]' ).children( '.circle' ).addClass( 'circle-active' );
            }

            left.children( '.timeline-line' ).css({ 'height': ( lineHeight + 12 ) });

            timelineElementID = 1;
            right.children( '.timeline-element-content' ).each( function() {

                var timelineElement = $( this );
                timelineElement.data( 'timeline-element-id', timelineElementID ).attr( 'data-timeline-element-id', timelineElementID );

                if( timelineElementID != activeTimelineElementID ) timelineElement.css({ 'display': 'none' });
                else {

                    timelineElement.css({ 'position': 'static' });
                    right.css({ 'height': '' });
                }

                timelineElementID++;

            });

        });

    };

   /**
    *
    * change timeline element
    *
    */

    $( 'body' ).on( 'click touchstart', '.timeline .timeline-element', function() {

        if( !$( this ).children( '.circle' ).hasClass( 'circle-active' ) ) {

            var element = $( this );
            var timeline = element.parents( '.timeline' );
            var newElementID = element.data( 'timeline-element-id' );
            var currentElementID = 0;

            element.siblings( '.timeline-element' ).each( function() {

                if( $( this ).children( '.circle' ).hasClass( 'circle-active' ) ) {

                    currentElementID = $( this ).data( 'timeline-element-id' );
                    $( this ).children( '.circle' ).removeClass( 'circle-active' );
                }

            });

            element.children( '.circle' ).addClass( 'circle-active' );

            var timelineContentParent = timeline.find( '.timeline-right' );
            var currentTimelineContentElement = timeline.find( '.timeline-element-content[data-timeline-element-id="'+ currentElementID +'"]' );
            var newTimelineContentElement = timeline.find( '.timeline-element-content[data-timeline-element-id="'+ newElementID +'"]' );

            timelineContentParent.animate({ 'height': newTimelineContentElement.height() }, 300 );
            currentTimelineContentElement.fadeOut( 300 );
            newTimelineContentElement.fadeIn( 300 );
        }

    });

   /**
    *
    * configure gallery
    *
    */

    $.martanianPsychologicalPracticeConfigureGallery = function() {

        $( '.gallery' ).each( function() {

            var gallery = $( this );
            gallery.find( '.gallery-element' ).each( function() {

                $( this ).append( '<span class="gallery-element-overlay"><span class="gallery-element-overlay-icon"><i class="fa fa-search"></i></span></span>' );
            });

        });

    };

   /**
    *
    * touch handlers
    *
    */

    $( 'body' ).on( 'touchstart', '.gallery-element, header .top .element.element-languages span.container', function( event ) {

        event.preventDefault();
        $( this ).trigger( 'mouseenter' );

    });

    $( 'body' ).on( 'touchstart', 'header li.with-submenu > a', function( event ) {

        if( !$( this ).hasClass( 'sub-menu-visible' ) ) {

            event.preventDefault();
            $( this ).trigger( 'mouseenter' ).addClass( 'sub-menu-visible' );
        }

    });

   /**
    *
    * open single image
    *
    */

    $( 'body' ).on( 'click touchstart', '.gallery .gallery-element .gallery-element-overlay', function( event ) {

        event.preventDefault();
        if( !$( this ).hasClass( 'image-for-video' ) ) {

            var image = $( this ).parent();
            var imageURL = image.css( 'background-image' );
            var resize = image.data( 'image-resize' );

            if( typeof imageURL == 'undefined' || imageURL == '' || imageURL == 'none' ) return;
            $.martanianPsychologicalPracticeShowGalleryImage( imageURL, resize, image );
        }

    });

   /**
    *
    * show gallery image
    *
    */

    $.martanianPsychologicalPracticeShowGalleryImage = function( imageURL, resize, element ) {

        $( 'body' ).append( '<div class="image-helper"><img src="'+ $.martanianPsychologicalPracticeGetImageURL( imageURL ) +'" /></div>' );
        $( '.image-helper img' ).load( function() {

            var contentMargin = $( 'footer .center' ).css( 'margin' );
            var contentSize = parseInt( $( 'footer .center' ).css( 'width' ), 10 );
            var sizes = { 'width': $( this ).width(), 'height': $( this ).height() };

            var maxHeight = $( window ).height() - ( ( contentMargin == '0px 30px' || $( 'footer .center' ).offset().left == 30 ) && contentSize < 940 ? 200 : 150 );
            var maxWidth = $( window ).width() - ( ( contentMargin == '0px 30px' || $( 'footer .center' ).offset().left == 30 ) && contentSize < 940 ? 25 : 200 );

            $( '.image-helper' ).remove();

            if( $( '#image-popup' ).length == 0 ) $( '.wrapper' ).append( '<div id="image-popup"><div class="image-popup-background"></div><div class="image-popup-content"><div class="image-popup-content-close"><span>&times;</span></div></div></div>' );
            $( '#image-popup .image-popup-content' ).css({ 'background-image': 'url("'+ $.martanianPsychologicalPracticeGetImageURL( imageURL ) +'")' }).data( 'original-image-width', sizes.width ).attr( 'data-original-image-width', sizes.width ).data( 'original-image-height', sizes.height ).attr( 'data-original-image-height', sizes.height );

            martanianPsychologicalPracticeGalleryNeighbors = $.martanianPsychologicalPracticeGetNeighbors( element );
            if( martanianPsychologicalPracticeGalleryNeighbors.prev != false && martanianPsychologicalPracticeGalleryNeighbors.next != false && $( '#image-popup .image-popup-content .image-prev' ).length == 0 && $( '#image-popup .image-popup-content .image-next' ).length == 0 ) {

                $( '#image-popup .image-popup-content' ).append( '<div class="image-prev"><i class="fa fa-chevron-left"></i></div><div class="image-next"><i class="fa fa-chevron-right"></i></div>' );
            }

            var newWidth = sizes.width;
            var newHeight = sizes.height;

            if( resize == 'yes' || newHeight > maxHeight || newWidth > maxWidth ) {

                var scale = newWidth / newHeight;

                newWidth = maxWidth;
                newHeight = ( newWidth / scale );

                if( newHeight > maxHeight ) {

                    newHeight = maxHeight;
                    newWidth = newHeight * scale;
                }
            }

            $( '#image-popup .image-popup-content' ).css({ 'width': newWidth +'px', 'height': newHeight +'px', 'margin-left': - ( newWidth / 2 ) +'px', 'margin-top': - ( newHeight / 2 ) +'px' });
            $( '#image-popup' ).css({ 'display': 'block' }).data( 'resize', resize ).attr( 'data-resize', resize );

        });

    };

   /**
    *
    * getting image url
    *
    */

    $.martanianPsychologicalPracticeGetImageURL = function( imageURL ) {

        var url = imageURL.split( 'url(' );
            url = url[1].split( ')' );
            url = url[0];

        if( url.indexOf( '"' ) >= false ) {

            url = url.split( '"' );
            url = url[1];
        }

        return( url );

    };

   /**
    *
    * getting image neighbors
    *
    */

    $.martanianPsychologicalPracticeGetNeighbors = function( image ) {

        var prev = image.prev( '.gallery-element' );
        var next = image.next( '.gallery-element' );

        if( prev.length == 0 ) prev = image.siblings( '.gallery-element' ).last();
        if( next.length == 0 ) next = image.siblings( '.gallery-element' ).first();

        return( { 'prev': ( prev.length == 0 ? false : prev ), 'next': ( next.length == 0 ? false : next ), 'current': image } );

    };

   /**
    *
    * next / prev gallery images
    *
    */

    $( 'body' ).on( 'click touchstart', '#image-popup .image-prev, #image-popup .image-next', function( event ) {

        event.preventDefault();

        var image = $( this ).hasClass( 'image-prev' ) ? martanianPsychologicalPracticeGalleryNeighbors.prev : martanianPsychologicalPracticeGalleryNeighbors.next;
        var imageURL = image.css( 'background-image' );
        var resize = image.data( 'image-resize' );

        if( typeof imageURL == 'undefined' || imageURL == '' || imageURL == 'none' ) return;
        $.martanianPsychologicalPracticeShowGalleryImage( imageURL, resize, image );

    });

   /**
    *
    * close image
    *
    */

    $( 'body' ).on( 'click touchstart', '#image-popup .image-popup-background, #image-popup .image-popup-content-close', function( event ) {

        event.preventDefault();
        $( '#image-popup' ).remove();

    });

   /**
    *
    * change gallery popup sizes when responsiveness changed
    *
    */

    $.martanianPsychologicalPracticeRefreshGallerySizes = function() {

        if( $( '#image-popup' ).length != 0 ) {

            var contentMargin = $( 'footer .center' ).css( 'margin' );
            var contentSize = parseInt( $( 'footer .center' ).css( 'width' ), 10 );
            var maxHeight = $( window ).height() - ( ( contentMargin == '0px 30px' || $( 'footer .center' ).offset().left == 30 ) && contentSize < 940 ? 200 : 150 );
            var maxWidth = $( window ).width() - ( ( contentMargin == '0px 30px' || $( 'footer .center' ).offset().left == 30 ) && contentSize < 940 ? 25 : 200 );
            var height = $( '#image-popup .image-popup-content' ).data( 'original-image-height' );
            var width = $( '#image-popup .image-popup-content' ).data( 'original-image-width' );
            var resize = $( '#image-popup' ).data( 'resize' );

            if( resize == 'yes' || height > maxHeight || width > maxWidth ) {

                var scale = width / height;

                width = maxWidth;
                height = ( width / scale );

                if( height > maxHeight ) {

                    height = maxHeight;
                    width = height * scale;
                }
            }

            $( '#image-popup .image-popup-content' ).css({ 'width': width +'px', 'height': height +'px', 'margin-left': - ( width / 2 ) +'px', 'margin-top': - ( height / 2 ) +'px' });
        }

    };

   /**
    *
    * play video from image
    *
    */

    $( 'body' ).on( 'click touchstart', '.image-for-video', function( event ) {

        event.preventDefault();

        var videoURL = $( this ).data( 'video-url' );
        if( typeof videoURL == 'undefined' || videoURL == '' ) return;

        var videoID = videoURL.split( '?v=' );
        if( typeof videoID[1] == 'undefined' || videoID[1] == '' ) return;

        $( '.wrapper' ).append( '<div id="video-popup"><div class="video-popup-background"></div><div class="video-popup-content"><div class="video-popup-content-close"><span>&times;</span></div><iframe src="https://www.youtube.com/embed/'+ videoID[1] +'?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe></div></div>' );

        var videoScale = $( this ).data( 'video-scale' );
        if( typeof videoScale != 'undefined' && videoScale == 'yes' ) {

            var videoWidth = $( this ).data( 'video-width' );
            var videoHeight = $( this ).data( 'video-height' );

            if( typeof videoWidth != 'undefined' && videoWidth != '' && typeof videoHeight != 'undefined' && videoHeight != '' ) {

                var contentMargin = $( 'footer .center' ).css( 'margin' );
                var contentSize = parseInt( $( 'footer .center' ).css( 'width' ), 10 );
                var scale = videoWidth / videoHeight;
                var maxHeight = $( window ).height() - ( ( contentMargin == '0px 30px' || $( 'footer .center' ).offset().left == 30 ) && contentSize < 940 ? 25 : 150 );
                var maxWidth = $( window ).width() - ( ( contentMargin == '0px 30px' || $( 'footer .center' ).offset().left == 30 ) && contentSize < 940 ? 25 : 150 );
                var newWidth = maxWidth;
                var newHeight = ( newWidth / scale );

                if( newHeight > maxHeight ) {

                    newHeight = maxHeight;
                    newWidth = newHeight * scale;
                }

                $( '#video-popup .video-popup-content' ).css({ 'width': newWidth +'px', 'height': newHeight +'px', 'margin-left': '-'+ ( newWidth / 2 ) +'px', 'margin-top': '-'+ ( newHeight / 2 ) +'px' });
            }
        }

        $( '#video-popup' ).css({ 'display': 'block' });

    });

   /**
    *
    * close video
    *
    */

    $( 'body' ).on( 'click touchstart', '#video-popup .video-popup-background, #video-popup .video-popup-content-close', function( event ) {

        event.preventDefault();
        $( '#video-popup' ).remove();

    });

   /**
    *
    * refresh video sizes
    *
    */

    $.martanianPsychologicalPracticeRefreshVideoSizes = function() {

        var videoWidth = $( '#video-popup .video-popup-content' ).width();
        var videoHeight = $( '#video-popup .video-popup-content' ).height();

        var contentMargin = $( 'footer .center' ).css( 'margin' );
        var contentSize = parseInt( $( 'footer .center' ).css( 'width' ), 10 );
        var scale = videoWidth / videoHeight;
        var maxHeight = $( window ).height() - ( ( contentMargin == '0px 30px' || $( 'footer .center' ).offset().left == 30 ) && contentSize < 940 ? 25 : 150 );
        var maxWidth = $( window ).width() - ( ( contentMargin == '0px 30px' || $( 'footer .center' ).offset().left == 30 ) && contentSize < 940 ? 25 : 150 );
        var newWidth = maxWidth;
        var newHeight = ( newWidth / scale );

        if( newHeight > maxHeight ) {

            newHeight = maxHeight;
            newWidth = newHeight * scale;
        }

        $( '#video-popup .video-popup-content' ).css({ 'width': newWidth +'px', 'height': newHeight +'px', 'margin-left': '-'+ ( newWidth / 2 ) +'px', 'margin-top': '-'+ ( newHeight / 2 ) +'px' });

    };

   /**
    *
    * actions after keyup
    *
    */

    $( document ).keydown( function( event ) {

        var galleryActive = $( '#image-popup' ).length == 1 ? true : false;
        var videoActive = $( '#video-popup' ).length == 1 ? true : false;

        switch( event.keyCode ) {

            case 27:

                if( galleryActive == true ) $( '#image-popup' ).remove();
                if( videoActive == true ) $( '#video-popup' ).remove();

            break;

            case 37:

                if( galleryActive == true ) {

                    var image = martanianPsychologicalPracticeGalleryNeighbors.prev;
                    var imageURL = image.css( 'background-image' );
                    var resize = image.data( 'image-resize' );

                    if( typeof imageURL == 'undefined' || imageURL == '' || imageURL == 'none' ) return;
                    $.martanianPsychologicalPracticeShowGalleryImage( imageURL, resize, image );
                }

            break;

            case 39:

                if( galleryActive == true ) {

                    var image = martanianPsychologicalPracticeGalleryNeighbors.next;
                    var imageURL = image.css( 'background-image' );
                    var resize = image.data( 'image-resize' );

                    if( typeof imageURL == 'undefined' || imageURL == '' || imageURL == 'none' ) return;
                    $.martanianPsychologicalPracticeShowGalleryImage( imageURL, resize, image );
                }

            break;
        }

    });

   /**
    *
    * google map
    *
    */

    $.martanianPsychologicalPracticeConfigureGoogleMaps = function() {

        var mapID = 1;
        $( '.google-map' ).each( function() {

            $( this ).attr( 'id', 'google-map-'+ mapID );

            var lat = $( this ).data( 'lat' );
            var lng = $( this ).data( 'lng' );
            var zoom = $( this ).data( 'zoom-level' );

            var map = new google.maps.Map( document.getElementById( 'google-map-'+ mapID ), { zoom: zoom, center: new google.maps.LatLng( lat, lng ), mapTypeId: google.maps.MapTypeId.ROADMAP, scrollwheel: false } );
            var marker = new google.maps.Marker({ position: new google.maps.LatLng( lat, lng ), map: map, });

            google.maps.event.addDomListener( window, 'resize', function() {

                var mapCenter = map.getCenter();

                google.maps.event.trigger( map, 'resize' );
                map.setCenter( mapCenter );

            });

            mapID++;

        });

    };

   /**
    *
    * configure checkbox
    *
    */

    $.martanianPsychologicalPracticeConfigureCheckbox = function() {

        $( '.checkbox-box' ).each( function() {

            var checkbox = $( this );
            var checked = checkbox.attr( 'data-checked' ) == 'yes' ? true : false;

            if( checked == true ) checkbox.children( '.checkbox' ).html( '<i class="fa fa-check"></i>' );
            else checkbox.children( '.checkbox' ).html( '' );

        });

    };

   /**
    *
    * checkbox field change
    *
    */

    $( 'body' ).on( 'click touchstart', '.checkbox-box', function( event ) {

        var target = $( event.target );
        if( target.is( 'a' ) === false ) {

            var checkbox = $( this );
            var checked = checkbox.attr( 'data-checked' ) == 'yes' ? true : false;

            if( checked == true ) {

                checkbox.attr( 'data-checked', 'no' ).data( 'checked', 'no' );
                checkbox.children( '.checkbox' ).html( '' );
            }

            else {

                checkbox.attr( 'data-checked', 'yes' ).data( 'checked', 'yes' );
                checkbox.children( '.checkbox' ).html( '<i class="fa fa-check"></i>' );
            }
        }

    });

   /**
    *
    * configure selects
    *
    */

    $.martanianPsychologicalPracticeConfigureSelects = function() {

        $( 'select' ).each( function() {

            var classes = $( this ).attr( 'class' );
            if( typeof classes == 'undefined' || classes == false || classes == null ) classes = '';

            $( this ).wrap( '<span class="select '+ classes +'"></span>' );

        });

    };

   /**
    *
    * is form field required?
    *
    */

    $.martanianPsychologicalPracticeIsFieldRequired = function( field ) {

        var required = field.data( 'required' );
        return( typeof required == 'undefined' || required == false || required == null || required == 'yes' ? true : false );

    };

   /**
    *
    * send form
    *
    */

    $( 'body' ).on( 'click touchstart', '.form-send', function( event ) {

        event.preventDefault();

        var form = $( this ).parents( 'form.form' );
        var fields = [];
        var isError = false;
        var formOptions = {
            'client-name-field': form.data( 'client-name-field' ),
            'client-email-field': form.data( 'client-email-field' ),
            'title': form.data( 'title' )
        };

        form.find( '.form-field' ).each( function() {

            var field = $.martanianPsychologicalPracticeIsFormFieldValid( $( this ) );
            if( field != 'select' ) {

                if( field !== false ) fields[fields.length] = field;
                else isError = true;
            }

        });

        if( isError == false ) {

            var thanksLay = form.children( '.thanks-lay' );
            thanksLay.fadeIn( 300 );

            $.ajax({ url: 'assets/_php/submit.php',
                     data: { 'fields': fields, 'options': formOptions },
                     type: 'post',
                     success: function( output ) {

                         var layClass = output == 'OK' ? '.thanks-lay-content-sent' : '.thanks-lay-content-not-sent';

                         thanksLay.find( '.thanks-lay-content-sending' ).css({ 'display': 'none' });
                         thanksLay.find( layClass ).fadeIn( 300 );

                     }});


            $("#my-form").submit(function(e) {
              e.preventDefault();

              var $form = $(this);
              $.post($form.attr("action"), $form.serialize()).then(function() {
                alert("Thank you!");
              });
            });

        }

    });

   /**
    *
    * is form field valid
    *
    */

    $.martanianPsychologicalPracticeIsFormFieldValid = function( field ) {

        if( field.hasClass( 'select' ) ) return( 'select' );
        else {

            var fieldName = field.attr( 'name' );
            var fieldValue = field.val();
            var fieldRequired = $.martanianPsychologicalPracticeIsFieldRequired( field );

            if( typeof fieldName == 'undefined' ) fieldName = field.data( 'field-name' );
            if( ( typeof fieldValue == 'undefined' || fieldValue == null || fieldValue == false || fieldValue == '' ) && !field.is( 'input[type="text"], textarea' ) ) {

                if( field.hasClass( 'value-slider-text' ) ) fieldValue = field.text();
                else if( field.hasClass( 'checkbox-box' ) ) {

                    var checked = field.data( 'checked' );
                    fieldValue = fieldRequired == false || ( fieldRequired == true && checked == 'yes' ) ? field.data( 'value-if-checked' ) : '';
                }
            }

            if( ( fieldRequired == true && fieldValue != '' ) || fieldRequired == false ) {

                if( field.is( 'select' ) ) field.parent().removeClass( 'error' );
                else field.removeClass( 'error' );
            }

            else {

                if( field.is( 'select' ) ) field.parent().addClass( 'error' );
                else field.addClass( 'error' );

                return false;
            }

            return( { 'name': fieldName, 'value': fieldValue } );
        }
    };

   /**
    *
    * close thanks-lay notice
    *
    */

    $( 'body' ).on( 'click touchstart', '.thanks-lay-close', function( event ) {

        event.preventDefault();

        var thanksLay = $( this ).parents( '.thanks-lay' );
        thanksLay.fadeOut( 300 );

        setTimeout( function() {

            thanksLay.find( '.thanks-lay-content-sent' ).css({ 'display': 'none' });
            thanksLay.find( '.thanks-lay-content-not-sent' ).css({ 'display': 'none' });

        }, 300 );

    });

   /**
    *
    * show schedule popup
    *
    */

    $( 'body' ).on( 'click', 'button[data-action="show-schedule-popup"]', function() {

        var popup = $( '#schedule-popup' );
        var contentSize = parseInt( $( 'footer .center' ).css( 'width' ), 10 );

        popup.find( '.schedule-popup-background' ).fadeIn( 300 );
        setTimeout( function() {

            popup.find( '.schedule-popup-content' ).addClass( 'animated bounceInDown' ).css({ 'display': 'block' });
            if( contentSize <= 940 ) {

                $( 'html, body' ).animate({ 'scrollTop': '0' }, 300 );
            }

            setTimeout( function() {

                popup.find( '.schedule-popup-content' ).removeClass( 'animated bounceInDown' );

            }, 800 );

        }, 100 );

    });

   /**
    *
    * close schedule popup
    *
    */

    $( 'body' ).on( 'click touchstart', '#schedule-popup .schedule-popup-content .close-icon', function() {

        var popup = $( '#schedule-popup' );

        popup.find( '.schedule-popup-content' ).addClass( 'animated bounceOutUp' );
        setTimeout( function() {

            popup.find( '.schedule-popup-background' ).fadeOut( 300 );
            setTimeout( function() {

                popup.find( '.schedule-popup-content' ).removeClass( 'animated bounceOutUp' ).css({ 'display': 'none' });

            }, 600 );

        }, 500 );

    });

   /**
    *
    * datepicker pikaday
    *
    */

    $.martanianPsychologicalPracticeConfigureDatepicker = function() {

        var datepickerID = 1;
        moment.locale( martanianPsychologicalPracticeDatepickerLanguage );

        $( 'form.form' ).each( function() {

            var form = $( this );
            form.find( 'input[type="text"].is-datepicker' ).each( function() {

                var field = $( this );
                field.attr( 'id', 'pikaday-'+ datepickerID );

                martanianPsychologicalPracticeDatepickers['pikaday-'+ datepickerID] = new Pikaday({
                    field: document.getElementById( 'pikaday-'+ datepickerID ),
                    format: 'dddd, LL',
                    firstDay: 1
                });

                datepickerID++;

            });

        });

        martanianPsychologicalPracticeDatepickersCount = datepickerID - 1;

    };

   /**
    *
    * hide datepicker when resizing
    *
    */

    $.martanianPsychologicalPracticeHideDatepicker = function() {

        var pikadayDatepicker = $( '.pika-single' );
        if( pikadayDatepicker.length !== 0 ) pikadayDatepicker.addClass( 'is-hidden' );

    };

   /**
    *
    * update datepicker position
    *
    */

    $.martanianPsychologicalPracticeUpdateDatepickerPosition = function() {

        if( martanianPsychologicalPracticeDatepickersCount == 0 ) return;
        for( var i = 0; i < martanianPsychologicalPracticeDatepickersCount; i++ ) {

            martanianPsychologicalPracticeDatepickers['pikaday-'+ ( i + 1 )].adjustPosition();
        }

    };

   /**
    *
    * configure heading slider
    *
    */

    $.martanianPsychologicalPracticeConfigureHeadingSlider = function() {

        var sliderID = 1;
        $( 'section.heading-slider' ).each( function() {

            var slider = $( this );
            var slideID = 1;

            slider.data( 'slider-id', sliderID ).attr( 'data-slider-id', sliderID );
            slider.children( '.heading-slider-slide' ).each( function() {

                var slide = $( this );
                slide.data( 'slide-id', slideID ).attr( 'data-slide-id', slideID );

                if( slideID !== 1 ) slide.css({ 'display': 'none' });
                else slide.addClass( 'active' );

                slideID++;

            });

            if( ( slideID - 1 ) > 1 ) {

                slider.append( '<div class="heading-slider-navigation heading-slider-navigation-prev"><i class="fa fa-long-arrow-left"></i></div>' );
                slider.append( '<div class="heading-slider-navigation heading-slider-navigation-next"><i class="fa fa-long-arrow-right"></i></div>' );
            }

            var intervalTime = slider.data( 'interval' );
            if( typeof intervalTime == 'undefined' || intervalTime === null || intervalTime === false ) intervalTime = 6000;

            if( ( slideID - 1 ) > 1 && intervalTime !== 0 ) {

                martanianPsychologicalPracticeIntervals['heading-slider-'+ sliderID] = setInterval( function() {

                    $.martanianPsychologicalPracticeSwitchHeadingSliderSlide( slider, ( slideID - 1 ), 'next' );

                }, parseInt( intervalTime, 10 ) );
            }

            sliderID++;

        });

    };

   /**
    *
    * switch heading slider slide
    *
    */

    $.martanianPsychologicalPracticeSwitchHeadingSliderSlide = function( slider, slidesCount, slideID ) {

        slider.addClass( 'proceed' );

        var currentSlideID = slider.children( '.heading-slider-slide.active' ).data( 'slide-id' );
        if( slidesCount == 'find' ) slidesCount = slider.children( '.heading-slider-slide' ).length;

        if( slideID == 'next' ) slideID = currentSlideID + 1 > slidesCount ? 1 : currentSlideID + 1;
        else if( slideID == 'prev' ) slideID = currentSlideID - 1 == 0 ? slidesCount : currentSlideID - 1;

        slider.find( '.heading-slider-slide[data-slide-id="'+ slideID +'"]' ).css({ 'z-index': '1', 'display': 'block' }).addClass( 'active' );
        slider.find( '.heading-slider-slide[data-slide-id="'+ currentSlideID +'"]' ).css({ 'z-index': '20000' }).removeClass( 'active' );

        setTimeout( function() {

            slider.find( '.heading-slider-slide[data-slide-id="'+ currentSlideID +'"]' ).find( 'h1, h2.heading-slider-title, p' ).addClass( 'animated animated-semi-speed fadeOutLeftSmall' );
            setTimeout( function() {

                slider.find( '.heading-slider-slide[data-slide-id="'+ currentSlideID +'"]' ).fadeOut( 300 );
                slider.find( '.heading-slider-slide[data-slide-id="'+ slideID +'"]' ).find( 'h1, h2.heading-slider-title, p' ).addClass( 'animated animated-semi-speed fadeInLeftSmall' );

                setTimeout( function() {

                    slider.find( '.heading-slider-slide' ).css({ 'z-index': '' });
                    slider.find( '.heading-slider-slide' ).find( 'h1, h2.heading-slider-title, p' ).removeClass( 'animated animated-semi-speed fadeInLeftSmall fadeOutLeftSmall' );

                    slider.removeClass( 'proceed' );

                }, 800 );

            }, 600 );

        }, 100 );

    };

   /**
    *
    * action after click on heading slider navigation
    *
    */

    $( 'body' ).on( 'click touchstart', 'section.heading-slider .heading-slider-navigation', function( event ) {

        event.preventDefault();

        var element = $( this );
        var action = element.hasClass( 'heading-slider-navigation-prev' ) ? 'prev' : 'next';
        var slider = element.parent();
        var intervalTime = slider.data( 'interval' );
        var sliderID = slider.data( 'slider-id' );

        if( typeof intervalTime == 'undefined' || intervalTime === null || intervalTime === false ) intervalTime = 6000;
        if( !slider.hasClass( 'proceed' ) ) {

            clearInterval( martanianPsychologicalPracticeIntervals['heading-slider-'+ sliderID] );
            $.martanianPsychologicalPracticeSwitchHeadingSliderSlide( slider, 'find', action );

            setTimeout( function() {

                if( intervalTime !== 0 ) {

                    martanianPsychologicalPracticeIntervals['heading-slider-'+ sliderID] = setInterval( function() {

                        $.martanianPsychologicalPracticeSwitchHeadingSliderSlide( slider, 'find', 'next' );

                    }, parseInt( intervalTime, 10 ) );
                }

            }, 300 );
        }

    });

   /**
    *
    * configure more / less button
    *
    */

    $.martanianPsychologicalPracticeConfigureMoreLessButton = function() {

        $( 'div.references' ).each( function() {

            var parent = $( this );
            var button = parent.find( 'div.more-less-button' );

            if( button.length === 1 ) {

                button.css({ 'margin-left': '-'+ ( button.width() / 2 ) +'px', 'left': '50%' });
            }

        });

    };

   /**
    *
    * change menu visibility flag
    *
    */

    $.martanianPsychologicalPracticeChangeResponsiveMenuVisibilityFlag = function( visibility ) {

        martanianPsychologicalPracticeResponsiveMenuVisible = visibility;

    };

   /**
    *
    * configure responsive menu
    *
    */

    $.martanianPsychologicalPracticeConfigureResponsiveMenu = function() {

        var contentMargin = $( 'footer .center' ).css( 'margin' );
        var contentSize = parseInt( $( 'footer .center' ).css( 'width' ), 10 );
        var responsiveMenuWidth = ( contentMargin == '0px 30px' || $( 'footer .center' ).offset().left == 30 ) && contentSize < 940 ? 250 : 300;
        var headerBar = $( 'header' );
        var headerMenu = headerBar.find( 'ul.menu' );
        var headerTopBar = headerBar.children( '.top' ).find( '.top-elements-wrapper' );

        martanianPsychologicalPracticeResponsiveMenuVisible = false;

        headerBar.css({ 'left': '0' });
        $( '.wrapper' ).css({ 'margin-left': '', 'width': '' }).removeClass( 'wrapper-shadow' );
        $( '.responsive-menu-content' ).css({ 'display': 'none', 'right': '-'+ responsiveMenuWidth +'px' });

        if( contentSize >= 940 ) $( '.responsive-menu-content' ).remove();
        else {

            if( $( '.responsive-menu-content' ).length == 0 ) {

                $( 'body' ).append( '<div class="responsive-menu-content"></div>' );
                $( '.responsive-menu-content' ).append( '<ul class="menu">'+ headerMenu.html() +'</ul>'+ headerTopBar.html() );
                $( '.responsive-menu-content' ).find( '.sub-menu' ).removeClass( 'animated animated-speed fadeInDown' );
            }
        }
    };

   /**
    *
    * show responsive menu
    *
    */

    $( 'body' ).on( 'click touchstart', '.responsive-menu-button', function( event ) {

        event.preventDefault();

        var contentMargin = $( 'footer .center' ).css( 'margin' );
        var contentSize = parseInt( $( 'footer .center' ).css( 'width' ), 10 );
        var responsiveMenuWidth = ( contentMargin == '0px 30px' || $( 'footer .center' ).offset().left == 30 ) && contentSize < 940 ? 250 : 300;

        if( martanianPsychologicalPracticeResponsiveMenuVisible == false ) {

            var wrapper = $( '.wrapper' );
            var wrapperWidth = wrapper.width();
            var headerBar = $( this ).parents( 'header' );

            headerBar.animate({ 'left': '-'+ responsiveMenuWidth +'px' }, 300 );
            wrapper.animate({ 'margin-left': '-'+ responsiveMenuWidth +'px', 'width': wrapperWidth }, 300 ).addClass( 'wrapper-shadow' );

            $( '.responsive-menu-content' ).css({ 'display': 'block' }).animate({ 'right': '0' }, 300 );
            martanianPsychologicalPracticeResponsiveMenuVisible = true;
        }

        else {

            var wrapper = $( '.wrapper' );
            var wrapperWidth = wrapper.width();
            var headerBar = $( this ).parents( 'header' );

            headerBar.animate({ 'left': '0' }, 300 );
            wrapper.animate({ 'margin-left': '0' }, 300 );

            $( '.responsive-menu-content' ).css({ 'display': 'block' }).animate({ 'right': '-'+ responsiveMenuWidth +'px' }, 300 );

            setTimeout( function() {

                $( '.responsive-menu-content' ).css({ 'display': 'none' });
                wrapper.css({ 'margin-left': '', 'width': '' }).removeClass( 'wrapper-shadow' );
                headerBar.css({ 'left': '' });

            }, 300 );

            martanianPsychologicalPracticeResponsiveMenuVisible = false;
        }

    });

   /**
    *
    * configure overflow elements widths
    *
    */

    $.martanianPsychologicalPracticeConfigureOverflowElementsWidths = function() {

        $( 'section.tabs' ).each( function() {

            var section = $( this );
            var element = section.find( 'ul.tabs-selectors' );
            var contentMargin = $( 'footer .center' ).css( 'margin' );
            var contentSize = parseInt( $( 'footer .center' ).css( 'width' ), 10 );

            if( ( contentMargin != '0px 30px' || $( 'footer .center' ).offset().left != 30 ) || contentSize >= 940 ) element.css({ 'width': '' });
            else {

                var elementWidth = 30;

                element.children( 'li' ).each( function() { elementWidth += $( this ).width() + 30; });
                element.css({ 'width': elementWidth });
            }

        });

    };

   /**
    *
    * end of file.
    *
    */

});
