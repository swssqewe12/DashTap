function Game()
{
	this.isRunning = false;

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

	this.obstacleTypes = [WallObstacle];
	this.passableObstacleTypes = [WallObstacle];
	this.secondObstacleChance = 25;
	this.obstacleSpacing = 500;
	this.obstacleSpeed = 6;
	this.score = 0;
	this.player = new Player();
	this.fullObstacles = [new FullObstacle(800, this.obstacleTypes, this.passableObstacleTypes, this.secondObstacleChance)];

	this.isRunning = true;

	scoreEl.innerText = this.score;
}

Game.prototype.update = function()
{
	this.player.update();
	ctx.setAltitudeRelativePoint(this.player.x + this.player.size / 2, this.player.y + this.player.size / 2);

	var last = this.fullObstacles.last();
	if (ctx.getHeight() > last.y + last.height + this.obstacleSpacing)
		this.fullObstacles.push(new FullObstacle(last.y + last.height + this.obstacleSpacing, this.obstacleTypes, this.passableObstacleTypes, this.secondObstacleChance));

	for (var fullObstacle of this.fullObstacles)
		fullObstacle.update(this.obstacleSpeed + this.player.altitude / 6);

	if (this.fullObstacles[0].y + this.fullObstacles[0].height < 0)
	{
		this.fullObstacles.shift();
		this.score += 1;
		scoreEl.innerText = this.score;
	}
}

Game.prototype.draw = function()
{
	ctx.clear();
	ctx.altitude = -this.player.altitude * 0.7;

	for (var fullObstacle of this.fullObstacles)
		fullObstacle.draw();

	this.player.draw();
}