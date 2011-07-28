CMS FILES:

CMSmain.css              --> main.css
CMSstandard_template.jsp --> standard_template.jsp
CMScommon.js		 --> common.js

To include the js file and still do other things

<script language="JavaScript" src="/js/common.js"></script>

<script language="JavaScript1.2">
<!--
function getLookupUrl(fieldId,lookupId,appendFlag,selectedId) {
	return '<%= RequestUtils.getSharedUrl( request, "content/lookup.do" ) %>' +
	       '?<%= RequestParameters.FORM_ID %>=' + 'saveForm' +
	       '&<%= RequestParameters.FIELD_ID %>=' + fieldId +
	       '&<%= RequestParameters.LOOKUP_ID %>=' + lookupId +
	       '&<%= RequestParameters.LOOKUP_APPEND %>=' + appendFlag +
	       '&<%= RequestParameters.LOOKUP_SELECTED_ID %>=' + selectedId;
}

function openLookup(fieldId,lookupId,appendFlag,selectedId) {
	window.open(getLookupUrl(fieldId,lookupId,appendFlag,selectedId), 'lookupWindow', 'toolbar=0,top=0,left=0,width=220,height=400,dependent=1');
}
//-->
</script>