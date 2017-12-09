function Context(canvas)
{
	this.canvas = canvas;
	this.ctx = canvas.getContext("2d");
	this.ctx.imageSmoothingQuality = "high";
 	this.imageSmoothingEnabled = true;
	this.virtualCanvasWidth = 800;

	this.fillColor = null;
	this.altitude = 0;
	this.arp = {'x':0,'y':0};

	this.images = new ImageLoader();

	window.onresize = this.windowResize.bind(this)
}

Context.prototype.windowResize = function()
{
	var canvasCS = window.getComputedStyle(this.canvas, null);
	this.canvas.width = canvasCS.getPropertyValue("width").slice(0, -2);
	this.canvas.height = canvasCS.getPropertyValue("height").slice(0, -2);
}

Context.prototype.rx = function(vx)
{
	var subx = (vx - this.arp.x) * (1 + this.altitude / 100) + this.arp.x;
	return subx / this.virtualCanvasWidth * this.canvas.width ;
}

Context.prototype.ry = function(vy)
{
	var suby = (vy - this.arp.y) * (1 + this.altitude / 100) + this.arp.y;
	return -suby / this.virtualCanvasWidth * this.canvas.width + this.canvas.height;
}

Context.prototype.rw = function(vw)
{
	return (vw / this.virtualCanvasWidth * this.canvas.width) * (1 + this.altitude / 100);
}

Context.prototype.rh = function(vh)
{
	return (vh / this.virtualCanvasWidth * this.canvas.width) * (1 + this.altitude / 100);
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

Context.prototype.rect = function(x, y, w, h)
{
	h == h || w;

	if (this.fillColor)
		this.ctx.fillRect(this.rx(x), this.ry(y)-this.rh(h), this.rw(w), this.rh(h));
	else
		this.ctx.strokeRect(this.rx(x), this.ry(y)-this.rh(h), this.rw(w), this.rh(h));
}

Context.prototype.img = function(name, x, y, w, h)
{
	var image = this.images.get(name);

	if (image)
	{
		w = w || image.width;
		h = h || image.height;
		this.ctx.drawImage(image, this.rx(x), this.ry(y)-this.rh(h), this.rw(w), this.rh(h));
	}
	else
	{
		w = w || 10;
		h = h || 10;
		this.rect(x, y, w, h)
	}
}

Context.prototype.clear = function(color = "white")
{
	this.ctx.fillStyle = color;
	this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
}

Context.prototype.getWidth = function()
{
	return this.virtualCanvasWidth;
}

Context.prototype.getHeight = function()
{
	return this.canvas.height / this.canvas.width * this.virtualCanvasWidth;
}

Context.prototype.setAltitudeRelativePoint = function(x, y)
{
	this.arp.x = x;
	this.arp.y = y;
}