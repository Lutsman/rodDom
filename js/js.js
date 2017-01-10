$(document).ready(function(){
  $("#owl1").owlCarousel({
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
    onTranslated: function() {
      slide = $('#owl2 .active .item');
      if(!$(slide).hasClass('loaded')) {

        $.ajax({
          method: "POST",
          url: "js/loadslide.php",
          data: {'index': $(slide).data('slide')},
          success: function(data) {
            $(slide).html(data).addClass('loaded');
          }
        });
      }
    }
  });


 $('.fancybox-modal').fancybox({
  padding: 0,
  margin: [0, 70,0,70]
});

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
  $('#form6').ajaxForm(options);





$("input[name=phone]:not(#uptocall-phone)").mask("+7 (999) 999-99-99");

});
$("#form1").validate({
  rules:{
    name:{required: true, maxlength: 100,},
    phone:{required: true, minlength: 10, maxlength: 25,},
  },
  messages:{
    name:{required: "", maxlength: "",},
    phone:{required: "", maxlength: "",},
  }
});
$("#form2").validate({
  rules:{
    name:{required: true, maxlength: 100,},
    phone:{required: true, minlength: 10, maxlength: 25,},
  },
  messages:{
    name:{required: "", maxlength: "",},
    phone:{required: "", maxlength: "",},
  }
});
$("#form3").validate({
  rules:{
    mess:{required: true, maxlength: 300,},
  },
  messages:{
    mess:{required: "", maxlength: "",},
  }
});
$("#form4").validate({
  rules:{
    phone:{required: true, minlength: 10, maxlength: 25,},
  },
  messages:{
    phone:{required: "", maxlength: "",},
  }
});
$("#form5").validate({
  rules:{
    name:{required: true, maxlength: 100,},
    phone:{required: true, minlength: 10, maxlength: 25,},
  },
  messages:{
    name:{required: "", maxlength: "",},
    phone:{required: "", maxlength: "",},
  }
});
$("#form6").validate({
  rules:{
    name:{required: true, maxlength: 100,},
    phone:{required: true, minlength: 10, maxlength: 25,},
    mess:{required: true, maxlength: 300,},
  },
  messages:{
    name:{required: "", maxlength: "",},
    phone:{required: "", maxlength: "",},
    mess:{required: "", maxlength: "",},
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
scrollToElement("a[href='#f1']",102);
scrollToElement("a[href='#f2']", 102);
scrollToElement("a[href='#f3']", 102);
scrollToElement("a[href='#f4']", 102);
scrollToElement("a[href='#f5']", 102);
scrollToElement("a[href='#f6']", 102);
scrollToElement("a[href='#f7']", 102);


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


