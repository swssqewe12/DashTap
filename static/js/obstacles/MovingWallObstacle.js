function MovingWallObstacle(side, y)
{
	this.width = 400;
	this.height = 75;
	this.x = Math.random() * 400;
	this.speed = 4 + Math.random() * 3;
	this.cb1 = new CollisionBox(400, 50);
	this.direction = 1;
}

MovingWallObstacle.prototype.laneCount = 2;

MovingWallObstacle.prototype.update = function()
{
	this.x += this.speed * this.direction;

	if (this.x >= 400)
		this.direction = -1;

	if (this.x <= 0)
		this.direction = 1;
}

MovingWallObstacle.prototype.checkDeath = function(player, y)
{
	return player.altitude == 0 && this.cb1.checkCollision(this.x, y + 13, player.x, player.y, player.size);
}

MovingWallObstacle.prototype.draw = function(y)
{
	ctx.img("moving_wall", this.x, y, this.width, this.height);
}