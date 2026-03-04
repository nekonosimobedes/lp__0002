//スムーススクロール
$('a[href^="#"]').on('click', function () {
  var speed = 300;
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $("html, body").animate({
    scrollTop: position
  }, speed, "swing");
  return false;
});

//qa
$(document).ready(function () {
  const $answers = $(".qa__box-a");
  const $questions = $(".qa__box-q");
  const $icons = $(".qa__box-icon");
  $answers.hide().first().show();
  $questions.first().addClass("is-open");
  $icons.first().addClass("is-open");
  $questions.click(function () {
    const $answer = $(this).next(".qa__box-a");
    const $icon = $(this).children(".qa__box-icon");
    $answer.slideToggle(300);
    $(this).toggleClass("is-open");
    $icon.toggleClass("is-open");
    // $answers.not($answer).slideUp(300);
    // $questions.not(this).removeClass("is-open");
    // $icons.not($icon).removeClass("is-open");
  });
});



