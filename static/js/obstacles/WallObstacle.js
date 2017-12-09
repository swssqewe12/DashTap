function WallObstacle(side, y)
{
	this.width = 400;
	this.height = 75;
	this.x = side == "left" ? 0 : 400;
	this.cb1 = new CollisionBox(400, 50);
}

WallObstacle.prototype.update = function(){}

WallObstacle.prototype.checkDeath = function(player, y)
{
	return player.altitude == 0 && this.cb1.checkCollision(this.x, y + 13, player.x, player.y, player.size);
}

WallObstacle.prototype.draw = function(y)
{
	//ctx.fill("gray");
	//ctx.rect(this.x-1, y, this.width+2, this.height)
	ctx.img("wall", this.x, y, this.width, this.height);
}
