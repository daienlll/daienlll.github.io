
var nowDate1 = dayjs().format('dddd, MMM D YYYY');
$("#today").html(nowDate1);

$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var text = $(this).siblings(".dia").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
    console.log("stuff");
  })

  function startDaClock() {
    var now = parseInt(dayjs().format('HH'));

    $(".time-block").each(function () {

      var blockTime = parseInt($(this).attr("id").split("-")[1]);
      console.log(now, blockTime)
      if (blockTime < now) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (blockTime === now) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");

      }
    })
  }


$("#hour-9 .dia").val(localStorage.getItem("hour-9"));
$("#hour-10 .dia").val(localStorage.getItem("hour-10"));
$("#hour-11 .dia").val(localStorage.getItem("hour-11"));
$("#hour-12 .dia").val(localStorage.getItem("hour-12"));
$("#hour-13 .dia").val(localStorage.getItem("hour-13"));
$("#hour-14 .dia").val(localStorage.getItem("hour-14"));
$("#hour-15 .dia").val(localStorage.getItem("hour-15"));
$("#hour-16 .dia").val(localStorage.getItem("hour-16"));
$("#hour-17 .dia").val(localStorage.getItem("hour-17"));
$("#hour-18 .dia").val(localStorage.getItem("hour-18"));
$("#hour-19 .dia").val(localStorage.getItem("hour-19"));
$("#hour-20 .dia").val(localStorage.getItem("hour-20"));

startDaClock();
});