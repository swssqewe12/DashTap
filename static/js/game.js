var obstacleTypes;
var passableObstacleTypes;
var noObPc;

var virtualWidth = 800;
var player;
var obstacles = [];

var obstSpeed = 10;
var obSpIncMult = 1;

var obstSpacing = 400;

var theScore = 0;

function tick(ctx)
{
	if (screenState == 2)
	{
		update();
		draw(ctx);
	}

	requestAnimationFrame(() => tick(ctx))
}

function initGame()
{
	player.side.newAim(0).achieve();
	obstacleTypes = [WallObstacle];
	passableObstacleTypes = [WallObstacle];
	noObPc = 75;
	obstacles = [];
	obstacles.push(new FullObstacle());
	obstSpeed = 5;
	obSpIncMult = 1;
	theScore = 0;
	score.innerText = theScore;
}

function update()
{
	player.update();

	if (obstacles[0].highestY() > 0)
	{
		theScore++;
		score.innerText = theScore;
		obstacles.shift();
	}

	if (obstacles.last().highestY() > oy() + obstSpacing)
		obstacles.push(new FullObstacle());

	for (obstacle of obstacles)
	{
		obstacle.update();
	}
}

function draw(ctx)
{
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.width, canvas.height)
	ctx.fillStyle = "#ddd";
	ctx.fillRect(rx(400), 0, rx(1), canvas.height)
	
	player.draw(ctx);

	for (obstacle of obstacles)
	{
		obstacle.draw(ctx);
	}
}

window.onresize = function()
{
	canvasCS = window.getComputedStyle(canvas, null);
	canvas.width = canvasCS.getPropertyValue("width").slice(0, -2);
	canvas.height = canvasCS.getPropertyValue("height").slice(0, -2);
}

rx = x => x / virtualWidth * canvas.width;
ry = y => y / virtualWidth * canvas.width + canvas.height;
rs = s => s / virtualWidth * canvas.width;

oy = () => -virtualWidth * canvas.height / canvas.width