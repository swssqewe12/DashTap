function ImageLoader()
{
	this.imageCount = 0;
	this.loadImage("/img/game/player.png", "player");
	this.loadImage("/img/game/santa_hat.png", "santa_hat");
	this.loadImage("/img/game/wall.png", "wall");
	this.images = {};
}

ImageLoader.prototype.loadImage = function(src, name)
{
	var img = new Image();
	img.src = src;

	img.onload = () =>
	{
		this.images[name] = img;
	}
}

ImageLoader.prototype.get = function(name)
{
	return this.images[name];
}