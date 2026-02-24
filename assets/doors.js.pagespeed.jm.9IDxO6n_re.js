"use strict";
$(document).ready(function () {
  var o = document.querySelectorAll(".door"),
    r = document.querySelectorAll(".door__sales"),
    c = (document.querySelector(".door__wrapper"), document.querySelector(".spin-result-wrapper")),
    i = (document.querySelector(".pop-up-button"), document.querySelector(".order_block"), document.getElementById("door__1")),
    u = document.getElementById("door__2"),
    l = document.getElementById("door__3"),
    s = document.getElementById("door__sales1"),
    a = document.getElementById("door__sales2"),
    d = document.getElementById("door__sales3"),
    p = $("#discount").text();
  function m(e) {
    e.currentTarget.classList.add("open"),
      setTimeout(function () {
        c.style.display = "block";
      }, 2500),
      r.forEach(function (e) {
        i.classList.contains("open")
          ? ((s.innerHTML = p + "%"), (a.innerHTML = "50%"), (d.innerHTML = "25%"))
          : u.classList.contains("open")
          ? ((a.innerHTML = p + "%"), (s.innerHTML = "25%"), (d.innerHTML = "50%"))
          : l.classList.contains("open") && ((s.innerHTML = "50%"), (d.innerHTML = p + "%"), (a.innerHTML = "25%"));
      });
    for (var t = 0; t < o.length; t++)
      !(function (e) {
        o[e].classList.contains("open") ||
          setTimeout(function () {
            o[e].classList.add("open");
          }, 1500);
      })(t);
    for (var n = 0; n < o.length; n++) o[n].removeEventListener("click", m);
    for (var n = 0; n < o.length; n++) o[n].removeEventListener("touchend", m);
  }
  o.forEach(function (e) {
    e.addEventListener("click", m);
  });
  var date = new Date();
  $(".date-n").text(date.toLocaleString().split(",")[0]);
}),
  $(".close-popup, .pop-up-button").click(function (e) {
    e.preventDefault(), $(".spin-result-wrapper").fadeOut();
  });
var intr,
  time = 600;
function start_timer() {
  intr = setInterval(tick, 1e3);
}
function tick() {
  if (0 < time) {
    time -= 1;
    var e = Math.floor(time / 60),
      t = 10 <= (t = time - 60 * e) ? t : "0" + t;
    if ((e < 0 && (e = 0), $("#min").html("0" + e), $("#sec").html(t), 0 == e && 0 == t)) return clearInterval(intr), !1;
  }
}
function spin() {
  $(".box").removeAttr("onclick");
  setTimeout(function () {
    $(".door__wrapper").fadeOut(), $(".order_block").fadeIn();
  }, 3e3),
    setTimeout(function () {
      start_timer();
    }, 5e3);
}
// $(document).on("click", "a, .scroll, .pop-up-button", function (e) {
//   if ($(".order_block").is(":visible")) $("html, body").animate({ scrollTop: $("#order_form").offset().top - ($(window).height() - $("#order_form").outerHeight(true)) }, 800);
//   else $("html,body").animate({ scrollTop: $(".door__wrapper").offset().top }, 1e3);
//   return e.preventDefault(), !1;
// });
