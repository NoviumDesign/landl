/* Change SVG to PNG in low IE versions */
Modernizr.svg||$('img[src*="svg"]').attr("src",function(){return $(this).attr("src").replace(".svg",".png")});