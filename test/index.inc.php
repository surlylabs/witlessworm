<?php 

if (basename(__FILE__) == basename($_SERVER['PHP_SELF']))
{
    exit(0);
}

echo '<?xml version="1.0" encoding="utf-8"?>';

?>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en-US" xml:lang="en-US">
<head>
  <title>wormhole-roxy</title>
  <link rel="stylesheet" type="text/css" href="style.css" title="Default Theme" media="all" />
</head>
<body onload="document.getElementById('address_box').focus()">

<!-- start added content -->
<!-- start tip jar -->
<div id="container">
<table border="0">
<tr>
<td><a href="http://www.witlessworm.com"><img src="/media/image/worm/bannerlogo.gif" height="50" width="550" alt="witless worm header logo" border="0"/></a></td>
</tr>
<tr>
<td>
<table>
<tr>
<td>
<img src="/media/image/worm/tipjar/tips.jpg" border="0" alt="tip jar" />
</td>
<td>
<!-- begin monthly paypal logo -->
<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
<input type="image" src="/media/image/worm/tipjar/monthly.gif" name="submit" alt="Make payments with PayPal - it's fast, free and secure!" />
<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
<input type="hidden" name="cmd" value="_xclick-subscriptions" />
<input type="hidden" name="business" value="witlessworm@gmail.com" />
<input type="hidden" name="item_name" value="witless worm subscription" />
<input type="hidden" name="buyer_credit_promo_code" value="" />
<input type="hidden" name="buyer_credit_product_category" value="" />
<input type="hidden" name="buyer_credit_shipping_method" value="" />
<input type="hidden" name="buyer_credit_user_address_change" value="" />
<input type="hidden" name="no_shipping" value="1" />
<input type="hidden" name="return" value="http://www.witlessworm.com/page/worm/thanks.html" />
<input type="hidden" name="no_note" value="1" />
<input type="hidden" name="currency_code" value="USD" />
<input type="hidden" name="lc" value="US" />
<input type="hidden" name="bn" value="PP-SubscriptionsBF" />
<input type="hidden" name="a3" value="4.99" />
<input type="hidden" name="p3" value="1" />
<input type="hidden" name="t3" value="M" />
<input type="hidden" name="src" value="1" />
<input type="hidden" name="sra" value="1" />
</form>
<!-- end monthly paypal logo -->
<!-- begin one-time paypal logo -->
<form action="https://www.paypal.com/cgi-bin/webscr" method="post">
<input type="hidden" name="cmd" value="_xclick" />
<input type="hidden" name="business" value="witlessworm@gmail.com" />
<input type="hidden" name="item_name" value="witless worm one time donation" />
<input type="hidden" name="buyer_credit_promo_code" value="" />
<input type="hidden" name="buyer_credit_product_category" value="" />
<input type="hidden" name="buyer_credit_shipping_method" value="" />
<input type="hidden" name="buyer_credit_user_address_change" value="" />
<input type="hidden" name="no_shipping" value="1" />
<input type="hidden" name="return" value="http://www.witlessworm.com/page/worm/thanks.html" />
<input type="hidden" name="no_note" value="1" />
<input type="hidden" name="currency_code" value="USD" />
<input type="hidden" name="tax" value="0" />
<input type="hidden" name="lc" value="US" />
<input type="hidden" name="bn" value="PP-DonationsBF" />
<input type="image" src="/media/image/worm/tipjar/onetime.gif" name="submit" alt="Make payments with PayPal - it's fast, free and secure!" />
<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
</form>

<!-- start added content -->
<!-- start google analytics -->
<script src="http://www.google-analytics.com/urchin.js" type="text/javascript"></script>
<script type="text/javascript">
<!--
_uacct = "UA-290193-1";
urchinTracker();
//-->
</script>
<!-- end google analytics -->
<!-- start statcounter -->
<script type="text/javascript">
<!-- 
var sc_project=872837;
var sc_partition=7;
var sc_security="6d6be446";
//-->
</script>
<script type="text/javascript" src="http://www.statcounter.com/counter/counter_xhtml.js"></script>
<noscript><div class="statcounter"><a class="statcounter" href="http://www.statcounter.com/"><img src="http://c8.statcounter.com/counter.php?sc_project=872837&amp;java=0&amp;security=6d6be446" alt="free web stats" border="0" class="statcounter" height="13" width="51"/></a></div></noscript>
<!-- end statcounter -->
<!-- end added content -->

</td>
</tr>
</table>
</td>
</tr>
</table>
</div>
<!-- end tip jar -->
<!-- end added content -->

<div id="container">
  <h1 id="title">wormhole-roxy</h1>
  <ul id="navigation">
    <li><a href="<?php echo $GLOBALS['_script_base'] ?>">URL Form</a></li>
    <li><a href="javascript:alert('cookie managment has not been implemented yet')">Manage Cookies</a></li>
  </ul>
<?php

switch ($data['category'])
{
    case 'auth':
?>
  <div id="auth"><p>
  <b>Enter your username and password for "<?php echo htmlspecialchars($data['realm']) ?>" on <?php echo $GLOBALS['_url_parts']['host'] ?></b>
  <form method="post" action="">
    <input type="hidden" name="<?php echo $GLOBALS['_config']['basic_auth_var_name'] ?>" value="<?php echo base64_encode($data['realm']) ?>" />
    <label>Username <input type="text" name="username" value="" /></label> <label>Password <input type="password" name="password" value="" /></label> <input type="submit" value="Login" />
  </form></p></div>
<?php
        break;
    case 'error':
        echo '<div id="error"><p>';
        
        switch ($data['group'])
        {
            case 'url':
                echo '<b>URL Error (' . $data['error'] . ')</b>: ';
                switch ($data['type'])
                {
                    case 'internal':
                        $message = 'Failed to connect to the specified host. '
                                 . 'Possible problems are that the server was not found, the connection timed out, or the connection refused by the host. '
                                 . 'Try connecting again and check if the address is correct.';
                        break;
                    case 'external':
                        switch ($data['error'])
                        {
                            case 1:
                                $message = 'The URL you\'re attempting to access is blacklisted by this server. Please select another URL.';
                                break;
                            case 2:
                                $message = 'The URL you entered is malformed. Please check whether you entered the correct URL or not.';
                                break;
                        }
                        break;
                }
                break;
            case 'resource':
                echo '<b>Resource Error:</b> ';
                switch ($data['type'])
                {
                    case 'file_size':
                        $message = 'The file your are attempting to download is too large.<br />'
                                 . 'Maxiumum permissible file size is <b>' . number_format($GLOBALS['_config']['max_file_size']/1048576, 2) . ' MB</b><br />'
                                 . 'Requested file size is <b>' . number_format($GLOBALS['_content_length']/1048576, 2) . ' MB</b>';
                        break;
                    case 'hotlinking':
                        $message = 'It appears that you are trying to access a resource through this proxy from a remote Website.<br />'
                                 . 'For security reasons, please use the form below to do so.';
                        break;
                }
                break;
        }
        
        echo 'An error has occured while trying to browse through the proxy. <br />' . $message . '</p></div>';
        break;
}
?>
  <form method="post" action="<?php echo $_SERVER['PHP_SELF'] ?>">
    <ul id="form">
      <li id="address_bar"><label>Web Address <input id="address_box" type="text" name="<?php echo $GLOBALS['_config']['url_var_name'] ?>" value="<?php echo isset($GLOBALS['_url']) ? htmlspecialchars($GLOBALS['_url']) : '' ?>" onfocus="this.select()" /></label> <input id="go" type="submit" value="Go" /></li>
      <?php
      
      foreach ($GLOBALS['_flags'] as $flag_name => $flag_value)
      {
          if (!$GLOBALS['_frozen_flags'][$flag_name])
          {
              echo '<li class="option"><label><input type="checkbox" name="' . $GLOBALS['_config']['flags_var_name'] . '[' . $flag_name . ']"' . ($flag_value ? ' checked="checked"' : '') . ' />' . $GLOBALS['_labels'][$flag_name][1] . '</label></li>' . "\n";
          }
      }
      ?>
    </ul>
  </form>
  <!-- The least you could do is leave this link back as it is. This software is provided for free and I ask nothing in return except that you leave this link intact
       You're more likely to recieve support should you require some if I see a link back in your installation than if not -->
  <div id="footer"><a href="http://whitefyre.com/poxy/">PHP-roxy</a> <?php echo $GLOBALS['_version'] ?></div>
</div>
</body>
</html>