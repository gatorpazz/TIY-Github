$('#about').click(function() {
  $('nav .tab').removeClass('active');
  $(this).addClass('active');
  $('.hide').removeClass('hidden');
});

$('#repos').click(function() {
  $('nav .tab').removeClass('active');
  $(this).addClass('active');
  $('.hide').addClass('hidden');
})
