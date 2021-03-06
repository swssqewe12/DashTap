var screenState = 0;
// 0 -- Launch screen
// 1 -- Game screen
// 2 -- Game playing screen

var popupState = 0;
// 0 -- No popup
// 1 -- Store
// 2 -- Notifications

var temporaryNoClick = false;

function menuScreen()
{
	screenState = 0;
	title.classList.add("visible");
	playButton.classList.add("visible");
	overlay.classList.remove("opaque");
	score.classList.remove("visible");
	tapText.classList.remove("visible");
	setTimeout(() => canvas.classList.remove("visible"), 300);
}

function gameScreen()
{
	screenState = 1;
	title.classList.remove("visible");
	playButton.classList.remove("visible");
	overlay.classList.add("opaque");
	score.classList.add("visible");
	canvas.classList.add("visible");
}

function startGame()
{
	screenState = 2;
	overlay.classList.remove("visible");
	storeButton.classList.remove("visible");
	notButton.classList.remove("visible");
	score.classList.add("black");
	tapText.classList.remove("visible");
	window.onresize();
	initGame();
}

function endGame()
{
	temporaryNoClick = true;
	setTimeout(function() {temporaryNoClick = false}, 500);
	screenState = 1;
	overlay.classList.add("visible");
	storeButton.classList.add("visible");
	notButton.classList.add("visible");
	score.classList.remove("black");
	tapText.classList.add("visible");
}

function showNotifications()
{
	popupState = 2;
	title.classList.add("noanimation");
	playButton.classList.add("noanimation");
	score.classList.add("noanimation");
	tapText.classList.add("noanimation");
	menuScreen();
	setTimeout(function() {
		title.classList.remove("noanimation");
		playButton.classList.remove("noanimation");
		score.classList.remove("noanimation");
		tapText.classList.remove("noanimation");
	}, 300)
	notifications.classList.add("visible");
}

function hideNotifications()
{
	popupState = 0;
	notifications.classList.remove("visible");
}

storeButton.onclick = function(event)
{
	//popupState = 1;
	event.stopPropagation();
}

notButton.onclick = function(event)
{
	if (popupState == 2)
	{
		hideNotifications();
		return;
	}

	showNotifications();
	event.stopPropagation();
}

document.body.onclick = function()
{
	if (screenState == 1 && popupState == 0 && temporaryNoClick == false)
		startGame();
	else if (popupState == 2)
		hideNotifications();

}