//include /script/ext/prototype.js
//include /script/ext/scriptaculous/scriptaculous.js
//include /script/ext/scriptaculous/effects.js

// Product methods and global variables
var features = new ARRAY_newNull(5);
features[0] = '<table><tr><td><a href="http://witlessworm.com/page/worm/odd/voty/2009.html"><img src="http://witlessworm.com/media/image/worm/odd/voty/trophy.jpg" border="0" height="120" width="100" align="middle" alt="voty trophy"/></a></td><td><span class="purplebold"><b>FEATURED CONTENT</b></span>: <a href="http://witlessworm.com/page/worm/odd/voty/2009.html""><b>2009 voty - phil &quot;ghost dog&quot; loadholt</b></a> <b>by</b> <a href="http://worm4.livejournal.com"><img src="http://www.livejournal.com/img/userinfo.gif" alt="" border="0" class="absmiddle" height="17" width="17"/></a> <a href="/page/worm/blog/worm4.html">worm4</a> [<a href="http://worm4.livejournal.com/67548.html?mode=reply">comment</a>] [<a href="/page/worm/odd/voty/index.html">past winners</a>] [<a href="http://cafepress.com/witlessworm">merch</a>]</td></tr></table>';
features[1] = '<table><tr><td><a href="http://witlessworm.com/page/worm/podcast/index.html"><img src="http://witlessworm.com/media/image/common/featured/awesome.jpg" border="0" height="100" width="100" alt="awesome mix tape podcast"/></a></td><td><span class="blackbold">FEATURED CONTENT</span>: <a href="http://witlessworm.com/page/worm/podcast/index.html"><b>awesome mix tape podcast</b></a> <b>by</b> <a href="http://staticnullvoid.livejournal.com"><img src="http://www.livejournal.com/img/userinfo.gif" alt="" border="0" class="absmiddle" height="17" width="17"/></a> <a href="/page/void/blog/index.html">staticnullvoid</a></td></tr></table>';
features[2] = '<table><tr><td><a href="http://witlessworm.com/page/worm/odd/lucky/vikingsluckycharmsfan.html"><img src="http://witlessworm.com/media/image/common/featured/lucky.png" border="0" height="100" width="100" alt="vikings lucky charms fan of the game"/></a></td><td><span class="blackbold">FEATURED CONTENT</span>: <a href="http://witlessworm.com/page/worm/odd/lucky/vikingsluckycharmsfan.html"><b>vikings lucky charms fan of the game</b></a> <b>by</b> <a href="http://witlessworm.livejournal.com"><img src="http://www.livejournal.com/img/userinfo.gif" alt="" border="0" class="absmiddle" height="17" width="17"/></a> <a href="/page/worm/blog/worm4.html">worm4</a> &amp; <a href="/page/void/blog/index.html">staticnullvoid</a></td></tr></table>';
features[3] = '<table><tr><td><a href="http://witlessworm.com/page/worm/odd/dead/2009.html"><img src="http://witlessworm.com/media/image/common/featured/deadpool.jpg" border="0" height="100" width="100" alt="2009 witless worm dead pool"/></a></td><td><span class="blackbold">FEATURED CONTENT</span>: <a href="http://witlessworm.com/page/worm/odd/dead/2009.html""><b>2009 witless worm dead pool</b></a> <b>by</b> <a href="http://staticnullvoid.livejournal.com"><img src="http://www.livejournal.com/img/userinfo.gif" alt="" border="0" class="absmiddle" height="17" width="17"/></a> <a href="/page/void/blog/index.html">staticnullvoid</a></td></tr></table>';
features[4] = '<table><tr><td><a href="http://witlessworm.com/page/worm/odd/afob/index.html"><img src="http://witlessworm.com/media/image/common/featured/afob.gif" border="0" height="100" width="100" alt="a fistful of breakfast 2.0"/></a></td><td><span class="blackbold">FEATURED CONTENT</span>: <a href="http://witlessworm.com/page/worm/odd/afob/index.html"><b>a fistful of breakfast. now serving breakfast 2.0</b></a> <b>by</b> <a href="http://novicebishop.livejournal.com"><img src="http://www.livejournal.com/img/userinfo.gif" alt="" border="0" class="absmiddle" height="17" width="17"/></a> <a href="/page/worm/blog/index.html">novicebishop</a></td></tr></table>';

function FEATURED_swap() {
  var index = MATH_rand(features.length);
  $('featured').innerHTML = features[index];
}

function FEATURED_display() {
  new Effect.Highlight('featured', {duration: 12.0, beforeStart: FEATURED_swap});
}