function Context(canvas)
{
	this.canvas = canvas;
	this.ctx = canvas.getContext("2d");

	window.onresize = this.windowResize.bind(this)
}

Context.prototype.windowResize = function()
{
	var canvasCS = window.getComputedStyle(this.canvas, null);
	this.canvas.width = canvasCS.getPropertyValue("width").slice(0, -2);
	this.canvas.height = canvasCS.getPropertyValue("height").slice(0, -2);
}