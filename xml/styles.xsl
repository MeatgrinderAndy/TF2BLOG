<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<html>
<body>
 <h1 align="center">
    <xsl:value-of select="termscont/terms/zag"/>
 </h1>
 <xsl:for-each select="termscont/terms/element">

    <h2 align="center">
        <xsl:value-of select="podzag"/>
    </h2>
    <p align="justify" style="width:60%; display:flex; margin-right: auto; margin-left: auto;">
        <xsl:value-of select="info"/>
    </p>
    
 </xsl:for-each>
 
 </body>
 </html>
</xsl:template>
</xsl:stylesheet>
