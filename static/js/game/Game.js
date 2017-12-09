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

	this.obstacleTypes = [WallObstacle, HoleObstacle];
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
	{
		fullObstacle.update(this.obstacleSpeed + this.player.altitude / 3);

		if (fullObstacle.checkDeath(this.player))
		{
			this.isRunning = false;
			elementManager.gameDeathScreen();
		}
	}

	if (this.fullObstacles[0].y + this.fullObstacles[0].height < 0)
	{
		this.fullObstacles.shift();
		this.score += 1;
		scoreEl.innerText = this.score;
	}

	if (this.obstacleSpeed < 12) this.obstacleSpeed += 0.001;
	if (this.obstacleSpacing > 200) this.obstacleSpacing -= 0.02;
	if (this.secondObstacleChance < 75) this.secondObstacleChance += 0.01;
}

Game.prototype.draw = function()
{
	ctx.clear();
	ctx.altitude = -this.player.altitude * 0.7;

	ctx.fill("#eee");
	ctx.rect(400, 0, 2, 1600);
	ctx.rect(0, 0, 2, 1600);
	ctx.rect(798, 0, 2, 1600);

	for (var fullObstacle of this.fullObstacles)
		fullObstacle.draw();

	this.player.draw();
}