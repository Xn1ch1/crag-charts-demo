document.body.oncontextmenu = (event) => {

	event.preventDefault();
	
	if (document.getElementById('menu-modal').contains(event.target)) return;
	
	document.getElementById('menu-modal').style.display = '';
	
	document.getElementById('menu-modal').style.left = `${event.clientX}px`;
	document.getElementById('menu-modal').style.top = `${event.clientY}px`;
	
}

function hideMenu() {
	
	document.getElementById('menu-modal').style.display = 'none';
	
}
	
	
document.getElementById('menu-modal-head').ondragstart = function() {
	return false;
};

document.getElementById('menu-modal-head').onmousedown = function(event) {

	const target = event.target;
	target.style.cursor = 'grab';

	let shiftX = event.clientX - document.getElementById('menu-modal').getBoundingClientRect().left;
	let shiftY = event.clientY - document.getElementById('menu-modal').getBoundingClientRect().top;

	// centers the ball at (pageX, pageY) coordinates
	function moveAt(pageX, pageY) {
		document.getElementById('menu-modal').style.left = pageX - shiftX + 'px';
		document.getElementById('menu-modal').style.top = pageY - shiftY + 'px';
	}

	// move our absolutely positioned ball under the pointer
	moveAt(event.pageX, event.pageY);

	function onMouseMove(event) {
		moveAt(event.pageX, event.pageY);
	}

	// (2) move the ball on mousemove
	document.addEventListener('mousemove', onMouseMove);

	// (3) drop the ball, remove unneeded handlers
	document.getElementById('menu-modal').onmouseup = function() {

		target.style.cursor = '';

		document.removeEventListener('mousemove', onMouseMove);
		document.getElementById('menu-modal').onmouseup = null;

	};

}
