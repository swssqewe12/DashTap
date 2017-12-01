function Aim(value)
{
	this.value = value;
	this.aim = this.value;
}

Aim.prototype.aim = function(value)
{
	this.aim = value
}

Aim.prototype.achieveHalf = function()
{
	this.value += (this.aim - this.value) / 2
}