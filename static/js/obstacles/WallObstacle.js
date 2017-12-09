function WallObstacle(side, y)
{
	this.width = 400;
	this.height = 75;
	this.x = side == "left" ? 0 : 400;
	this.cb1 = new CollisionBox(400, 50);
	this.yOffset = 0;
}

WallObstacle.prototype.update = function(){}

WallObstacle.prototype.checkDeath = function(player, y)
{
	return player.altitude == 0 && this.cb1.checkCollision(this.x, y + 13 + this.yOffset, player.x, player.y, player.size);
}

WallObstacle.prototype.draw = function(y)
{
	ctx.img("wall", this.x, y + this.yOffset, this.width, this.height);
}

WallObstacle.prototype.takeMaxHeightIntoAccount = function(maxHeight)
{
	this.yOffset = maxHeight / 2 - this.height / 2;
}