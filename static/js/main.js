function main()
{
	player = new Player();
	var ctx = canvas.getContext("2d");
	requestAnimationFrame(() => tick(ctx));
}