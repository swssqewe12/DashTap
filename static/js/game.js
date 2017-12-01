function main()
{
	var ctx = canvas.getContext("2d");
	requestAnimationFrame(() => tick(ctx));
}

function tick(ctx)
{
	update(ctx);
	draw(ctx);
	requestAnimationFrame(() => tick(ctx))
}

function update(ctx)
{

}

function draw(ctx)
{
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.width, canvas.height)
}