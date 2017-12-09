var ctx, elementManager;

function main()
{
	elementManager = new ElementManager();
	var game = new Game();
	ctx = new Context(canvas);

	var click = function(event)
	{
		event.preventDefault();

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

	document.body.onclick = click;
	document.body.ontouchend = click;

	playButton.addEventListener("click", game.reset);
	playButton.addEventListener("touchstart", game.reset);
}