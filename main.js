$(document).ready(function () {
	$('#myform').validate({
		rules: {
			name: {
				required: true,
			},
			email: {
				required: true,
			},
			radio: {
				required: true,
			},
			message: {
				required: true,
			},
			url_name: {
				required: true,
			},
		},
		messages: {
			name: {
				required: 'Please enter a valid name <br/>',
			},
			email: {
				required: 'Please enter a valid email <br/>',
			},
			radio: {
				required: 'Please select an option <br/>',
			},
			url_name: {
				required: 'Please enter a competitior URL',
			},
			message: {
				required: 'Please enter a message in your enquiry.',
			},
		},

		errorPlacement: function (error, element) {
			if (element.prop('type') === 'radio') {
				error.insertBefore(element);
			} else {
				error.insertBefore(element);
			}
		},
	});

	$('#message').keyup(function () {
		el = $(this);
		if (el.val().length >= 201) {
			el.val(el.val().substr(0, 200));
		} else {
			$('#characters').text('(' + el.val().length + '/200)');
		}
	});

	//Removes the default checked radio button, setting it to false
	$('input[name=radio]').attr('checked', false);
});

//Creating consts for each button with their unique id
const button1 = document.querySelector('#size-button');
const button2 = document.querySelector('#size-button2');
const button3 = document.querySelector('#size-button3');
const button4 = document.querySelector('#size-button4');
const button5 = document.querySelector('#size-button5');

//Listens for a click event on each button
if (button1) {
	button1.addEventListener('click', button1Clicked);
}
if (button2) {
	button2.addEventListener('click', button2Clicked);
}
if (button3) {
	button3.addEventListener('click', button3Clicked);
}
if (button4) {
	button4.addEventListener('click', button4Clicked);
}
if (button5) {
	button5.addEventListener('click', button5Clicked);
}

//Add background and border to button1 when user selects their preferred size.
function button1Clicked() {
	button1.style.background = '#94e990';
	button1.style.border = '1px solid #20c76e';

	button2.style.background = 'none';
	button3.style.background = 'none';
	button4.style.background = 'none';
	button5.style.background = 'none';

	button2.style.border = '1px solid #e3e3e3';
	button3.style.border = '1px solid #e3e3e3';
	button4.style.border = '1px solid #e3e3e3';
	button5.style.border = '1px solid #e3e3e3';
}

//Add background and border to button2 when user selects their preferred size.
function button2Clicked() {
	button2.style.background = '#94e990';
	button2.style.border = '1px solid #20c76e';

	button1.style.background = 'none';
	button3.style.background = 'none';
	button4.style.background = 'none';
	button5.style.background = 'none';

	button1.style.border = '1px solid #e3e3e3';
	button3.style.border = '1px solid #e3e3e3';
	button4.style.border = '1px solid #e3e3e3';
	button5.style.border = '1px solid #e3e3e3';
}

//Add background and border to button3 when user selects their preferred size.
function button3Clicked() {
	button3.style.background = '#94e990';
	button3.style.border = '1px solid #20c76e';

	button1.style.background = 'none';
	button2.style.background = 'none';
	button4.style.background = 'none';
	button5.style.background = 'none';

	button1.style.border = '1px solid #e3e3e3';
	button2.style.border = '1px solid #e3e3e3';
	button4.style.border = '1px solid #e3e3e3';
	button5.style.border = '1px solid #e3e3e3';
}

//Add background and border to button4 when user selects their preferred size.
function button4Clicked() {
	button4.style.background = '#94e990';
	button4.style.border = '1px solid #20c76e';

	button1.style.background = 'none';
	button2.style.background = 'none';
	button3.style.background = 'none';
	button5.style.background = 'none';

	button1.style.border = '1px solid #e3e3e3';
	button2.style.border = '1px solid #e3e3e3';
	button3.style.border = '1px solid #e3e3e3';
	button5.style.border = '1px solid #e3e3e3';
}

//Add background and border to button5 when user selects their preferred size.
function button5Clicked() {
	button5.style.background = '#94e990';
	button5.style.border = '1px solid #20c76e';

	button1.style.background = 'none';
	button2.style.background = 'none';
	button3.style.background = 'none';
	button4.style.background = 'none';

	button1.style.border = '1px solid #e3e3e3';
	button2.style.border = '1px solid #e3e3e3';
	button3.style.border = '1px solid #e3e3e3';
	button4.style.border = '1px solid #e3e3e3';
}

//Creating constants for radio buttons and url section
const yes = document.querySelector('#radio1');
const no = document.querySelector('#radio2');
const url = document.querySelector('#url');
const asterisk = document.querySelector('#asterisk');

//Listens for a click event on each radio buttons
if (yes) {
	yes.addEventListener('click', yesSelected);
}
if (no) {
	no.addEventListener('click', noSelected);
}

//Displays the competitor URL section
function yesSelected() {
	url.style.display = 'block';
	asterisk.style.marginTop = '1rem';
}

//Hides the competitor URL section
function noSelected() {
	url.style.display = 'none';
	asterisk.style.marginTop = '5rem';
}

const urlName = new URL(location.href);
const sizeLists = document.getElementById('size-lists');
const app = document.getElementById('app');

if (sizeLists) {
	sizeLists.addEventListener('click', (evt) => {
		let clickedButton = evt.target;
		let btnValue = clickedButton.value;
		document.getElementById('sizeOpt').value = btnValue;
	});
}

if (app) {
	app.innerHTML = `
		<label>Full Name: </label> <label class="summary-info">${
			urlName.searchParams.get('name') || 'N/A'
		} </label>
		<br /><br />

		<label>Email:</label> <label class="summary-info"> ${
			urlName.searchParams.get('email') || 'N/A'
		} </label>  <br /><br />

		<label>Size of item selected:</label> <label class="buttons-selected summary-info">${
			urlName.searchParams.get('sizes') || 'N/A'
		} </label>
		 <br /><br />

		<label>Have you found this item cheaper on a competitor website? </label> <label class="buttons-selected summary-info">${
			urlName.searchParams.get('radio') || 'N/A'
		} </label>  <br /><br />

		<label>Competitor URL:</label> <label class="summary-info"> ${
			urlName.searchParams.get('url_name') || 'N/A'
		}</label>  <br /><br />

		<label id="msg">Enquiry Message:</label> <br/> <label class="summary-info summary-msg">"${
			urlName.searchParams.get('message') || 'N/A'
		}" </label> <br/>

		<form action="./mailHandler.php" method="POST" data-netlify="true"> 
			<input type="submit" class="btn finish-btn" value="Finish">
		</form>
				
		`;
}