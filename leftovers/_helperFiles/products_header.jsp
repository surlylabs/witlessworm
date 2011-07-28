<%@ page language="java" %>

<%@ taglib uri="/agent.tld" prefix="agent" %>
<%@ taglib uri="/struts-bean.tld" prefix="bean" %>
<%@ taglib uri="/struts-html.tld" prefix="html" %>
<%@ taglib uri="/struts-logic.tld" prefix="logic" %>
<%@ taglib uri="/struts-template.tld" prefix="template" %>

<%@ page import="com.mltvacations.shared.constants.ProductLineCodes" %>

<!-- BEGIN: jsp/header/products_header.jsp -->
<table bgcolor="#cc0000" border="0" cellpadding="0" cellspacing="0" width="750">
    <tr>
        <td width="112"><html:link forward="nwaair_booking_index"><html:img page="/images/nwaair/nwa_logo.gif" width="120" height="50" border="0"/></html:link></td>
        <td rowspan="2" valign="bottom">
        <table bgcolor="#FFFFFF" border="0" cellpadding="0" cellspacing="0">
            <tr>
                <td width="50"><html:link forward="nwaair_booking_index"     onmouseout="IMAGES_swapRestore()" onmouseover="NWAAIR_swapBooking()"    ><html:img imageName="bookingtab"     page="/images/nwaair/menu/booking_off.gif"     alt="Booking"               width="50" height="25" border="0"/></html:link></td>
                <td width="64"><html:link forward="nwaair_deals_index"       onmouseout="IMAGES_swapRestore()" onmouseover="NWAAIR_swapDeals()"      ><html:img imageName="dealstab"       page="/images/nwaair/menu/deals_off.gif"       alt="Fares and Promotions"  width="64" height="25" border="0"/></html:link></td>
                <td width="55"><html:link forward="nwaair_resource_index"    onmouseout="IMAGES_swapRestore()" onmouseover="NWAAIR_swapResource()"   ><html:img imageName="resourcetab"    page="/images/nwaair/menu/resource_off.gif"    alt="Resource Center"       width="55" height="25" border="0"/></html:link></td>
                <td width="66"><html:link forward="nwaair_products_index"    onmouseout="IMAGES_swapRestore()" onmouseover="NWAAIR_swapProducts()"   ><html:img imageName="productstab"    page="/images/nwaair/menu/products_on.gif"     alt="Products and Services" width="66" height="25" border="0"/></html:link></td>
                <td width="48"><html:link forward="nwaair_news_index"        onmouseout="IMAGES_swapRestore()" onmouseover="NWAAIR_swapAgencyNews()" ><html:img imageName="agencynewstab"  page="/images/nwaair/menu/agencynews_off.gif"  alt="Agency News"           width="48" height="25" border="0"/></html:link></td>
                <td width="61"><html:link forward="nwaair_incentives_index"  onmouseout="IMAGES_swapRestore()" onmouseover="NWAAIR_swapIncentives()" ><html:img imageName="incentivestab"  page="/images/nwaair/menu/incentives_off.gif"  alt="Incentives"            width="61" height="25" border="0"/></html:link></td>
            </tr>
        </table>
        </td>
        <td><html:img page="/images/nwaair/klm_logo.gif" width="82" height="50" border="0"/></td>
        <td align="right" valign="bottom" width="100%">
        <agent:forward forwardName="contactindex_jsp" product="<%= ProductLineCodes.NWA_AIR %>" secure="true" styleClass="footer">contact us</agent:forward>
        <span class="white">|</span>
        <agent:forward forwardName="mischelp_jsp" product="<%= ProductLineCodes.NWA_AIR %>" secure="true" styleClass="footer">help</agent:forward></td>
        <td width="5"><html:img page="/images/common/spacer.gif" width="5" height="1" border="0"/></td>
    </tr>
    <tr>
        <td bgcolor="#336699" height="1"><html:img page="/images/common/spacer.gif" width="1" height="1" border="0"/></td>
        <td bgcolor="#336699" height="1"><html:img page="/images/common/spacer.gif" width="1" height="1" border="0"/></td>
        <td bgcolor="#336699" height="1"><html:img page="/images/common/spacer.gif" width="1" height="1" border="0"/></td>
    </tr>
</table>
<!-- END: jsp/header/products_header.jsp -->
