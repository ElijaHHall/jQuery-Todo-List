// Your jQuery Logic will go here

// const todoList = document.getElementByid("todoListForm");
// 	todoList.addEventListener("add", function(e) {
// 		e.preventDefault();

// 		const value = todoList.querySelector("input[type="text"]").value;

// 		console.log(value);

// 	}); 

$(function() {
	
	const $form = $("#todoListForm");

	$form.on("submit", function(event) {
	event.preventDefault();

	let $inputValue = $("#todoListInput").val();

	$("ol").append("<li>" + $inputValue + "</li>");

	$inputValue = $("#todoListInput").val('');

	});

	$("#clickThis").click(function() {
		alert("Hang In There Baby" + ":3");
	});
	
});	



	
