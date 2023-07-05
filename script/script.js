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

    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "dev.elbehery@gmail.com",
      Password: "61D57C9487D1BC488625AF4557DC5962A8A0",
      To: "dev.elbehery@gmail.com",
      From: "dev.elbehery@gmail.com",
      Subject: "New Contact Query",
      Body: `Name: ${userQuery.name} <br /> Email: ${userQuery.email} <br /> Message: ${userQuery.message} <br />`,
    })
      .then((_) => {
        $("#submit-form").html("Submitted");
        $("#user-fullname").val("");
        $("#user-email").val("");
        $("#user-message").val("");
        setTimeout(() => {
          $("#submit-form").html(
            `<i class="fa-solid fa-paper-plane"></i> Send Message`
          );
        }, 2000);
      })
      .catch((err) => console.error(err));
  });
});
