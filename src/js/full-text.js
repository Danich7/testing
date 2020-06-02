$(document).on('click', '.content__button', function () {
  $(this).closest('.content__description').find('.content__dots').css('display', 'none');
  $(this).closest('.content__description').find('.content__text_hidden').css('display', 'inline');
  $(this).closest('.content__description').find('.content__button').css('display', 'none');
});

