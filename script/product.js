//include /script/ext/prototype.js
//include /script/ext/scriptaculous/scriptaculous.js
//include /script/ext/scriptaculous/effects.js

// Product methods and global variables
var product_link = new ARRAY_newNull(11);
product_link[0]  = 'http://www.cafepress.com/witlessworm.26576280';
product_link[1]  = 'http://www.cafepress.com/witlessworm.12252936';
product_link[2]  = 'http://www.cafepress.com/witlessworm.3639411';
product_link[3]  = 'http://www.cafepress.com/witlessworm.12252716';
product_link[4]  = 'http://www.cafepress.com/witlessworm.67760827';
product_link[5]  = 'http://www.cafepress.com/witlessworm.27746371';
product_link[6]  = 'http://www.cafepress.com/witlessworm.6519772';
product_link[7]  = 'http://www.cafepress.com/witlessworm.12252870';
product_link[8]  = 'http://www.cafepress.com/witlessworm.3638933';
product_link[9]  = 'http://www.cafepress.com/witlessworm.85208469';
product_link[10] = 'http://www.witlessworm.com/page/worm/tipjar.html';

var product_image_path = new ARRAY_newNull(11);
product_image_path[0]  = 'http://images.cafepress.com/product/26576280v19_150x150_Front_Color-BlackWhite.jpg';
product_image_path[1]  = 'http://images.cafepress.com/product/12252936_150x150_F.jpg';
product_image_path[2]  = 'http://images.cafepress.com/product/3639411v4_150x150_Front_Color-BlackWhite.jpg';
product_image_path[3]  = 'http://images.cafepress.com/product/12252716v9_150x150_Front.jpg';
product_image_path[4]  = 'http://images.cafepress.com/product/67760827v8_150x150_F.jpg';
product_image_path[5]  = 'http://images.cafepress.com/product/27746371v8_150x150_Front.jpg';
product_image_path[6]  = 'http://images.cafepress.com/product/6519772_150x150_F.jpg';
product_image_path[7]  = 'http://images.cafepress.com/product/12252870v4_150x150_Front.jpg';
product_image_path[8]  = 'http://images.cafepress.com/product/3638933v5_150x150_Front_Color-AshGrey.jpg';
product_image_path[9]  = 'http://images.cafepress.com/product/85208469v10_150x150_Front_Color-Black.jpg';
product_image_path[10] = 'http://www.witlessworm.com/media/image/worm/tipjar/tips.jpg';

var products = new ARRAY_newNull(11);
products[0]  = '<a href="' + product_link[0]  + '"><img border="0" height="150" width="150" alt="awesome mix tape tshirt" src="' + product_image_path[0] + '"/></a><br/><a href="' + product_link[0] + '">awesome mix tape tshirt</a><br/>$19.99';
products[1]  = '<a href="' + product_link[1]  + '"><img border="0" height="150" width="150" alt="tim sleeveless tshirt" src="' + product_image_path[1] + '"/></a><br/><a href="' + product_link[1] + '">tim sleeveless tshirt</a><br/>$18.99';
products[2]  = '<a href="' + product_link[2]  + '"><img border="0" height="150" width="150" alt="fire mchale jersey" src="' + product_image_path[2] + '"/></a><br/><a href="' + product_link[2] + '">fire mchale jersey</a><br/>$20.99';
products[3]  = '<a href="' + product_link[3]  + '"><img border="0" height="150" width="150" alt="what would smoot do? tshirt" src="' + product_image_path[3] + '"/></a><br/><a href="' + product_link[3] + '">what would smoot do? tshirt</a><br/>$22.99';
products[4]  = '<a href="' + product_link[4]  + '"><img border="0" height="150" width="150" alt="lil piranhas black tshirt" src="' + product_image_path[4] + '"/></a><br/><a href="' + product_link[4] + '">lil piranhas black tshirt</a><br/>$21.99';
products[5]  = '<a href="' + product_link[5]  + '"><img border="0" height="150" width="150" alt="add me tshirt" src="' + product_image_path[5] + '"/></a><br/><a href="' + product_link[5] + '">add me tshirt</a><br/>$19.99';
products[6]  = '<a href="' + product_link[6]  + '"><img border="0" height="150" width="150" alt="boc stein" src="' + product_image_path[6] + '"/></a><br/><a href="' + product_link[6] + '">boc stein</a><br/>$14.99';
products[7]  = '<a href="' + product_link[7]  + '"><img border="0" height="150" width="150" alt="not a plastic bag tote" src="' + product_image_path[7] + '"/></a><br/><a href="' + product_link[7] + '">not a plastic bag tote</a><br/>$15.99';
products[8]  = '<a href="' + product_link[8]  + '"><img border="0" height="150" width="150" alt="2006 voty award tshirt" src="' + product_image_path[8] + '"/></a><br/><a href="' + product_link[8] + '">voty ring of fame tshirt</a><br/>$20.99';
products[9]  = '<a href="' + product_link[9]  + '"><img border="0" height="150" width="150" alt="vote for pluto womens dark tshirt" src="' + product_image_path[9] + '"/></a><br/><a href="' + product_link[9] + '">vote for pluto womens dark tshirt</a><br/>$21.99';
products[10] = '<a href="' + product_link[10] + '"><img border="0" height="150" width="80" alt="tip jar" src="' + product_image_path[10] + '"/></a><br/><a href="' + product_link[10] + '">tip jar</a><br/>$4.99 per month';

function PRODUCT_swap() {
  var index = MATH_rand(products.length);
  $('product').innerHTML = products[index];
}

function PRODUCT_display() {
  new Effect.Opacity('product', {duration: 2.5, queue: 'end', from: 0.0, to: 1.0, beforeStart: PRODUCT_swap});
  new Effect.Opacity('product', {duration: 2.5, queue: 'end', from: 1.0, to: 0.0, afterFinish: PRODUCT_display});
}