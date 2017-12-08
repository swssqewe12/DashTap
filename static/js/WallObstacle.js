function WallObstacle(side, y)
{
	this.width = 400;
	this.height = 50;
	this.x = side == "left" ? 0 : 400;
}

WallObstacle.prototype.update = function(){}

WallObstacle.prototype.checkDeath = function(player, y)
{
	return player.altitude == 0 && player.x < this.x + this.width && player.x + player.size > this.x && player.y < y + this.height && player.y + player.size > y
}

WallObstacle.prototype.draw = function(y)
{
	ctx.fill("gray");
	ctx.rect(this.x, y, this.width, this.height)
}
