function CollisionBox(w, h)
{
	this.width = w;
	this.height = h;
}

CollisionBox.prototype.checkCollision = function(thisx, thisy, targetx, targety, targetw, targeth)
{
	targeth = targeth || targetw;
	return targetx < thisx + this.width && targetx + targetw > thisx && targety < thisy + this.height && targety + targeth > thisy;
}