var app = app || {};


app.Animation = (function () {

	var banner = document.getElementById('banner');
	var t = TweenMax;
	var tl = new TimelineMax();

	var txt1 = document.getElementById('txt1');
	var txt2 = document.getElementById('txt2');
	var txt3 = document.getElementById('txt3');
	var txt4 = document.getElementById('txt4');

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});

		t.set(txt2, {opacity:0, y:"-=20"});
		t.set(txt3, {opacity:0, y:"-=20"});
		t.set(txt4, {opacity:0, y:"-=20"});

		
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		tl.to(txt1, .5, {opacity: 0}, "+=2")
		.to(txt2, .5, {y:"+=20", opacity: 1, ease: Sine.easeOut})

		.to(txt2, .5, {opacity: 0}, "+=2")
		.to(txt3, .5, {y:"+=20", opacity: 1, ease: Sine.easeOut})

		.to(txt3, .5, {opacity: 0}, "+=2")
		.to(txt4, .5, {y:"+=20", opacity: 1, ease: Sine.easeOut});
		
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
