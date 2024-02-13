var canvas=new fabric.Canvas("myCanvas");

ball_y=0;
ball_x=0;
hole_y=400;
hole_x=800;

block_image_width = 5;
block_image_height = 5;

function loadImg(){
	fabric.Image.fromURL("golf-h.png",function(Img){
		hole_obj=Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		})
		canvas.add(hole_obj);
	})
	newImage();
}

function newImage()
{
	fabric.Image.fromURL("ball.png",function(Img){
		ball_obj=Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		})
		canvas.add(ball_obj);
	})
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="você atingiu o objetivo";
		document.getElementById("myCanvas").style.borderColor="red"
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y >=5){
			ball_y-=block_image_height;
			canvas.remove(ball_obj);
			newImage();
		}
	}

	function down()
	{
		if(ball_y <=450){
			ball_y+=block_image_height;
			canvas.remove(ball_obj);
			newImage();
		}
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x-=block_image_width;
			canvas.remove(ball_obj);
			newImage();
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x+=block_image_width;
			canvas.remove(ball_obj);
			newImage();
		}
	}
	
}

