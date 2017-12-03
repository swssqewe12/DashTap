function Context(canvas)
{
	this.canvas = canvas;
	this.ctx = canvas.getContext("2d");
	this.virtualCanvasWidth = 800;

	this.fillColor = null;

	window.onresize = this.windowResize.bind(this)
}

Context.prototype.windowResize = function()
{
	var canvasCS = window.getComputedStyle(this.canvas, null);
	this.canvas.width = canvasCS.getPropertyValue("width").slice(0, -2);
	this.canvas.height = canvasCS.getPropertyValue("height").slice(0, -2);
}

Context.prototype.fill = function(color)
{
	this.ctx.fillStyle = color;
	this.fillColor = color;
}

Context.prototype.noFill = function()
{
	this.fillColor = color;
}

Context.prototype.rect = function(vx, vy, vw, vh)
{
	vh == vh || vw;
	x = vx / this.virtualCanvasWidth * this.canvas.width;
	y = -vy / this.virtualCanvasWidth * this.canvas.width + this.canvas.height;
	w = vw / this.virtualCanvasWidth * this.canvas.width;
	h = vh / this.virtualCanvasWidth * this.canvas.width;

	if (this.fillColor)
		this.ctx.fillRect(x, y-h, w, h)
	else
		this.ctx.strokeRect(x, y-h, w, h)
}

Context.prototype.clear = function(color = "white")
{
	this.ctx.fillStyle = color;
	this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
}