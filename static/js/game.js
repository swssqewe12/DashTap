function Game()
{
	this.isRunning = false;
	this.player;

	this.tick();
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

	this.player = new Player();

	this.isRunning = true;
}

Game.prototype.update = function()
{
	this.player.update();
}

Game.prototype.draw = function()
{
	ctx.clear();
	this.player.draw();
}