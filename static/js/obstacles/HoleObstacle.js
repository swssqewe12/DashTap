function HoleObstacle(side, y)
{
	this.width = 360;
	this.height = 360;
	this.x = 20 + (side == "left" ? 0 : 400);
}

HoleObstacle.prototype.update = function(){}

HoleObstacle.prototype.checkDeath = function(player, y)
{
	return player.altitude == 0 && player.x < this.x + this.width && player.x + player.size > this.x && player.y < y + this.height && player.y + player.size > y
}

HoleObstacle.prototype.draw = function(y)
{
	ctx.fill("black");
	ctx.rect(this.x, y, this.width, this.height)
}
