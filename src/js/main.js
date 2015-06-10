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

$.getJSON("../../api/github/users/octocat/octocat.json")
  .then(function(octocat){
    //console.log(octocat);

    $avatar = $('#avatarPic');
    $avatar.attr('src', octocat.avatar_url);

    $displayName = $('#proName');
    $displayName.text(octocat.name);

    $username = $('#proLogin');
    $username.text(octocat.login);

    $organization = $('#proOrg');
      if (octocat.company === "") {
        $organization.parent().detach();
      } else {
        $organization.text(octocat.company);
      };

    $userLocation = $('#proLoc');
    $userLocation.text(octocat.location);

    $userEmail = $('#email');
    $userEmail.text(octocat.email);

    $userMailto = $('#proEmail a');
    $userMailto.attr('href', 'mailto:' + octocat.email);

    $userBlog = $('#link');
      if (octocat.blog === "") {
        $userBlog.parent().parent().detach();
      } else {
        $userBlog.text(octocat.blog);
      };

    $userBlogSite = $('#proLink a');
    $userBlogSite.attr('href', octocat.blog);

    $followers = $('#followers');
    $followers.text(octocat.followers);

    $following = $('#following');
    $following.text(octocat.following);
  });

  $.getJSON("../../api/github/users/octocat/octocatRepos.json")
    .then(function(octocat){
      console.log(octocat[4]);

      $spoon = $('[data-repo="spoon"] a');
      $spoon.attr('href', _.result(_.find(octocat, { 'id': 1300192}), 'html_url'));
      $spoon.text(_.result(_.find(octocat, { 'id': 1300192}), 'full_name'));

      $hello = $('[data-repo="hello"] a');
      $hello.attr('href', _.result(_.find(octocat, { 'name': "Hello-World"}), 'html_url'));
      $hello.text(_.result(_.find(octocat, { 'name': "Hello-World"}), 'full_name'));

      $hello2 = $('[data-repo="hello2"] a');
      $hello2.attr('href', _.result(_.find(octocat, { 'name': "hello-worId"}), 'html_url'));
      $hello2.text(_.result(_.find(octocat, { 'name': "hello-worId"}), 'full_name'));

      $io = $('[data-repo="io"] a');
      $io.attr('href', _.result(_.find(octocat, { 'name': "octocat.github.io"}), 'html_url'));
      $io.text(_.result(_.find(octocat, { 'name': "octocat.github.io"}), 'name'));

      $consort = $('[data-repo="consort"] a');
      $consort.attr('href', _.result(_.find(octocat, { 'name': "git-consortium"}), 'html_url'));
      $consort.text(_.result(_.find(octocat, { 'name': "git-consortium"}), 'full_name'));
    });

$('#changePro').change(function profileChange() {
  if ($('#changePro').val()=="octocat") {
  $.getJSON("../../api/github/users/octocat/octocat.json")
    .then(function(octocat){
      //console.log(octocat);

      $avatar = $('#avatarPic');
      $avatar.attr('src', octocat.avatar_url);

      $displayName = $('#proName');
      $displayName.text(octocat.name);

      $username = $('#proLogin');
      $username.text(octocat.login);

      $organization = $('#proOrg');
        if (octocat.company === "") {
          $organization.parent().detach();
        } else {
          $organization.text(octocat.company);
        };

      $userLocation = $('#proLoc');
      $userLocation.text(octocat.location);

      $userEmail = $('#email');
      $userEmail.text(octocat.email);

      $userMailto = $('#proEmail a');
      $userMailto.attr('href', 'mailto:' + octocat.email);

      $userBlog = $('#link');
        if (octocat.blog === "") {
          $userBlog.parent().parent().detach();
        } else {
          $userBlog.text(octocat.blog);
        };

      $userBlogSite = $('#proLink a');
      $userBlogSite.attr('href', octocat.blog);

      $followers = $('#followers');
      $followers.text(octocat.followers);

      $following = $('#following');
      $following.text(octocat.following);
    });

  $.getJSON("../../api/github/users/octocat/octocatRepos.json")
    .then(function(octocat){
      console.log(octocat[4]);

      $spoon = $('[data-repo="spoon"] a');
      $spoon.attr('href', _.result(_.find(octocat, { 'id': 1300192}), 'html_url'));
      $spoon.text(_.result(_.find(octocat, { 'id': 1300192}), 'full_name'));

      $hello = $('[data-repo="hello"] a');
      $hello.attr('href', _.result(_.find(octocat, { 'name': "Hello-World"}), 'html_url'));
      $hello.text(_.result(_.find(octocat, { 'name': "Hello-World"}), 'full_name'));

      $hello2 = $('[data-repo="hello2"] a');
      $hello2.attr('href', _.result(_.find(octocat, { 'name': "hello-worId"}), 'html_url'));
      $hello2.text(_.result(_.find(octocat, { 'name': "hello-worId"}), 'full_name'));

      $io = $('[data-repo="io"] a');
      $io.attr('href', _.result(_.find(octocat, { 'name': "octocat.github.io"}), 'html_url'));
      $io.text(_.result(_.find(octocat, { 'name': "octocat.github.io"}), 'name'));

      $consort = $('[data-repo="consort"] a');
      $consort.attr('href', _.result(_.find(octocat, { 'name': "git-consortium"}), 'html_url'));
      $consort.text(_.result(_.find(octocat, { 'name': "git-consortium"}), 'full_name'));
    });
  }
  else {
    $.getJSON("../../api/github/users/gatorpazz/gatorpazz.json")
      .then(function(octocat){
        //console.log(octocat);

        $avatar = $('#avatarPic');
        $avatar.attr('src', octocat.avatar_url);

        $displayName = $('#proName');
        $displayName.text(octocat.name);

        $username = $('#proLogin');
        $username.text(octocat.login);

        $organization = $('#proOrg');
          if (octocat.company === "") {
            $organization.parent().detach();
          } else {
            $organization.text(octocat.company);
          };

        $userLocation = $('#proLoc');
        $userLocation.text(octocat.location);

        $userEmail = $('#email');
        $userEmail.text(octocat.email);

        $userMailto = $('#proEmail a');
        $userMailto.attr('href', 'mailto:' + octocat.email);

        $userBlog = $('#link');
          if (octocat.blog === "") {
            $userBlog.parent().parent().detach();
          } else {
            $userBlog.text(octocat.blog);
          };

        $userBlogSite = $('#proLink a');
        $userBlogSite.attr('href', octocat.blog);

        $followers = $('#followers');
        $followers.text(octocat.followers);

        $following = $('#following');
        $following.text(octocat.following);
      });
    }
});
