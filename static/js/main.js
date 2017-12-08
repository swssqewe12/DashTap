var ctx, elementManager;

function main()
{
	elementManager = new ElementManager();
	var game = new Game();
	ctx = new Context(canvas);

	document.body.onclick = function()
	{
		if (elementManager.screenState == 1 && elementManager.popupState == 0)
		{
			elementManager.gamePlayingScreen();
			game.reset();
		}
		else if (elementManager.popupState > 0)
		{
			elementManager.hidePopup();
		}
	}

	playButton.addEventListener("click", game.reset);
}