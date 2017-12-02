var virtualWidth = 800;
var player;

function tick(ctx)
{
	update(ctx);
	draw(ctx);
	requestAnimationFrame(() => tick(ctx))
}

function update(ctx)
{
	player.update();
}

function draw(ctx)
{
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.width, canvas.height)
	ctx.fillStyle = "#ddd";
	ctx.fillRect(rx(400), 0, rx(1), canvas.height)
	
	player.draw(ctx);
}

window.onresize = function()
{
	canvasCS = window.getComputedStyle(canvas, null);
	canvas.width = canvasCS.getPropertyValue("width").slice(0, -2);
	canvas.height = canvasCS.getPropertyValue("height").slice(0, -2);
}

rx = x => x / virtualWidth * canvas.width;
ry = y => y / virtualWidth * canvas.width + canvas.height;