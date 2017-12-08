function WallObstacle(side, y)
{
	this.width = 400;
	this.height = 50;
	this.x = side == "left" ? 0 : 400;
}

WallObstacle.prototype.update = function(obstacleSpeed)
{

	/*if (player.y - 50 > this.y && player.y < this.y + this.h)
		endGame();*/
}

WallObstacle.prototype.draw = function(y)
{
	ctx.fill("gray");
	ctx.rect(this.x, y, this.width, this.height)
}