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
	this.roundValue();
	return this;
}

Aim.prototype.achieveFrac = function(frac)
{
	this.value += (this.aim - this.value) * frac;
	this.roundValue();
	return this;
}

Aim.prototype.achieve = function()
{
	this.value = this.aim;
}

Aim.prototype.roundValue = function()
{
	if (this.aim > this.value)
	{
		this.value = Math.ceil(this.value);
	}
	else if (this.aim < this.value)
	{
		this.value = Math.floor(this.value);
	}
}