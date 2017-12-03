function Player()
{
	this.side = new Aim(0);
	this.sideX = 200;
	this.x = 0;
	this.y = -140;
	this.size = 80;
	window.addEventListener("mousedown", this.mouseDown.bind(this))
	window.addEventListener("mouseup", this.mouseUp.bind(this))
}

Player.prototype.update = function()
{
	this.side.achieveFrac(0.25);
	this.x = this.side.value + this.sideX - this.size / 2;
}

Player.prototype.draw = function(ctx)
{
	ctx.fillStyle = "red";
	ctx.fillRect(rx(this.x), ry(this.y), rx(this.size), rx(this.size))
}

Player.prototype.mouseDown = function()
{
	if (screenState == 2)
		this.mdt = +new Date();
}

Player.prototype.mouseUp = function()
{
	if (screenState == 2)
	{
		var dt = +new Date() - this.mdt;

		if (dt < 100)
		{
			if (this.side.aim == 0)
				this.side.newAim(400);
			else
				this.side.newAim(0);
		}
	}
}