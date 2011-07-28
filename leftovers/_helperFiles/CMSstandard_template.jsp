<%--
/jsp/template/standard_template.jsp

***** Template Variables Used *****
	header
	sidebar
	body
	footer
--%>

<%@ page language="java" %>

<%@ taglib uri="/struts-template.tld" prefix="template" %>

<!-- BEGIN: /jsp/template/standard_template.jsp -->
<html:html locale="true">

<head>
</head>

<link href="/html/main.css" rel="stylesheet" type="text/css">

<body bgcolor="#FFFFFF" text="#000000" link="#336699" vlink="#336699" alink="#336699" leftmargin="0" topmargin="0" marginwidth="0">
<link href="/html/main.css" rel="stylesheet" type="text/css">
<table border="0" cellpadding="0" cellspacing="0" width="750">
	<tr>
		<td width="750" colspan="4"><template:get name="header"/></td>
	</tr>
	<tr>
		<td bgcolor="#E1E1E1" width="125" valign="top"><template:get name="sidebar"/></td>
		<td bgcolor="#000000" width="1"><img src="/images/spacer.gif" width="1" height="1"></td>
		<td bgcolor="#FFFFFF" width="623" valign="top"><template:get name="body"/></td>
		<td bgcolor="#000000" width="1"><img src="/images/spacer.gif" width="1" height="1"></td>
	</tr>
	<tr>
		<td width="750" colspan="4"><template:get name="footer"/></td>
	</tr>
</table>
</body>

</html:html>
<!-- END: /jsp/template/standard_template.jsp -->
