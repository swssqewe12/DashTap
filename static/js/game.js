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
	ctx.setAltitudeRelativePoint(this.player.x + this.player.size / 2, this.player.y + this.player.size / 2);
}

Game.prototype.draw = function()
{
	ctx.clear();
	this.player.draw();
	ctx.altitude = -this.player.altitude * 0.7;
	ctx.fill("brown");
	ctx.rect(0, 450, 400, 50);
}