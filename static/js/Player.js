function Player()
{
	this.x = 0;
	this.y = 20;
	this.side = new Aim(0);
	this.sideX = 200;
	this.size = 80;
	//window.addEventListener("mousedown", this.mouseDown.bind(this))
	//window.addEventListener("mouseup", this.mouseUp.bind(this))
}

Player.prototype.update = function()
{
	this.side.achieveFrac(0.25);
	this.x = this.side.value + this.sideX - this.size / 2;
}

Player.prototype.draw = function()
{
	ctx.fill("red");
	ctx.rect(this.x, this.y, this.size, this.size);
}

/*Player.prototype.mouseDown = function()
{
	if (elementManager.screenState == 2)
		this.mdt = +new Date();
}

Player.prototype.mouseUp = function()
{
	if (elementManager.screenState == 2)
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
}*/