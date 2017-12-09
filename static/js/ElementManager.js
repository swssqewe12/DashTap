function ElementManager()
{
	this.screenState = 0;
	/*	0 - Launch Screen
		1 - Game Screen
		2 - Game Playing Screen
	*/
	this.popupState = 0;
	/*	0 - No popup
		1 - Store
		2 - Notifications
	*/

	playButton.addEventListener("click", () => {this.gameScreen(); this.gamePlayingScreen.bind(this)});
	playButton.addEventListener("touchstart", () => {this.gameScreen(); this.gamePlayingScreen.bind(this)});
	storeButton.onclick = this.storeButtonClick.bind(this);
	storeButton.ontouchend = this.storeButtonClick.bind(this);
	notButton.onclick = this.notificationButtonClick.bind(this);
	notButton.ontouchend = this.notificationButtonClick.bind(this);
}

ElementManager.prototype.menuScreen = function()
{
	this.screenState = 0;
	title.classList.add("visible");
	playButton.classList.add("visible");
	overlay.classList.remove("opaque");
	scoreEl.classList.remove("visible");
	tapText.classList.remove("visible");
	setTimeout(() => canvas.classList.remove("visible"), 300);
}

ElementManager.prototype.gameScreen = function(event)
{
	if (event) event.preventDefault();

	this.screenState = 1;
	title.classList.remove("visible");
	playButton.classList.remove("visible");
	overlay.classList.add("opaque");
	scoreEl.classList.add("visible");
	canvas.classList.add("visible");
}

ElementManager.prototype.gamePlayingScreen = function(event)
{
	if (event) event.preventDefault();

	this.screenState = 2;
	overlay.classList.remove("visible");
	storeButton.classList.remove("visible");
	notButton.classList.remove("visible");
	scoreEl.classList.add("black");
	tapText.classList.remove("visible");
}

ElementManager.prototype.gameDeathScreen = function()
{
	this.screenState = 1;
	overlay.classList.add("visible");
	storeButton.classList.add("visible");
	notButton.classList.add("visible");
	scoreEl.classList.remove("black");
	tapText.classList.add("visible");
}

/*function endGame()
{
	temporaryNoClick = true;
	setTimeout(function() {temporaryNoClick = false}, 500);
	
}*/

ElementManager.prototype.notificationsPopup = function()
{
	this.popupState = 2;
	title.classList.add("noanimation");
	playButton.classList.add("noanimation");
	scoreEl.classList.add("noanimation");
	tapText.classList.add("noanimation");
	this.menuScreen();
	setTimeout(function() {
		title.classList.remove("noanimation");
		playButton.classList.remove("noanimation");
		scoreEl.classList.remove("noanimation");
		tapText.classList.remove("noanimation");
	}, 300)
	notifications.classList.add("visible");
}

ElementManager.prototype.hidePopup = function()
{
	this.popupState = 0;
	notifications.classList.remove("visible");
}

ElementManager.prototype.storeButtonClick = function(event)
{
	event.stopPropagation();
	event.preventDefault();
}

ElementManager.prototype.notificationButtonClick = function(event)
{
	if (this.popupState == 2)
		this.hidePopup();
	else
		this.notificationsPopup();

	event.stopPropagation();
	event.preventDefault();
}