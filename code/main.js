$(document).ready(function() {
  //navbar and sections
  var home = $('nav ul #home');
  var founders = $('nav ul #founders');
  var news = $('nav ul #news');
  var recommendations = $('nav ul #recommendations');
  var contact = $('nav ul #contact');
  var accessibility = $('nav ul #accessibility');
  var puzzles = $('nav ul #puzzles');
  var homeContent = $('main #homeContent');
  var foundersContent = $('main #foundersContent');
  var newsContent = $('main #newsContent');
  var recommendationsContent = $('main #recommendationsContent');
  var contactContent = $('main #contactContent');
  var accessibilityContent = $('main #accessibilityContent');
  var puzzlesContent = $('main #puzzlesContent');
  //fictitious content warning
  var fictitiousContent = $('main #fictitiousContent');
  //show all article button
  var showall = $('article input');
  var hiddenSection = $('article').children(':hidden');
  //navbar options: showing parts of page on click
  var nav = $('nav input');

  $(home).click(function() {
	document.title = 'LACHS GAMES | Home';
    $(homeContent).slideDown();
    $(foundersContent).hide();
    $(newsContent).show();
    $(recommendationsContent).hide();
    $(contactContent).hide();
    $(accessibilityContent).show();
    $(puzzlesContent).hide();
    $(fictitiousContent).hide();
    return false;
  });
  $(founders).click(function() {
	document.title = 'LACHS GAMES | Founders';
    $(homeContent).hide();
    $(foundersContent).slideDown();
    $(newsContent).hide();
    $(recommendationsContent).hide();
    $(contactContent).hide();
    $(accessibilityContent).hide();
    $(puzzlesContent).hide();
    $(fictitiousContent).show();
    return false;
  });
  $(news).click(function() {
	document.title = 'LACHS GAMES | News';
    $(homeContent).hide();
    $(foundersContent).hide();
    $(newsContent).slideDown();
    $(recommendationsContent).hide();
    $(contactContent).hide();
    $(accessibilityContent).hide();
    $(puzzlesContent).hide();
    $(fictitiousContent).show();
    return false;
  });
  $(recommendations).click(function() {
	document.title = 'LACHS GAMES | Recommendations';
    $(homeContent).hide();
    $(foundersContent).hide();
    $(newsContent).hide();
    $(recommendationsContent).slideDown();
    $(contactContent).hide();
    $(accessibilityContent).hide();
    $(puzzlesContent).hide();
    $(fictitiousContent).hide();
    return false;
  });
  $(contact).click(function() {
	document.title = 'LACHS GAMES | Contact';
    $(homeContent).hide();
    $(foundersContent).hide();
    $(newsContent).hide();
    $(recommendationsContent).hide();
    $(contactContent).slideDown();
    $(accessibilityContent).hide();
    $(puzzlesContent).hide();
    $(fictitiousContent).show();
    return false;
  });
  $(accessibility).click(function() {
	document.title = 'LACHS GAMES | Accessibility';
    $(homeContent).hide();
    $(foundersContent).hide();
    $(newsContent).hide();
    $(recommendationsContent).hide();
    $(contactContent).hide();
    $(accessibilityContent).slideDown();
    $(puzzlesContent).hide();
    $(fictitiousContent).hide();
    return false;
  });
  $(puzzles).click(function() {
	document.title = 'LACHS GAMES | Puzzles';
    $(homeContent).hide();
    $(foundersContent).hide();
    $(newsContent).hide();
    $(recommendationsContent).hide();
    $(contactContent).hide();
    $(accessibilityContent).hide();
    $(puzzlesContent).slideDown();
    $(fictitiousContent).hide();
    return false;
  });

  $(showall).click(function() {
    $(this).parent().children("blockquote").nextAll().toggle();
    if ($(this).parent().children("blockquote").next().is(":hidden")) {
      $(this).attr("value", "Show");
    } else {
      $(this).attr("value", "Hide");
    }
    $(this).show();
  });

  $(nav).click(function() {
    $(this).parent().children().nextAll().toggle();
    $(this).show();
    if ($(this).parent().children().next().is(":hidden")) {
      $(this).css("font-size", "50px");
    } else {
      $(this).css("font-size", "18px");
    }
  });
  //showing nav menu on resize
  window.onresize=function(){$(nav).parent().children().nextAll().show();};
  //puzzles slidedown: inspired by http://jsfiddle.net/amkrtchyan/4jxph/3/
  $('nav ul #puzzles').hover(function(){$('nav ul ul').slideDown();});
  $('nav ul ul').hover(function(){$('nav ul ul').show()}, function(){$('nav ul ul').delay(800).slideUp();} )
});
