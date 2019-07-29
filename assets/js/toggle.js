$(document).ready(function () {
  $('body').on('click', '.timeline-panel', function () {
    let el = $(this);
    let fade_el = el.find('.fade1')[0];
    if ($(fade_el).hasClass('d-none')) {
      $(fade_el).removeClass('d-none');
    } else {
      $(fade_el).addClass('d-none');
    }
  });
  // $(".timeline-panel").click(function () {
  //   let el = $(this);
  //   console.log(el);
  //   let fade_el = el.find('.fade1')[0];
  //   if ($(fade_el).hasClass('d-none')) {
  //     $(fade_el).removeClass('d-none');
  //   } else {
  //     $(fade_el).addClass('d-none');
  //   }
  // });
});