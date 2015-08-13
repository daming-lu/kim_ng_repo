function validate(fieldname, fielddata) {
	var pattern = '', datatype = '';
	if (fieldname === 'cc') {
		pattern = '^[0-9]{16}$';
		datatype = '16 Numbers';
	} else if (fieldname === 'cvv') {
		pattern = '^[0-9]{3}$';
		datatype = '3 Numbers';
	} else if (fieldname === 'enddate_month') {
		pattern = '^[0-9]{2}$';
		datatype = '2 Numbers';
	} else if (fieldname === 'enddate_year') {
		pattern = '^[0-9]{4}$';
		datatype = '4 Numbers';
	} else if (fieldname === 'zip') {
		pattern = '^[a-zA-Z0-9\\p{L} \-]{3,9}$';
		datatype = '4-5 Numbers\nor known International Format';
	} else if (fieldname === 'city') {
		pattern = '^[a-zA-Z\\p{L} \.]+$';
		datatype = 'Letters, Spaces, Periods \nor Match in List';
	} else if (fieldname === 'address1') {
		pattern = '^[0-9a-zA-Z\\p{L} \.]+$';
		datatype = 'Numbers, Letters, Spaces, Periods';
	} else if (fieldname === 'firstname' || fieldname === 'lastname') {
		pattern = '^[a-zA-Z\\p{L} ]*$';
		datatype = 'Letters, Spaces';
	} else if (fieldname === 'country') {
		pattern = '^[A-Z\\p{L}]{2}$';
		datatype = '2 CAPITAL LETTERS\nor Match in List';
	} else if (fieldname === 'state') {
		pattern = '^([A-Z0-9]{1,3}|[a-zA-Z\\p{L} -]+)$';
		datatype = '1-3 CAPITAL LETTERS or Numbers\nor Match in List';
	} else if (fieldname === 'email') {
		pattern = '^([\\p{L}a-zA-Z0-9\.\_\-]+)@([\\p{L}a-zA-Z0-9\.\_\-]+)\.([\\p{L}a-zA-Z]{2,5})$';
		datatype = 'a Standard Email Address';
	} else if (fieldname === 'phone') {
		pattern = '^[0-9\-\+\(\) ]{7,16}$';
		datatype = 'a known phone format, e.g. +1-234-567-8901';
	}

	if (pattern !== '') {
		patt1 = XRegExp(pattern);
		if (patt1.test(fielddata) === false) {
			return "\n" + fieldname + " did not validate as: " + datatype;
		}
	}
	return '';
}

var labels_states = Array('US','AU','AT','BR','DE','IN','MY','MX','FM','NG','KN','SO','SS','SD','VE'),
labels_provinces = Array('AF','DZ','AO','AR','AM','BY','BE','BO','BG','BF','BI','KH','CA','CL','CR','CO','CU','CD','DO','GQ','FJ','FI','GA','GR','ID','IR','IE','IT','KZ','KE','KG','LA','MG','MN','MZ','NL','KP','OM','PK','PA','PG','PE','PH','RW','ST','SA','SL','SB','ZA','KR','ES','LK','TJ','TH','TR','TM','UA','UZ','VU','VN','ZM','ZW'),
labels_regions = Array('GB','BA','KM','ET','IQ','NP','RU','CH','AE'),
label_text = '';

function check() {
	ShowExit=false;
	var x = 'Fill in:', y = '';
	if ($('#first_name').length && $('#first_name').val() == '') {
		x = x + "\nfirstname";
	} else {
		//y = y + validate('firstname', $('#firstname').val());
	}
	if ($('#last_name').length && $('#last_name').val() == '') {
		x = x + "\nlastname";
	} else {
		//y = y + validate('lastname', $('#lastname').val());
	}
	if ($('#email').length && $('#email').val() == '') {
		x = x + "\nemail";
	} else if ($('#email').length) {
		var str = $('#email').val().trim();
		$('#email').val(str);
		y = y + validate('email', $('#email').val());
	}
	if ($('#phone').length && $('#phone').val() == '') {
		x = x + "\nphone";
	} else {
		//y = y + validate('phone', $('#phone').val());
	}
	if ($('#country').length && $('#country').val() == '') {
		x = x + "\ncountry";
	} else {
		//y = y + validate('country', $('#country').val());
	}
	if ($('#address1').length && $('#address1').val() == '') {
		x = x + "\naddress";
	} else {
		//y = y + validate('address1', $('#address1').val());
	}
	if ($('#city').length && $('#city').val() == '') {
		x = x + "\ncity";
	} else {
		//y = y + validate('city', $('#city').val());
	}
	if ($('#state').length && $('#state').val() == '') {
		x = x + "\nstate";
	} else {
		//y = y + validate('state', $('#state').val());
	}
	if ($('#zip').length && $('#zip').val() == '') {
		x = x + "\nzip";
	} else {
		//y = y + validate('zip', $('#zip').val());
	}
	if ($('#cc').length && $('#cc').val() == '') {
		x = x + "\ncc";
	} else {
		//y = y + validate('cc', $('#cc').val());
	}
	if ($('#cvv').length && $('#cvv').val() == '') {
		x = x + "\ncvv";
	} else {
		//y = y + validate('cvv', $('#cvv').val());
	}
	if ($('#enddate_month').length && $('#enddate_month').val() == '') {
		x = x + "\nenddate_month";
	} else {
		//y = y + validate('enddate_month', $('#enddate_month').val());
	}
	if ($('#enddate_year').length && $('#enddate_year').val() == '') {
		x = x + "\nenddate_year";
	} else {
		//y = y + validate('enddate_year', $('#enddate_year').val());
	}
	if ($('#terms').length && $('#terms').is(':checked') == false) {
		x = x + "\nterms";
	} else {
		//y = y + validate('cvv', $('#terms').val());
	}
	x = x + y;
	if (x != 'Fill in:') {
		alert(x);
		return false;
	}
	if (y != '')
	{
		alert(y);
	}
	return true;
}
