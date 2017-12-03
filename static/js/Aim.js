function Aim(value)
{
	this.value = value;
	this.aim = this.value;
	return this;
}

Aim.prototype.newAim = function(value)
{
	this.aim = value
	return this;
}

Aim.prototype.achieveHalf = function()
{
	this.value += (this.aim - this.value) / 2
	return this;
}

Aim.prototype.achieveFrac = function(frac)
{
	this.value += (this.aim - this.value) * frac;
	return this;
}

Aim.prototype.achieve = function()
{
	this.value = this.aim;
}