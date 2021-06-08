var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		getList();
		addtoList();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		getList();
		addtoList();
	}
}
function getList(){
	for  (var i = 0; i<list.length; i++){
		list[i].addEventListener("click", toggleEvent);
	}
}

function toggleEvent(){
	this.classList.toggle("done");
}

function addButton(){
	for (var i = 0; i<list.length; i++)
	{
		var delButton = document.createElement("button");
		delButton.appendChild(document.createTextNode("Delete"));
		list[i].appendChild(delButton);
		delButton.addEventListener("click", removeParent);
	}
}

function addtoList(){
		var delButton = document.createElement("button");
		delButton.appendChild(document.createTextNode("Delete"));
		for (var i = 0; i < list.length; i++){
			list[i].appendChild(delButton);
			delButton.addEventListener("click", removeParent);
		}
}

function removeParent(event){
	event.target.parentNode.remove();
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

getList();
addButton();