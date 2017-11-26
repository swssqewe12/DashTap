var state = 0;

var score = 0;

playButton.onclick = function()
{
	playButton.classList.add("selected");
	storeButton.classList.add("hidden");
	tutorialButton.classList.add("hidden");
	gameName.classList.add("hidden");
	back.classList.add("visible");
	canvas.classList.add("visible");
	tapToStart.classList.add("visible");
	overlay.classList.add("morevisible");
	scoreel.classList.remove("hidden");
	setTimeout(() => state = 1, 100);
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
	tapToStart.classList.remove("visible");
	overlay.classList.remove("morevisible");
	scoreel.classList.add("hidden");
	state = 0;
}

document.body.onclick = function()
{
	if (state == 1)
	{

		back.classList.remove("visible");
		tapToStart.classList.remove("visible");
		overlay.classList.add("hidden");
		scoreel.classList.add("black");
		state = 2;
		score = 0;
		setTimeout(dieCss, 6000);
	}
}

function dieCss()
{
	back.classList.add("visible");
	tapToStart.classList.add("visible");
	overlay.classList.remove("hidden");
	scoreel.classList.remove("black");
	state = 1;
}

setInterval(function() {
	if (state == 2)
	{
		score ++;
		scoreel.innerText = score;
	}
}, 1100)