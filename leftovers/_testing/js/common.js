// Global methods

function loadPage(url) {
	window.location = url;
}

// Array methods

function ARRAY_new(element) {
	var a = new Array( 1 );
	a[0] = element;
	return a;
}

function ARRAY_insertElement(a,element,index) {
	for (var i = a.length; i > index; i--) {
		a[i] = a[i-1];
	}
	a[index] = element;
}

function ARRAY_replaceElement(a,element,index) {
	a[index] = element;
}

function ARRAY_removeElement(a,index) {
	if ((index >= 0) && (index < a.length)) {
		for (var i = index; i < a.length; i++) {
			a[i] = a[i+1];
		}
		a.length -= 1;
	}
}

// Date methods

function DATE_compareDay(date1,date2) {
	result = date1.getFullYear() - date2.getFullYear();
	if( result == 0 ) {
		result = date1.getMonth() - date2.getMonth();
		if( result == 0 ) {
			result = date1.getDate() - date2.getDate();
		}
	}
	return result;
}

function DATE_isLeapYear(year) {
	return (NUMBER_isDivisibleBy(year,4) && (!NUMBER_isDivisibleBy(year,100) || NUMBER_isDivisibleBy(year,400)));
}

function DATE_isValid(year,month,day) {
	if ((year >= 0) && (year <= 9999)) {
		if ((month >= 0) && (month <= 11)) {
			daysInMonth = 0;
			switch (month) {
				case  0: daysInMonth = 31; break; // Jan
				case  1: daysInMonth = DATE_isLeapYear(year) ? 29 : 28; break; // Feb
				case  2: daysInMonth = 31; break; // Mar
				case  3: daysInMonth = 30; break; // Apr
				case  4: daysInMonth = 31; break; // May
				case  5: daysInMonth = 30; break; // Jun
				case  6: daysInMonth = 31; break; // Jul
				case  7: daysInMonth = 31; break; // Aug
				case  8: daysInMonth = 30; break; // Sep
				case  9: daysInMonth = 31; break; // Oct
				case 10: daysInMonth = 30; break; // Nov
				case 11: daysInMonth = 31; break; // Dev
			}
			if ((day >=0) && (day <= daysInMonth)) {
				return true;
			}
		}
	}
	return false;
}

// Form methods

function FORM_focusFirstVisibleElement(form) {
	var element = FORM_getFirstVisibleElement(form);
	if (element != null) {
		element.focus();
		return true;
	}
	return false;
}

function FORM_getByName(name) {
	var forms = document.forms;
	for (var i = 0; i < forms.length; i++) {
		if ((forms[i].name != null) && (forms[i].name == name)) {
			return forms[i];
		}
	}
	return null;
}

function FORM_getField(form,name) {
	var elements = form.elements;
	for (var i=0; i < elements.length; i++) {
		if ((elements[i].name != null) && (elements[i].name == name)) {
			return elements[i];
		}
	}
	return null;
}

function FORM_getFirstVisibleElement(form) {
	var elements = form.elements;
	for (var i = 0; i < elements.length; i++) {
		if ((elements[i].type == null) || (elements[i].type != "hidden")) {
			return elements[i];
		}
	}
	return null;
}

function FORM_setFieldValue(form,name,value) {
	var field = FORM_getField(form,name);
	field.value = value;
}

// Number methods

function NUMBER_compare(num1,num2) {
	return num1 - num2;
}

function NUMBER_isDivisibleBy(num1,num2) {
	return ((num1 % num2) == 0);
}

// Select methods

function SELECT_selectOptionByValue(select,value) {
	for (var i = 0; i < select.length; i++ ) {
		if (select.options[i].value == value) {
			select.selectedIndex = i;
			return true;
		}
	}
	select.selectedIndex = -1;
	return false;
}

function SELECT_selectSortedOptionByValue(select,value) {
	startIndex = 0;
	endIndex = select.length-1;
	while (endIndex >= startIndex) {
		checkIndex = Math.floor((startIndex + endIndex)/2);
		cmp = STRING_compareIgnoreCase(value,select.options[checkIndex].value);
		if (cmp < 0) {
			endIndex = checkIndex - 1;
		} else if (cmp > 0) {
			startIndex = checkIndex + 1;
		} else {
			select.selectedIndex = checkIndex;
			return true;
		}
	}
	select.selectedIndex = -1;
	return false;
}

function SELECT_getSelectedValue(select) {
	index = select.selectedIndex;
	if ((index >= 0) && (index < select.length)) {
		return select.options[index].value;
	}
	return '';
}

function SELECT_insertOptionAt(select,option,index) {
	origLen = select.length;
	if (index < origLen) {
		select.options[origLen] = new Option();
		for (var i = origLen; i > index; i--) {
			select.options[i].value = select.options[i-1].value;
			select.options[i].text = select.options[i-1].text;
		}
	}
	select.options[index] = option;
}

function SELECT_replaceOptionAt(select,option,index) {
	select.options[index] = option;
}

function SELECT_removeOptionAt(select,index) {
	if ((index >= 0) && (index < select.length)) {
		select.options[index] = null;
	}
}

function SELECT_submit(select) {
	var value = SELECT_getSelectedValue(select);
	if (value != '') {
		select.form.submit();
	}
	return false;
}

// String methods

function STRING_repeatChar(ch,len) {
	str = '';
	for (var i = 0; i < len; i++) {
		str += ch;
	}
	return str;
}

function STRING_spaces(len) {
	return STRING_repeatChar(' ',len);
}

// Note: Parameter ch defaults to a space.
function STRING_padLeft(str,len,ch) {
	if (arguments.length < 3) { ch = ' ' };
	return STRING_repeatChar(ch,len-str.length,ch) + str;
}

// Note: Parameter ch defaults to a space.
function STRING_padRight(str,len,ch) {
	if (arguments.length < 3) { ch = ' ' };
	return str + STRING_repeatChar(ch,len-str.length);
}

function STRING_countLeadingChars(str,ch) {
	for (var i = 0; i < str.length; i++) {
		if (str.charAt(i) != ch) {
			return i;
		}
	}
	return str.length;
}

function STRING_countTrailingChars(str,ch) {
	for (var i = 0; i < str.length; i++) {
		if (str.charAt(str.length-1-i) != ch) {
			return i;
		}
	}
	return str.length;
}

function STRING_trimChars(str,ch) {
	lchars = STRING_countLeadingChars(str,ch);
	rchars = STRING_countTrailingChars(str,ch);
	return str.substring(lchars,str.length-rchars);
}

function STRING_trimLeadingChars(str,ch) {
	lchars = STRING_countLeadingChars(str,ch);
	return str.substring(lchars,str.length);
}

function STRING_trimTrailingChars(str,ch) {
	rchars = STRING_countTrailingChars(str,' ');
	return str.substring(0,str.length-rchars);
}

function STRING_trim(str) {
	return STRING_trimChars(str,' ');
}

function STRING_trimLeading(str) {
	return STRING_trimLeadingChars(str,' ');
}

function STRING_trimTrailing(str) {
	return STRING_trimTrailingChars(str,' ');
}

function STRING_trimLeadingZeros(str) {
	return STRING_trimLeadingChars(str,'0');
}

function STRING_compare(str1,str2) {
	if (str1 < str2) {
		return -1;
	} else if (str1 > str2) {
		return 1;
	}
	return 0;
}

function STRING_compareIgnoreCase(str1,str2) {
	stric1 = str1.toUpperCase().toLowerCase();
	stric2 = str2.toUpperCase().toLowerCase();
	if (stric1 < stric2) {
		return -1;
	} else if (stric1 > stric2) {
		return 1;
	}
	return 0;
}

function STRING_parseInt(str) {
	trimmedStr = STRING_trim(str);
	if (trimmedStr != '') {
		trimmedStr = STRING_trimLeadingZeros(trimmedStr);
		if (trimmedStr == '') { trimmedStr = '0'; }
	}
	return parseInt(trimmedStr);
}

function STRING_formatInt(i) {
	return i + '';
}

function STRING_formatZeroPaddedInt(i,len) {
	return STRING_padLeft(STRING_formatInt(i),len,'0');
}

function STRING_parseFloat(str) {
	trimmedStr = STRING_trim(str);
	return parseFloat(trimmedStr);
}

function STRING_formatFloat(f) {
	return f + '';
}

function STRING_formatDateMMsDDsYY(date,separator) {
	if (separator == null) { separator = '/'; }
	return STRING_formatZeroPaddedInt(date.getMonth()+1,2) +
	       separator +
	       STRING_formatZeroPaddedInt(date.getDate(),2) +
	       separator +
	       STRING_formatInt(date.getFullYear()).substr(2,2);
}

function STRING_formatDollar(dollar) {
	str = STRING_formatFloat(dollar);
	if (str.indexOf('.') == -1) { str += '.'; }
	if (str.indexOf('.') == 0) { str = '0' + str; }
	decCnt = str.length - str.indexOf('.') - 1;
	for (var i = 0; i < (2-decCnt); i++) { str += '0'; }
	return str;
}

function STRING_isNumeric(str) {
	return (str.match(/^\d*$/) != null);
}

function STRING_isValidInt(str) {
	return (str.match(/^-?\d*$/) != null);
}

function STRING_isValidDateMsDsYY(str) {
	good = /^\d{1,2}([\/\-\.])\d{1,2}\1\d{2}$/;
	return (str.match(good) != null);
}

function STRING_isValidDateMsDsYYYY(str) {
	good = /^\d{1,2}([\/\-\.])\d{1,2}\1\d{4}$/;
	return (str.match(good) != null);
}

function STRING_isValidDollar(str) {
	good1 = /^-?\d*$/;
	good2 = /^-?\d*\.\d{0,2}$/;
	bad = '.';
	return ((str != bad) && ((str.match(good1) != null) || (str.match(good2) != null)));
}

function STRING_parseDateMsDsYY(str) {
	if (STRING_isValidDateMsDsYY(str)) {
		separator = str.substr(str.length-3,1);
		index1 = str.indexOf(separator);
		index2 = str.indexOf(separator,index1+1);
		month = STRING_parseInt(str.substring(0,index1))-1;
		day = STRING_parseInt(str.substring(index1+1,index2));
		year = STRING_parseInt(str.substring(index2+1));
		year += (year < 50) ? 2000 : 1900;
		if (DATE_isValid(year,month,day)) {
			return new Date(year,month,day);
		}
	}
	return null;
}

function STRING_parseDateMsDsYYYY(str) {
	if (STRING_isValidDateMsDsYYYY(str)) {
		separator = str.substr(str.length-5,1);
		index1 = str.indexOf(separator);
		index2 = str.indexOf(separator,index1+1);
		month = STRING_parseInt(str.substring(0,index1))-1;
		day = STRING_parseInt(str.substring(index1+1,index2));
		year = STRING_parseInt(str.substring(index2+1));
		if (DATE_isValid(year,month,day)) {
			return new Date(year,month,day);
		}
	}
	return null;
}

function STRING_parseDateInput(str) {
	if (STRING_isValidDateMsDsYY(str)) {
		return STRING_parseDateMsDsYY(str);
	}
	if (STRING_isValidDateMsDsYYYY(str)) {
		return STRING_parseDateMsDsYYYY(str);
	}
	return null;
}

function STRING_find(strs) {
	for (var i = 0; i < strs.length; i++ ) {
		if (strs[i] == str) {
			return i;
		}
	}
	return -1;
}

function STRING_findSorted(strs,str) {
	startIndex = 0;
	endIndex = strs.length-1;
	while (endIndex >= startIndex) {
		checkIndex = Math.floor((startIndex + endIndex)/2);
		cmp = STRING_compareIgnoreCase(str,strs[checkIndex]);
		if (cmp < 0) {
			endIndex = checkIndex - 1;
		} else if (cmp > 0) {
			startIndex = checkIndex + 1;
		} else {
			return checkIndex;
		}
	}
	return -1;
}

function STRING_formatCommaSeparated(strs) {
	str = '';
	for (var i = 0; i < strs.length; i++) {
		if (i > 0) { str += ','; }
		str += strs[i];
	}
	return str;
}

function STRING_parseCommaSeparated(str) {
	strs = new Array();
	i = 0;
	startpos = 0;
	endpos = str.indexOf(",",startpos);
	while (endpos >= 0) {
		strs[i++] = str.substring(startpos,endpos);
		startpos = endpos+1;
		endpos = (startpos < str.length) ? str.indexOf(",",startpos) : -1;
	}
	strs[i] = str.substring(startpos,str.length);
	return strs;
}

function STRING_parseCommaSeparatedWithLength(str,len) {
	strs = STRING_parseCommaSeparated(str);
	if (strs.length > len) {
		strs.length = len;
	} else if (strs.length < len) {
		for (var i = strs.length; i < len; i++) {
			strs[i] = '';
		}
	}
	return strs;
}

function STRING_buildLengthArray(strs) {
	lens = new Array();
	for (var i = 0; i < strs.length; i++) {
		lens[i] = strs[i].length;
	}
	return lens;
}

function STRING_formatCommaSeparatedInts(ints) {
	str = '';
	for (var i = 0; i < ints.length; i++) {
		if (i > 0) { str += ','; }
		str += STRING_formatInt(ints[i]);
	}
	return str;
}

function STRING_parseCommaSeparatedInts(str) {
	ints = new Array();
	i = 0;
	startpos = 0;
	endpos = str.indexOf(',',startpos);
	while (endpos >= 0) {
		ints[i++] = STRING_parseInt(str.substring(startpos,endpos));
		startpos = endpos+1;
		endpos = (startpos < str.length) ? str.indexOf(',',startpos) : -1;
	}
	ints[i] = STRING_parseInt(str.substring(startpos,str.length));
	return ints;
}

function STRING_parseCommaSeparatedIntsWithLength(str,len) {
	ints = STRING_parseCommaSeparatedInts(str);
	if (ints.length > len) {
		ints.length = len;
	} else if (ints.length < len) {
		for (var i = ints.length; i < len; i++) {
			ints[i] = 0;
		}
	}
	return ints;
}

function STRING_concatentateStringArray(strs) {
	str = '';
	for (var i = 0; i < strs.length; i++) {
		str += strs[i];
	}
	return str;
}

function STRING_parseUsingLengthArray(str,lens) {
	strs = new Array();
	startpos = 0;
	for (var i = 0; i < lens.length; i++) {
		strs[i] = str.substr(startpos,lens[i]);
		startpos += lens[i];
	}
	return strs;
}

// Textarea methods

function TEXTAREA_checkLength(textarea,maxlen) {
	if (textarea.value.length < maxlen) {
		return true;
	}
	return false;
}