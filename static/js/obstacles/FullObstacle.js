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

	if (this.left && this.left.takeMaxHeightIntoAccount) this.left.takeMaxHeightIntoAccount(this.height);
	if (this.right && this.right.takeMaxHeightIntoAccount) this.right.takeMaxHeightIntoAccount(this.height);

	if (this.left && this.right && this.left.constructor.name == this.right.constructor.name)
	{
		if (this.left.takeSameObstacleIntoAccount) this.left.takeSameObstacleIntoAccount(this.right);
		if (this.right.takeSameObstacleIntoAccount) this.right.takeSameObstacleIntoAccount(this.left);
	}
}

FullObstacle.prototype.update = function(obstacleSpeed)
{
	this.y -= obstacleSpeed;

	if (this.left)
		this.left.update()
	if (this.right)
		this.right.update()
}

FullObstacle.prototype.draw = function()
{
	if (this.left)
		this.left.draw(this.y)
	if (this.right)
		this.right.draw(this.y)
}

FullObstacle.prototype.checkDeath = function(player)
{
	return (this.left && this.left.checkDeath(player, this.y)) || (this.right && this.right.checkDeath(player, this.y));
}