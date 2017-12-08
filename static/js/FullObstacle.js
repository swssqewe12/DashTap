function FullObstacle(y, obstacleTypes, passableObstacleTypes, secondObstacleChance)
{
	var side = Math.random() < 0.5 ? "left" : "right";
	var otherSide = side == "left" ? "right": "left";
	var primOb = new (obstacleTypes.random())(side, y);
	this[side] = primOb;

	if (Math.random() * 100 < secondObstacleChance)
	{
		if (primOb.passable == true)
			this[otherSide] = new (obstacleTypes.random())(otherSide, y);
		else
			this[otherSide] = new (passableObstacleTypes.random())(otherSide, y);
	}

	heights = [];
	if (this.left)
		heights.push(this.left.height);
	if (this.right)
		heights.push(this.right.height);
	this.height = Math.max(...heights);
	this.y = y;
}

FullObstacle.prototype.update = function(obstacleSpeed)
{
	this.y -= obstacleSpeed;

	if (this.left)
		this.left.update()
	if (this.right)
		this.right.update()
}

FullObstacle.prototype.draw = function(ctx)
{
	if (this.left)
		this.left.draw(this.y)
	if (this.right)
		this.right.draw(this.y)
}