// Global methods

function loadUrl(url) {
  window.location = url;
}

// Array methods

function ARRAY_newNull(len) {
  var a = new Array(len);
  for (var i = 0; i < len; i++) a[i] = null;
  return a;
}

// Field Methods

function FIELD_onClickClear(field, str) {
  if (field.value == str) {
    field.value = "";
  }
}

function FIELD_onBlurRecall(field, str) {
  if (field.value == "") {
    field.value = str;
  }
}

// Math methods

function MATH_rand(n) {
  var now = new Date();
  var seed = now.getTime() % 0xffffffff;
  seed = (0x015a4e35 * seed) % 0x7fffffff;
  return (seed >> 16) % n;
}

// Accordion rightNav

function ACCORDION_display() {
  // Create accordian rightNav.
  var rightNavAccordion = new accordion('accordion', {onEvent : 'mouseover'});
  // Open first element.
  rightNavAccordion.activate($$('.accordion_toggle')[0]);
}

function ACCORDION_preload() {
  var accordions = $$('.accordion_toggle');
  accordions.each(function(accordion) {
    $(accordion.next(0)).setStyle({
      height:'0px'
    });
  });
}

// Flickr badge
var flickrId = new ARRAY_newNull(3);
flickrId[0] = '73111511@N00';
flickrId[1] = '9441902@N02';
flickrId[2] = '94043356@N00';

function FLICKR_display() {
  var index           = MATH_rand(flickrId.length);
  var witlessFlickrId = '10575186%40N00';
  var zg_bg_color     = 'ffffff';
  var zgi_url         = 'http://www.flickr.com/apps/badge/badge_iframe.gne?zg_bg_color='+zg_bg_color+'&zg_person_id=';
  
  document.write('<table cellpadding="3" cellspacing="2"><tr><td>');
  document.write('<iframe style="background-color:#'+zg_bg_color+'; border-color:#'+zg_bg_color+'; border:none;" width="113" height="151" frameborder="0" scrolling="no" src="'+zgi_url+witlessFlickrId+'" title="flickr badge"><\/iframe>');
  document.write('</td><td>');
  document.write('<iframe style="background-color:#'+zg_bg_color+'; border-color:#'+zg_bg_color+'; border:none;" width="113" height="151" frameborder="0" scrolling="no" src="'+zgi_url+flickrId[index]+'" title="flickr badge"><\/iframe>');
  document.write('</td></tr></table>');
}