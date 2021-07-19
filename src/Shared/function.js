import $ from "jquery";
$(document).ready(function(){
  let scroll_link = $('.scroll');
 
  //smooth scrolling -----------------------
  scroll_link.click(function(e){
      e.preventDefault();
      let url = $('body').find($(this).attr('href')).offset().top;
      $('html, body').animate({
        scrollTop : url
      },700);
      $(this).parent().addClass('active');
      $(this).parent().siblings().removeClass('active');
      return false;	
  });


  $('.button-toggle').click(function(e){
    e.preventDefault();
    $('#menuList').toggleClass('active');
  });

  $('#menuList li a').click(function(){
    if($('#nav-check').prop('checked')){
      $('#nav-check').prop('checked',false)
      $('.section1').removeClass('blur')
      
    }
    
  })
  $('#menuList').click(function(e){
    console.log(e.target.className)
    if(e.target.nodeName === 'LI' || e.target.nodeName === 'UL' ){
      $('#nav-check').prop('checked',false)
      $('.section1').removeClass('blur')
    }
  })

  $('.ScrollTopBtn').click(function(e){

		$('html, body').animate({
			scrollTop: 0
		}, 600);
 
		return false;
  })

  $('#arrowLabel').click(function(){
    if(!$('#nav-check').prop('checked')){
      $('.section1').addClass('blur')
    }else{
      $('.section1').removeClass('blur')
    }
   
  })

   /*
     * Replace all SVG images with inline SVG
     */
    $('img.svg').each(function(){
      var $img = $(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');

      $.get(imgURL, function(data) {
          // Get the SVG tag, ignore the rest
          var $svg = $(data).find('svg');

          // Add replaced image's ID to the new SVG
          if(typeof imgID !== 'undefined') {
              $svg = $svg.attr('id', imgID);
          }
          // Add replaced image's classes to the new SVG
          if(typeof imgClass !== 'undefined') {
              $svg = $svg.attr('class', imgClass+' replaced-svg');
          }

          // Remove any invalid XML tags as per http://validator.w3.org
          $svg = $svg.removeAttr('xmlns:a');

          // Replace image with new SVG
          $img.replaceWith($svg);

      }, 'xml');

    });

    $(window).on("scroll resize", function() {
      $('.hideme').each( function(i){
            
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window + 50  > bottom_of_object ){
            $(this).addClass('fadeInUp')     
        }
      }); 

    })
});
