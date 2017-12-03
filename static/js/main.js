function main()
{
	/*var TEMP*/ elementManager = new ElementManager();

	document.body.onclick = function()
	{
		if (elementManager.screenState == 1 && elementManager.popupState == 0)
		{
			elementManager.gamePlayingScreen();
			initGame();
		}
		else if (elementManager.popupState > 0)
		{
			elementManager.hidePopup();
		}
	}

	playButton.addEventListener("click", initGame);

	player = new Player();
	var ctx = canvas.getContext("2d");
	requestAnimationFrame(() => tick(ctx));
}