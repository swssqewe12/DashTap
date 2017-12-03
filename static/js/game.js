function Game()
{
	this.isRunning = false;
}

Game.prototype.tick = function()
{
	if (this.isRunning)
	{
		this.update();
		this.draw();
	}

	requestAnimationFrame(this.tick.bind(this))
}

Game.prototype.reset = function()
{
	window.onresize();
	this.isRunning = true;
}

Game.prototype.update = function()
{

}

Game.prototype.draw = function()
{

}