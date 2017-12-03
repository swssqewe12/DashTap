function WallObstacle(side)
{
	this.w = 400;
	this.h = 50;
	this.x = side == "left" ? 0 : 400;
	this.y = oy() - this.h;
}

WallObstacle.prototype.update = function()
{
	this.y += obstSpeed * obSpIncMult;

	/*if (player.y - 50 > this.y && player.y < this.y + this.h)
		endGame();*/
}

WallObstacle.prototype.draw = function(ctx)
{
	ctx.fillStyle = "blue";
	ctx.fillRect(rx(this.x), ry(this.y), rs(this.w), rs(this.h))
}