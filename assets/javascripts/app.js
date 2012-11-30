;(function ($, window, undefined) {
  'use strict';

  var $doc = $(document);
  var ClujCowork = {
    init: function() {
      this.resizeStripes();
      $( window ).resize( this.resizeStripes );
    },
    // Handles resize of stripes, elements that should act fluid
    resizeStripes: function() {
      // Available width - grid width
      var width = document.documentElement.offsetWidth - 1000;
      var $stripes = $( '.stripe' );
      $stripes.css( 'margin-right', '-' + width / 2 + 'px' );
    }
  };

  $(document).ready(function() {
    ClujCowork.init();
  });
})(jQuery, this);
