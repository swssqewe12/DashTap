Array.prototype.random = function ()
{
	return this[Math.floor(Math.random() * this.length)];
}

Array.prototype.last = function()
{
	return this[this.length - 1];
}