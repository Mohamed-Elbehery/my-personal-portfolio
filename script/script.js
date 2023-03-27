$(document).ready(() => {
  // Hiding all articles but not the active one
  $("article.active").fadeIn();
  if ($("article.active")[0]) $("nav").fadeIn();
  $("nav a").click((e) => {
    // Active Class for links
    $("nav a").removeClass("active");
    e.target.classList.add("active");
    $("article").removeClass("active");
    // Active Class for Articles
    articleId = e.target.dataset.index;
    $("article")[articleId].classList.add("active");
    $("article").hide();
    $("article.active").fadeIn();
  });

  // Adding the Icon to the Button
  $(".show-info").html(`Show Contacts <i class="fa-solid fa-angle-down"></i>`);
  // will be triggered after clicking on the button
  $(".show-info").click(() => {
    // will switch the icon to the opposite of it
    if (
      $(".show-info").html() ==
      `Show Contacts <i class="fa-solid fa-angle-down"></i>`
    ) {
      $(".contacts").toggle(250);
      $(".show-info").html(
        `Show Contacts <i class="fa-solid fa-angle-up"></i>`
      );
    } else {
      // will switch the icon to the opposite of it
      $(".contacts").toggle(250);
      $(".show-info").html(
        `Show Contacts <i class="fa-solid fa-angle-down"></i>`
      );
    }
  });
});
