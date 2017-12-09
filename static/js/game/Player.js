function Player()
{
	this.x = 0;
	this.y = 30;
	this.side = new Aim(0);
	this.sideX = 200;
	this.size = 80;
	this.altitude = 0;
	this.velocity = 0;
	this.gravity = -0.35;
	// between 4 and 7
	//setInterval(() => this.jump(7), 1500);
	window.addEventListener("mousedown", this.mouseDown.bind(this))
	window.addEventListener("mouseup", this.mouseUp.bind(this))
	window.addEventListener("touchstart", this.mouseDown.bind(this))
	window.addEventListener("touchend", this.mouseUp.bind(this))
}

Player.prototype.jump = function(power)
{
	this.velocity += power;
}

Player.prototype.updatePhysics = function()
{
	this.altitude += this.velocity;
	this.velocity += this.gravity;

	if (this.altitude < 0)
	{
		this.altitude = 0;
		this.velocity = 0;
	}
}

Player.prototype.update = function()
{
	this.updatePhysics();
	this.side.achieveFrac(0.3);
	this.x = this.side.value + this.sideX - this.size / 2;
}

Player.prototype.draw = function()
{
	ctx.altitude = this.altitude * 0.25;
	//ctx.fill("red");
	//ctx.rect(this.x, this.y, this.size, this.size);
	ctx.img("player", this.x, this.y, this.size, this.size);
	ctx.img("santa_hat", this.x-5, this.y+15, this.size*1.3, this.size*1.3);
}

Player.prototype.mouseDown = function(event)
{
    event.preventDefault();

	this.mdt = +new Date();
	this.timeout = setTimeout(this.mouseUp.bind(this), 666);
}

Player.prototype.mouseUp = function(event)
{
    if (event) event.preventDefault();

	clearTimeout(this.timeout);

	if (this.timeout >= 0 && this.altitude == 0)
	{
		var dt = +new Date() - this.mdt;

		if (dt < 200)
		{
			if (this.side.aim == 0)
				this.side.newAim(400);
			else
				this.side.newAim(0);
		}
		else
		{
			var power = dt / 1000 * 1.5 + 4;
			this.jump(power);
		}
	}

	this.timeout = -1;
}