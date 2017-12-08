function ImageLoader()
{
	this.imageCount = 0;
	this.canReady = false;
	this.ready = false;
	this.loadImage("/static/img/");
	this.canReady = true;
}