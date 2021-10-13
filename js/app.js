/* >>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<  */
/* >>>>>>>>>>>>>>>> Konfidencial <<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<  */

/* >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<  */
/* >>>>>>>>>>>>>> Navbar <<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<  */

/* >>>>>>>> It will show/hide mobile menu <<<<<<<<< */
$(document).ready(function () {
  $(".--menu--").on("click", function () {
    $(".navbar").toggleClass("active");
  });
});

/* >>>>>>>> It will show hide dropdown on click <<<<<<<<< */
$(document).ready(function () {
  $(".drop-it").on("click", function () {
    $(this).toggleClass("active");
  });
});

/* >>>>>>>> It will show hide languages <<<<<<<<< */
$(document).ready(function () {
  $(".lang").on("click", function () {
    $(this).toggleClass("active");
  });
});

/* >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<  */
/* >>>>>>>>>>>>> Questions <<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<  */

/* It will will be responsible for switching the questions */
/* when user click any of the question it will make that question active */

$(document).ready(function () {
  $(".--f-a-q--").on("click", "input", function () {
    $(".--f-a-q-- input.active").removeClass("active");
    $(this).addClass("active");
  });
});

/* >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<  */
/* >>>>>> Escorts City Dropdown <<<<<<< */
/* >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<  */

/* >>>>> Dropdown Menu from Acompanhantes Page <<<<<<*/
$(".dropdown").click(function () {
  $(this).attr("tabindex", 1).focus();
  $(this).toggleClass("active");
  $(this).find(".dropdown-menu").slideToggle(300);
});
$(".dropdown").focusout(function () {
  $(this).removeClass("active");
  $(this).find(".dropdown-menu").slideUp(300);
});
$(".dropdown .dropdown-menu li").click(function () {
  $(this).parents(".dropdown").find("span").text($(this).text());
  $(this).parents(".dropdown").find("input").attr("value", $(this).attr("id"));
});

/* >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<  */
/* >>>>>> Contact Form Submission <<<<< */
/* >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<  */

/* Show confirmation Message */
$(document).ready(function () {
  $(".enable-confirmation").on("click", function () {
    $(".--confirmation-message--").css("display", "block");
  });
});

/* Hide confirmation Message */
$(document).ready(function () {
  $(".--confirmed--").on("click", function () {
    $(".--confirmation-message--").css("display", "none");
  });
});

/* >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<  */
/* >>>>> Ads - Make request change <<<< */
/* >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<  */

/* Show confirmation Message */
$(document).ready(function () {
  $(".make-access").on("click", function () {
    $(".request-accessed").css("display", "block");
  });
});

/* Hide confirmation Message */
$(document).ready(function () {
  $(".--close-pop-up--").on("click", function () {
    $(".request-accessed").css("display", "none");
  });
});

/* >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<  */
/* >>>>>>>> All Pages - Login <<<<<<<<< */
/* >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<  */

/* Show Login Pop Up */
$(document).ready(function () {
  $(".make-login").on("click", function () {
    $(".login-to-konfidential").css("display", "block");
  });
});

/* Close Login Pop Up */
$(document).ready(function () {
  $(".--close-login--").on("click", function () {
    $(".login-to-konfidential").css("display", "none");
  });
});

/* >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<  */
/* >>>>>>>>>>>> Read More <<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<  */

$(".-read-more").click(function () {
  $(".-para").toggleClass("active");
});

/* >>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<  */
/* >>>>>>>>>>>>>>>>>>>>> End <<<<<<<<<<<<<<<<<<<  */
/* >>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<  */
