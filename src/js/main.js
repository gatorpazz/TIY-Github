$('#about').click(function() {
  $('nav .tab').removeClass('active');
  $(this).addClass('active');
  $('.hide').removeClass('hidden');
  $('.repositories').addClass('hidden');
});

$('#repos').click(function() {
  $('nav .tab').removeClass('active');
  $(this).addClass('active');
  $('.hide').addClass('hidden');
  $('.repositories').removeClass('hidden');
})
