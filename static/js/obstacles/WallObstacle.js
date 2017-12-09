function WallObstacle(side, y)
{
	this.width = 400;
	this.height = 75;
	this.x = side == "left" ? 0 : 400;
	this.yOffset = 0;
	this.cb1 = new CollisionBox(400, 50);
	this.sprite = "wall";
}

WallObstacle.prototype.update = function(){}

WallObstacle.prototype.checkDeath = function(player, y)
{
	return player.altitude == 0 && this.cb1.checkCollision(this.x, y + 13 + this.yOffset, player.x, player.y, player.size);
}

WallObstacle.prototype.draw = function(y)
{
	ctx.img(this.sprite, this.x, y + this.yOffset, this.sprite == "wall" ? this.width : this.width * 2, this.height);
}

WallObstacle.prototype.takeMaxHeightIntoAccount = function(maxHeight)
{
	this.yOffset = maxHeight / 2 - this.height / 2;
}

WallObstacle.prototype.takeSameObstacleIntoAccount = function()
{
	if (this.x == 0)
		this.sprite = "full_wall";
	else
		this.sprite = "TRANSPARENT";
}