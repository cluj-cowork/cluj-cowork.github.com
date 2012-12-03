;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document);
  window.ClujCowork = {
    init: function() {
      this.resizeStripes();
      $( window ).resize( this.resizeStripes );
    },
    // Handles Google form submission (ajaxified)
    handleGoogleForm: function( selector ) {
      $( selector ).on( 'submit', function() {
        $( this ).hide();
        $( this ).parent().find( '.success' ).show();
        return false;
      } );
    },
    // Google Calendar feed
    eventsList: function( selector ) {
      $( selector ).gCalFlow({
        calid: 'lfupe8c94ukh4cor2246bhtems@group.calendar.google.com',
        mode: 'upcoming',
        maxitem: 20,
        auto_scroll: false,
        daterange_formatter: function ( start_date, end_date, allday_p ) {
          return start_date.toLocaleDateString() + ', ' +
            start_date.toLocaleTimeString() + ' &mdash; ' +
            end_date.toLocaleDateString() + ', ' +
            end_date.toLocaleTimeString();
        }
      });
    },
    // Google Calendar feed widget
    eventsWidget: function( selector ) {
      $( selector ).gCalFlow({
        calid: 'lfupe8c94ukh4cor2246bhtems@group.calendar.google.com',
        mode: 'upcoming',
        maxitem: 5,
        auto_scroll: false,
        link_item_title: false,
        daterange_formatter: function ( start_date, end_date, allday_p ) {
          return start_date.getDate() + '/' + start_date.getMonth() + '/' +
            start_date.getFullYear() + ' ' + start_date.toLocaleTimeString();
        }
      });
    },
    // Twitter feed widget
    liveTwitter: function( selector ) {
      $( selector ).liveTwitter( 'clujcowork', {
        mode: 'user_timeline',
        limit: 4,
        refresh: true
      });
    },
    // Handles resize of stripes, elements that should act fluid
    resizeStripes: function() {
      // Available width - grid width
      var width = document.documentElement.offsetWidth - 1000;
      var $stripes = $( '.stripe' );
      $stripes.filter( '.red' ).css( 'margin-right', '-' + width / 2 + 'px' );
      $stripes.filter( '.grey' ).css( 'margin-left', '-' + width / 2 - 20 + 'px' );
    },
    // Enable homepage grid rotator
    enableImagesGrid: function( selector ) {
      $( selector ).gridrotator( {
        rows : 4,
        columns : 20,
        animType : 'random',
        w1024 : {
          rows : 5,
          columns : 6
        },
        w768 : {
          rows : 5,
          columns : 5
        },
        w480 : {
          rows : 6,
          columns : 4
        },
        w320 : {
          rows : 7,
          columns : 4
        },
        w240 : {
          rows : 7,
          columns : 3
        },
      } );
    }
  };

  $(document).ready(function() {
    ClujCowork.init();
  });
})(jQuery, this);
