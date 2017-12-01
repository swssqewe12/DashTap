function Aim(value)
{
	this.value = value;
	this.aim = this.value;
}

Aim.prototype.newAim = function(value)
{
	this.aim = value
}

Aim.prototype.achieveHalf = function()
{
	this.value += (this.aim - this.value) / 2
}

Aim.prototype.achieveFrac = function(frac)
{
	this.value += (this.aim - this.value) * frac
}