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
        var $self = $( this );
        $self.hide();

        $.ajax({
          type: "POST",
          url: $self.attr( 'action' ),
          data: {
            "entry.0.single": $self.find( '#entry_0' ).val(),
            "entry.1.single": $self.find( '#entry_1' ).val(),
            "entry.2.single": $self.find( '#entry_2' ).val(),
            "entry.3.single": $self.find( '#entry_3' ).val(),
            formkey: "dFdHN2Y5Y1VURWlEV1A5TDJUUnhkRmc6MQ",
            pageNumber: '',
            backupCache: '',
            submit: 'Submit'
          }
        }).done( function() {
          $self.parent().find( '.success' ).show();
        } );

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
          return start_date.getDate() + '/' + ( start_date.getMonth() + 1 ) + '/' +
            start_date.getFullYear() + ' ' + start_date.toLocaleTimeString();
        }
      });
    },
    // Handles resize of stripes, elements that should act fluid
    resizeStripes: function() {
      // Available width - grid width
      var width = document.documentElement.offsetWidth - 1000;
      var $stripes = $( '.stripe' );
      $stripes.filter( '.red' ).css( 'margin-right', '-' + ( width / 2 ) - 110 + 'px' );
      $stripes.filter( '.grey' ).css( 'margin-left', '-' + ( width / 2 ) - 110 + 'px' );
    },
    // Enable homepage grid rotator
    enableImagesGrid: function( selector ) {
      $( selector ).gridrotator( {
        rows : 4,
        columns : 8,
        animType : 'random',
        w1024 : {
          rows : 4,
          columns : 8
        },
        w768 : {
          rows : 4,
          columns : 8
        },
        w480 : {
          rows : 4,
          columns : 8
        },
        w320 : {
          rows : 4,
          columns : 8
        },
        w240 : {
          rows : 4,
          columns : 8
        },
      } );
    }
  };

  $(document).ready(function() {
    ClujCowork.init();
  });
})(jQuery, this);
