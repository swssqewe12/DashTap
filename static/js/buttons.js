playButton.onclick = function()
{
	playButton.classList.add("selected");
	storeButton.classList.add("hidden");
	tutorialButton.classList.add("hidden");
	gameName.classList.add("hidden");
	back.classList.add("visible");
	canvas.classList.add("visible");
	overlay.classList.add("hidden");
}

storeButton.onclick = function()
{
	playButton.classList.add("hidden");
	storeButton.classList.add("selected");
	tutorialButton.classList.add("hidden");
	gameName.classList.add("hidden");
	back.classList.add("visible");
}

tutorialButton.onclick = function()
{
	playButton.classList.add("hidden");
	storeButton.classList.add("hidden");
	tutorialButton.classList.add("selected");
	gameName.classList.add("hidden");
	back.classList.add("visible");
}

back.onclick = function()
{
	playButton.classList.remove("selected");
	storeButton.classList.remove("selected");
	tutorialButton.classList.remove("selected");
	playButton.classList.remove("hidden");
	storeButton.classList.remove("hidden");
	tutorialButton.classList.remove("hidden");
	gameName.classList.remove("hidden");
	back.classList.remove("visible");
	canvas.classList.remove("visible");
	overlay.classList.remove("hidden");
}