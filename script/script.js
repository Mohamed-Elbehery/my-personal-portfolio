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
      $(".contacts").slideToggle(250);
      $(".show-info").html(
        `Show Contacts <i class="fa-solid fa-angle-up"></i>`
      );
    } else {
      // will switch the icon to the opposite of it
      $(".contacts").slideToggle(250);
      $(".show-info").html(
        `Show Contacts <i class="fa-solid fa-angle-down"></i>`
      );
    }
  });

  // Handling Contact Form
  $("form").submit((e) => {
    e.preventDefault();
    $("#submit-form").html("Sending...");

    const userQuery = {
      name: $("#user-fullname").val(),
      email: $("#user-email").val(),
      message: $("#user-message").val(),
    };

    emailjs
      .send("service_mgmott9", "template_4zv6xko", userQuery)
      .then(() => {
        $("#user-fullname").val("");
        $("#user-email").val("");
        $("#user-message").val("");
        $("#submit-form").html("Successfuly Submitted");
      })
      .then(() => {
        setTimeout(() => {
          $("#submit-form").html("Send Message");
        }, 3000);
      })
      .catch((err) => {
        console.error(err);
        $("#submit-form").html("Try Again Later!!");
      });
  });
});
