$(document).ready(function(){
  $("#owl1").owlCarousel({
    items : 1,
    autoplay : false,
    autoplayTimeout: 4000,
    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 300,
    nav: true,
    dots: false,
    dotsEach: true,
    navText : false,
    loop : true,
    autoWidth : false,
    responsive : false, 
    itemsScaleUp : false, 
  });
  $("#owl2").owlCarousel({
    items : 1,
    autoplay : false,
    autoplayTimeout: 4000,
    navigation : true, // Show next and prev buttons
    slideSpeed : 300,
    paginationSpeed : 300,
    nav: true,
    dots: true,
    dotsEach: true,
    navText : false,
    loop : true,
    autoWidth : false,
    responsive : false, 
    itemsScaleUp : false, 
  });


 $('.fancybox-modal').fancybox({padding: 0});

 $(window).scroll(function() {
          if ($(this).scrollTop() > 110){
              $(".bottom-menu").addClass( "active" );
            }
            else{
              $(".bottom-menu").removeClass( "active" );
            }
        });

  var options = {
    delegation: true,
    clearForm: true,
    resetForm: true,
    type: 'post',
    beforeSubmit: function() {
      $.fancybox.close();
    },
    success: function() {
      $.fancybox({href: "#popupThanks", type: 'inline', padding: 0});
    },
    error: function() {
      $.fancybox({href: "#popupError", type: 'inline', padding: 0});
    }
  }
  $('#form1').ajaxForm(options);
  $('#form2').ajaxForm(options);
  $('#form3').ajaxForm(options);
  $('#form4').ajaxForm(options);
  $('#form5').ajaxForm(options);





$("input[name=phone]").mask("+7 (999) 999-99-99");

});
$("#form1").validate({
  rules:{
    phone:{required: true, minlength: 10, maxlength: 25,},
  },
  messages:{
    phone:{required: "", maxlength: "",},
  }
});
$("#form2").validate({
  rules:{
    phone:{required: true, minlength: 10, maxlength: 25,},
  },
  messages:{
    phone:{required: "", maxlength: "",},
  }
});
$("#form3").validate({
  rules:{
    name:{required: true, maxlength: 100,},
    phone:{required: true, minlength: 10, maxlength: 25,},
  },
  messages:{
    name:{required: "", maxlength: "",},
    phone:{required: "", maxlength: "",},
  }
});
$("#form4").validate({
  rules:{
    name:{required: true, maxlength: 100,},
    mess:{required: true, maxlength: 300,},
  },
  messages:{
    name:{required: "", maxlength: "",},
    mess:{required: "", maxlength: "",},
  }
});
$("#form5").validate({
  rules:{
    phone:{required: true, minlength: 10, maxlength: 25,},
  },
  messages:{
    phone:{required: "", maxlength: "",},
  }
});

function scrollToElement(element, offset) {
  $(element).click(function(e) {
    var elementClick = $(this).attr("href");
    var destination  = $(elementClick).offset().top;
    if(destination < 0) {destination = 0;}
    $('html, body').animate({scrollTop: destination - offset}, "slow");
    e.preventDefault();
  });
}
scrollToElement("a[href='#f1']", 30);
scrollToElement("a[href='#f2']", 30);
scrollToElement("a[href='#f3']", 25);
scrollToElement("a[href='#f4']", 30);
scrollToElement("a[href='#f5']", 30);
scrollToElement("a[href='#f6']", 30);
scrollToElement("a[href='#f8']", 30);



function baseName(str)
{
   var base = new String(str).substring(str.lastIndexOf('/') + 1);
    if(base.lastIndexOf(".") != -1)
       base = base.substring(0, base.lastIndexOf("."));
   return base;
}

$('input[type=file]').change(function() {
    var filename = $(this).val().replace("C:\\fakepath\\", "");
    if(filename == '') {
      filename = "(Не выбранa)";
    }
    var parent = $(this).parent().parent();
    $(parent).find('.fileName').html(filename);
});

$( ".menu-button" ).click(function( e ) {
  $( ".list-menu" ).toggleClass('active');
  $ ( ".menu-button" ).addClass('active');
  e.preventDefault();
});

$( ".close" ).click(function( e ) {
  $( ".list-menu" ).removeClass('active');
  $ ( ".menu-button" ).removeClass('active');
  e.preventDefault();
});

$( ".moreservices" ).click(function( e ) {
  $( ".block-service" ).removeClass('active');
  $( ".block-service" ).addClass('active');
  $( ".moreservices" ).addClass('active');
  e.preventDefault();
});

$( ".moretext" ).click(function( e ) {
  $( ".block-text" ).removeClass('active');
  $( ".block-text" ).addClass('active');
  $( ".moretext" ).addClass('active');
  e.preventDefault();
});

$( ".link1" ).click(function( e ) {
  $( ".list-menu" ).removeClass('active');
  $ ( ".menu-button" ).removeClass('active');
  e.preventDefault();
});
$( ".link2" ).click(function( e ) {
  $( ".list-menu" ).removeClass('active');
  $ ( ".menu-button" ).removeClass('active');
  e.preventDefault();
});
$( ".link3" ).click(function( e ) {
  $( ".list-menu" ).removeClass('active');
  $ ( ".menu-button" ).removeClass('active');
  e.preventDefault();
});
$( ".link4" ).click(function( e ) {
  $( ".list-menu" ).removeClass('active');
  $ ( ".menu-button" ).removeClass('active');
  e.preventDefault();
});
$( ".link6" ).click(function( e ) {
  $( ".list-menu" ).removeClass('active');
  $ ( ".menu-button" ).removeClass('active');
  e.preventDefault();
});
$( ".link7" ).click(function( e ) {
  $( ".list-menu" ).removeClass('active');
  $ ( ".menu-button" ).removeClass('active');
  e.preventDefault();
});
$( ".link8" ).click(function( e ) {
  $( ".list-menu" ).removeClass('active');
  $ ( ".menu-button" ).removeClass('active');
  e.preventDefault();
});

$( ".opencontacts" ).click(function( e ) {
  $( ".contacts" ).toggleClass('active');
  e.preventDefault();
});

jQuery(function($){
  $(document).mouseup(function (e){
    var div = $("#close-menu.active");
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
      $( ".list-menu" ).removeClass('active');
      $( ".menu-button" ).removeClass('active');
    }
  });
});
