const eventHandler = (function(){
  let radio = function(){
    $('.field').click(function(){
      const target = $(event.currentTarget);
      const notTarget = $('.field').not(target);
      const pressedBool = $(target).attr('aria-pressed', true);
      notTarget.attr('aria-pressed', false);
      notTarget.toggleClass('pressed', false);
      target.toggleClass('pressed', true);
      $('.field').each(function(mark, value){
          if ($(value).hasClass('pressed'))
              selected = mark + 1; //SELECTED NOT DEFINED HERE
              return;
      })
    });
  }

  return {
    radio
  };
}());