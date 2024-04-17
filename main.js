const inputs = document.getElementsByClassName("form-control");
const submitButton = document.getElementById("js-add-user");
const initialFormData = {
	username: "",
	email: "",
	phoneNumber: "",
	address: "",
};
let formData = initialFormData;

const n = inputs.length;
for (let i = 0; i < n; i++) {
	const item = inputs[i];
	item.onchange = (e) => {
		formData[e.target.name] = e.target.value;
	};
}

submitButton.onclick = (e) => {
	e.preventDefault();
	const userCard = document.createElement("div");
	userCard.className = "card";
	userCard.innerHTML = `
			<div class="card-name">${formData.username}</div>
			<p class="card-field">
				<b>Email:</b>
				${formData.email}
			</p>
			<p class="card-field"><b>Phone number:</b> ${formData.phoneNumber}</p>
			<p class="card-field"><b>Address:</b> ${formData.address}</p>
		`;
	document.body.appendChild(userCard);
	// reset input values
	for (let i = 0; i < n; i++) {
		inputs[i].value = "";
	}
	formData = initialFormData;
};
