function ImageLoader()
{
	this.imageCount = 0;
	this.loadImage("/img/game/player.png", "player");
	this.loadImage("/img/game/santa_hat.png", "santa_hat");
	this.loadImage("/img/game/wall.png", "wall");
	this.loadImage("/img/game/full_wall.png", "full_wall");
	this.loadImage("/img/game/hole.png", "hole");
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