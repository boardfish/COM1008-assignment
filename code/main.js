$(document).ready(function() {
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
  $(home).click(function() {
    $(homeContent).slideDown();
    $(foundersContent).hide();
    $(newsContent).show();
    $(recommendationsContent).hide();
    $(contactContent).hide();
    $(accessibilityContent).show();
    $(puzzlesContent).hide();
    return false;
  });
  $(founders).click(function() {
    $(homeContent).hide();
    $(foundersContent).slideDown();
    $(newsContent).hide();
    $(recommendationsContent).hide();
    $(contactContent).hide();
    $(accessibilityContent).hide();
    $(puzzlesContent).hide();
    return false;
  });
  $(news).click(function() {
    $(homeContent).hide();
    $(foundersContent).hide();
    $(newsContent).slideDown();
    $(recommendationsContent).hide();
    $(contactContent).hide();
    $(accessibilityContent).hide();
    $(puzzlesContent).hide();
    return false;
  });
  $(recommendations).click(function() {
    $(homeContent).hide();
    $(foundersContent).hide();
    $(newsContent).hide();
    $(recommendationsContent).slideDown();
    $(contactContent).hide();
    $(accessibilityContent).hide();
    $(puzzlesContent).hide();
    return false;
  });
  $(contact).click(function() {
    $(homeContent).hide();
    $(foundersContent).hide();
    $(newsContent).hide();
    $(recommendationsContent).hide();
    $(contactContent).slideDown();
    $(accessibilityContent).hide();
    $(puzzlesContent).hide();
    return false;
  });
  $(accessibility).click(function() {
    $(homeContent).hide();
    $(foundersContent).hide();
    $(newsContent).hide();
    $(recommendationsContent).hide();
    $(contactContent).hide();
    $(accessibilityContent).slideDown();
    $(puzzlesContent).hide();
    return false;
  });
  $(puzzles).click(function() {
    $(homeContent).hide();
    $(foundersContent).hide();
    $(newsContent).hide();
    $(recommendationsContent).hide();
    $(contactContent).hide();
    $(accessibilityContent).hide();
    $(puzzlesContent).slideDown();
    return false;
  });
});