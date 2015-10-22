var bitterData = [
  {
    avatar: "http://www.fillmurray.com/100/100",
    bitter: "I love charleston, but i hate that joe riley is no longer mayor"
  },
  {
    avatar: "https://avatars2.githubusercontent.com/u/14876902?v=3&s=460",
    bitter: "I am bitter the Cubs are 0-3."
  },
  {
    avatar: "https://avatars1.githubusercontent.com/u/14340304?v=3&s=460",
    bitter: "It's this cold this far south, this early."
  },
  {
    avatar: "https://avatars3.githubusercontent.com/u/10393621?v=3&s=460",
    bitter: "Michigan lost to Michigan State!!!"
  }
];
$(document).ready(function () {
  // anything in here is dom ready!
  var bitterTemplate = _.template$('#bitterTmpl').html();
  var bitterHTML = "";

//We need to merge our data from bitterdata with actual markup so
//that we can add to our html document
  _.each(bitterData, function (currVal, idx, arr) {
    // bitterHTML += "<article class='bit'>"
      bitterHTML +=  bitterTemplate(currVal);
      // + "<h3>"
      // + "<img src='"
      // + currVal.avatar
      // + "'>"
      // + "</h3>"
      // + "<p>"
      // + currVal.bitter
      // + "</p>"
      // + "<button class='delete'>Delete</button>"
      // + "</article>";
      // console.log('bitterHTML: ', bitterHTML);
  });
//ADD giant string of markup to the DOM
  $('.bitters').html(bitterHTML);

  $('form').submit(function (event) {
    event.preventDefault();
    console.log("submit happened!");

    var avatarUrl = $('input[name="avatar"]').val();
    var bitterText = $('input[name="bitter"]').val();
    console.log("avatarUrl", avatarUrl, "bitterText", bitterText);

    var htmlForArticle = "<article><h3><img src='" + avatarUrl + "'></h3><p>" + bitterText + "</p><button type='button' class='delete\'>Delete</button></article>";
    // console.log("htmlForArticle", htmlForArticle);



    $('.bitters').prepend(htmlForArticle);
    $('input[type="text"]').val('');

  });

  $('.delete').click(function (event) {

    $(this).closest('article').remove();

  });

  // $('.homeNav').click(function (event) {
  //   event.preventDefault();
  //   $('.bitters').addClass('active-section');
  //   $('.bitters').siblings('section').removeClass('active-section');
    //This will add or remove the active-section
    // $('.bitters').css('display', 'inline-block');
    // $('.bitters').siblings('section').css('display', 'none');

  // });
  // $('.aboutNav').click(function (event) {
  //   event.preventDefault();
  //   $('.about').addClass('active-section');
  //   $('.about').siblings('section').removeClass('active-section');

    // $('.about').css('display', 'inline-block');
    // $('.about').siblings('section').css('display', 'none');

  // });
  // $('.contactNav').click(function (event) {
  //   event.preventDefault();
  //   $('.contact').addClass('active-section');
  //   $('.contact').siblings('section').removeClass('active-section');
  //
    // $('.contact').css('display', 'inline-block');
    // $('.contact').siblings('section').css('display', 'none');

  });
  $('nav li > a').on('click', function (event)){
    event.preventDefault();
    // alert(event.type);
    // console.log($(this).attr('rel');
    //This would grab the rel from the event (ie bitters, about, contact)
    var clickedSection = "." + $(this).attr('rel');
    console.log(clickedSection);
      $(clickedSection).addClass('active-section');
      $(clickedSection).siblings('section').removeClass('active-section');


  }





});
