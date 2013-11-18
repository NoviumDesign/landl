#= require_tree ./vendor
#= require_tree ./lib

/* Change SVG to PNG in low IE versions */
if(!Modernizr.svg) {
  $('img[src*="svg"]').attr('src', function() {
    return $(this).attr('src').replace('.svg', '.png');
  });
}
