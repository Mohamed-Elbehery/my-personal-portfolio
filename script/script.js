$(document).ready(() => {
  $("a").click((e) => {
    $("a").removeClass("active");
    e.target.classList.add("active");
  });

  $(".show-info").html(`Show Contacts <i class="fa-solid fa-angle-down"></i>`);
  $(".show-info").click(() => {
    if (
      $(".show-info").html() ==
      `Show Contacts <i class="fa-solid fa-angle-down"></i>`
    ) {
      $(".contacts").toggle(250);
      $(".show-info").html(
        `Show Contacts <i class="fa-solid fa-angle-up"></i>`
      );
    } else {
      $(".contacts").toggle(250);
      $(".show-info").html(
        `Show Contacts <i class="fa-solid fa-angle-down"></i>`
      );
    }
  });
});
