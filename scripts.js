$(document).ready(function(){
    $("form").on('submit',function(){
      var fName = $('input[name=first-name]').val();
      var lName = $('input[name=last-name]').val();
      var description = $('#description').val();
      //
      $('#contact-cards-container').append('<div class="contact-card contact-card-normal"><h3>'+fName+' '+lName+'</h3><p class="contact-desc">'+description+'</p><button class="description-btn" type=button name=button>Click for a description!</button></div>');
      $('textarea').val('');
      $('input[name=first-name]').val('');
      $('input[name=last-name]').val('');
      return false;
    });
    $(document).on('click','.description-btn',function(){
      if ($(this).parent().is('.contact-card')) {
        $(this).parent().removeClass('contact-card').addClass('contact-card-expanded');
      } else {
        $(this).parent().addClass('contact-card').removeClass('contact-card-expanded');
      }
      $(this).siblings('p').toggle();
    });
});
