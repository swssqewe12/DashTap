function HoleObstacle(side, y)
{
	this.width = 360;
	this.height = 360;
	this.x = 20 + (side == "left" ? 0 : 400);
	this.cb1 = new CollisionBox(this.width - 160, this.height - 160);
}

HoleObstacle.prototype.update = function(){}

HoleObstacle.prototype.checkDeath = function(player, y)
{
	return player.altitude == 0 && this.cb1.checkCollision(this.x + 80, y + 80, player.x, player.y, player.size);
}

HoleObstacle.prototype.draw = function(y)
{
	//ctx.fill("black");
	//ctx.rect(this.x, y, this.width, this.height)
	ctx.img("hole", this.x, y, this.width, this.height);
}
