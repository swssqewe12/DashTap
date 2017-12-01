var screenState = 0;
// 0 -- Launch screen
// 1 -- Game screen
// 2 -- Game playing screen

var popupState = 0;
// 0 -- No popup
// 1 -- Store
// 2 -- Notifications

function gameScreen()
{
	screenState = 1;
	title.classList.remove("visible");
	playButton.classList.remove("visible");
	overlay.classList.add("opaque");
	score.classList.add("visible");
}

function startGame()
{
	screenState = 2;
	overlay.classList.remove("visible");
	storeButton.classList.remove("visible");
	notButton.classList.remove("visible");
	score.classList.add("black");
	tapText.classList.remove("visible");
	setTimeout(endGame, 2000);
}

function endGame()
{
	screenState = 1;
	overlay.classList.add("visible");
	storeButton.classList.add("visible");
	notButton.classList.add("visible");
	score.classList.remove("black");
	tapText.classList.add("visible");
}

storeButton.onclick = function(event)
{
	popupState = 1;
	backButton.classList.add("visible");
	popupTitle.classList.add("visible");
	storePopup.classList.add("visible");
	popupTitle.innerText = "Store";
	event.stopPropagation();
}

notButton.onclick = function(event)
{
	popupState = 2;
	backButton.classList.add("visible");
	popupTitle.classList.add("visible");
	notPopup.classList.add("visible");
	popupTitle.innerText = "Notifications";
	event.stopPropagation();
}

backButton.onclick = function(event)
{
	popupState = 0;
	backButton.classList.remove("visible");
	popupTitle.classList.remove("visible");
	storePopup.classList.remove("visible");
	notPopup.classList.remove("visible");
	event.stopPropagation();
}

document.body.onclick = function()
{
	if (screenState == 1 && popupState == 0)
		startGame();
}