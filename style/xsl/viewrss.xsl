<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
<xsl:template match="channel">
<html>
  <head>
     <title>witlessworm.com: rss feeds:<xsl:value-of select="title"/></title>
     <link rel="stylesheet" href="http://www.witlessworm.com/css/style.css" type="text/css"/>
  </head>
  <body>
    <a href="http://www.witlessworm.com"><img src="/media/image/worm/bannerlogo.png" alt="witless worm" width="600" height="50" border="0" vspace="10"/></a><br/>
    <div class="group">What is this page?<br/></div>
    <div class="item">You have clicked on a special type of file, a type of XML known as RSS, which is designed to let you get links to the latest features from witlessworm.com using software called a news aggregator. It is not designed to be read in your browser.<br/><br/> If you already use a news aggregator, simply copy the URL of this page and add it into your application.<br/><br/>Here is a preview of what is currently in this file:<br/></div>
    <div style="border:1px solid; padding: 10px; margin: 20px;">
    <div class="group"><xsl:value-of select="title"/><br/></div>
    <div class="item"><xsl:apply-templates select="item"/></div>
    </div>
    <div class="storytext">
    </div>
  </body>
</html>
</xsl:template>
<xsl:template match="item">
  <p><a href="{link}"><b><xsl:value-of select="title"/></b></a><br/>
  <xsl:value-of select="description"/></p>
  <xsl:apply-templates select="item"/>
</xsl:template>
<xsl:template match="language"/>
<xsl:template match="description"/>
</xsl:stylesheet>