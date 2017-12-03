function FullObstacle()
{
	var side = Math.random() < 0.5 ? "left" : "right";
	var otherSide = side == "left" ? "right": "left";
	var primOb = new (obstacleTypes.random())(side);
	this[side] = primOb;

	if (Math.random() * 100 < noObPc)
		return

	if (primOb.passable == true)
		this[otherSide] = new (obstacleTypes.random())(otherSide);
	else
		this[otherSide] = new (passableObstacleTypes.random())(otherSide);
}

FullObstacle.prototype.update = function()
{
	if (this.left)
		this.left.update()
	if (this.right)
		this.right.update()
}

FullObstacle.prototype.draw = function(ctx)
{
	if (this.left)
		this.left.draw(ctx)
	if (this.right)
		this.right.draw(ctx)
}

FullObstacle.prototype.highestY = function()
{
	ys = [];
	if (this.left)
		ys.push(this.left.y);
	if (this.right)
		ys.push(this.right.y);
	return Math.min(...ys);
}