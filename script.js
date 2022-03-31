var londonModel = document.querySelector('#london');
var	kyivModel = document.querySelector('#kyiv');
var cuboneModel = document.querySelector('#cubone');
var diglettModel = document.querySelector('#diglett');
var marillModel = document.querySelector('#marill');

let pikachuSound = 'sounds/Pikachu.m4a';
let pikachuSoundElement = new Audio(pikachuSound);
let charmanderSound = 'sounds/Charmander.m4a';
let charmanderSoundElement = new Audio(charmanderSound);
let cuboneSound = 'sounds/Cubone.m4a';
let cuboneSoundElement = new Audio(cuboneSound);
let diglettSound = 'sounds/Diglett.m4a';
let diglettSoundElement = new Audio(diglettSound);
let marillSound = 'sounds/Marill.m4a';
let marillSoundElement = new Audio(marillSound);





var	rotateBtn = $(".rotate");
var	scaleBtn = $(".scale");
var	charmanderBtn = $(".charmander");
var pikachuBtn = $(".pikachu");
var cuboneBtn = $(".cubone");
var diglettBtn = $(".diglett");
var marillBtn = $(".marill");




var	gotitBtn = $(".gotit"); 


gotitBtn.click(function(){
	gotitBtn.parent().css({
		display: "none"
	});
});


var buttons = $('button');
buttons.click(function() {
	buttons.css('background-color', '#ffc21e');
	$(this).css('background-color', '#f45');
  });



rotateBtn.click(function(){
	if (rotateBtn.hasClass("rotate_fade")){
		londonModel.emit('endRotate');
		kyivModel.emit('endRotate');
		cuboneModel.emit('endRotate');
		diglettModel.emit('endRotate');
		marillModel.emit('endRotate');
		rotateBtn.removeClass("rotate_fade");
	} else {
		londonModel.emit('rotate');
		kyivModel.emit('rotate');
		cuboneModel.emit('rotate');
		diglettModel.emit('rotate');
		marillModel.emit('rotate');
		rotateBtn.addClass("rotate_fade");
	}
});

var scaleFlag = 0,
		kyivFlag = false;

scaleBtn.click(function(){
	if (scaleFlag == 0){
		scaleFlag = 1;
		londonModel.setAttribute("scale", scale="0.55 0.55 0.55");
		kyivModel.setAttribute("scale", scale="0.55 0.55 0.55");
		diglettModel.setAttribute("scale", scale="0.55 0.55 0.55");
		cuboneModel.setAttribute("scale", scale="0.75 0.75 0.75");
		marillModel.setAttribute("scale", scale="0.75 0.75 0.75");
		scaleBtn.addClass("scale_one");
	} else if (scaleFlag == 1) {
		scaleFlag = 2;
		londonModel.setAttribute("scale", scale="0.7 0.7 0.7");
		kyivModel.setAttribute("scale", scale="0.7 0.7 0.7");
		diglettModel.setAttribute("scale", scale="0.7 0.7 0.7");
		cuboneModel.setAttribute("scale", scale="0.9 0.9 0.9");
		marillModel.setAttribute("scale", scale="0.9 0.9 0.9");
		scaleBtn.addClass("scale_two");
		scaleBtn.removeClass("scale_one");
	} else if (scaleFlag == 2) {
		scaleFlag = 0;
		londonModel.setAttribute("scale", scale="0.4 0.4 0.4");
		kyivModel.setAttribute("scale", scale="0.4 0.4 0.4");
		cuboneModel.setAttribute("scale", scale="0.6 0.6 0.6");
		diglettModel.setAttribute("scale", scale="0.4 0.4 0.4");
		marillModel.setAttribute("scale", scale="0.6 0.6 0.6");
		scaleBtn.removeClass("scale_two");
	}
});

// switchBtn.click(function(){
// 	// londonModel.setAttribute("visible", true);
// 	if (kyivFlag == false){
// 		kyivFlag = true;
// 		switchBtn.html("Pikachu");
// 		londonModel.setAttribute("visible", false);
// 		kyivModel.setAttribute("visible", true);
// 	} else if(cubone == false){
// 	}else{
// 		kyivFlag = false
// 		switchBtn.html("Charmander");
// 		londonModel.setAttribute("visible", true);
// 		kyivModel.setAttribute("visible", false);
// 	}
// });


// function changeBtnColor(){
// 	if (charmanderBtn.hasClass("rotate_fade")){
// 		charmanderBtn.removeClass("rotate_fade");
// 		} else {
// 		charmanderBtn.addClass("rotate_fade");}
// }

charmanderBtn.click(function(){
	// charmanderBtn.css('background-color','#ffc21e');
	// $(this).css('background-color','#f45');
	window.navigator.vibrate(200);
	charmanderSoundElement.play();
	londonModel.setAttribute("visible", true);
	kyivModel.setAttribute("visible", false);
	cuboneModel.setAttribute("visible", false);
	diglettModel.setAttribute("visible", false);
	marillModel.setAttribute("visible", false);
	}
);


pikachuBtn.click(function(){
	// if (pikachuBtn.hasClass("rotate_fade")){
	// 	pikachuBtn.removeClass("rotate_fade");
	// } else {
	// 	charmanderBtn.addClass("rotate_fade");}
	// pikachuBtn.css('background-color','#ffc21e');
	// $(this).css('background-color','#f45');
	window.navigator.vibrate(200);
	pikachuSoundElement.play();

	londonModel.setAttribute("visible", false);
	cuboneModel.setAttribute("visible", false);
	kyivModel.setAttribute("visible", true);
	diglettModel.setAttribute("visible", false);
	marillModel.setAttribute("visible", false);

	});

cuboneBtn.click(function(){
	// cuboneBtn.css('background-color','#ffc21e');
	// $(this).css('background-color','#f45');
	window.navigator.vibrate(200);
	cuboneSoundElement.play();

	londonModel.setAttribute("visible", false);
	cuboneModel.setAttribute("visible", true);
	kyivModel.setAttribute("visible", false);
	diglettModel.setAttribute("visible", false);
	marillModel.setAttribute("visible", false);
	
	});

diglettBtn.click(function(){
	// diglettBtn.css('background-color','#ffc21e');
	// $(this).css('background-color','#f45');
	window.navigator.vibrate(200);
	diglettSoundElement.play();

	londonModel.setAttribute("visible", false);
	cuboneModel.setAttribute("visible", false);
	kyivModel.setAttribute("visible", false);
	diglettModel.setAttribute("visible", true);
	marillModel.setAttribute("visible", false);

	});

marillBtn.click(function(){
	// marillBtn.css('background-color','#ffc21e');
	// $(this).css('background-color','#f45');
	window.navigator.vibrate(200);
	marillSoundElement.play();

	marillModel.setAttribute("visible", true);
	londonModel.setAttribute("visible", false);
	cuboneModel.setAttribute("visible", false);
	kyivModel.setAttribute("visible", false);
	diglettModel.setAttribute("visible", false);
	});

