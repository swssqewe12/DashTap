function Player()
{
	this.side = new Aim(0);
	this.sideX = 200;
	this.x = 0;
	this.y = -140;
	this.size = 80;
}

Player.prototype.update = function()
{
	this.side.achieveHalf();
	this.x = this.side.value + this.sideX - this.size / 2;
}

Player.prototype.draw = function(ctx)
{
	ctx.fillStyle = "red";
	ctx.fillRect(rx(this.x), ry(this.y), rx(this.size), rx(this.size))
}