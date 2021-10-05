/* >>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<  */
/* >>>>>>>>>>>>>>>> Konfidencial <<<<<<<<<<<<<<< */
/* >>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<  */

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

/* >>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<  */
/* >>>>>>>>>>>>>>>>>>>>> End <<<<<<<<<<<<<<<<<<<  */
/* >>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<  */
