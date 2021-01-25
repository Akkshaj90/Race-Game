canvasholder= document.getElementById("MyCanvas");
ctx=canvas.getContext("2d");
car1_width=120;
car1_height=70;
car1_image="car1.png";
car1_x=10;
car1_y=10;
car2_width=120;
car2_height=70;
car2_image="car2.png";
car2_x=10;
car2_y=10;
canvas_image="racing.jpg.jpg";
function add(){
    background_image = new Image();
    background_image.onload=addBackground;
    background_image.src=canvas_image;
    car1_image = new Image();
    car1_image.onload=addCar1;
    car1_image.src=car1_image;
    car2_image = new Image();
    car2_image.onload=addCar2;
    car2_image.src=car2_image;
}
function addBackground(){
    ctx.drawImage(background_image, 0, 0, canvas.width, canvas.height);
}
function addCar1(){
    ctx.drawImage(car1_image, car1_x, car1_y, car1_width, car1_height);
};
function addCar2(){
    ctx.drawImage(car2_image, car2_x, car2_y, car2_width, car2_height);
};
window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if (keyPressed == 38){
        console.log("up");
    };
    if (keyPressed == 40){
        console.log("down");
    };
    if (keyPressed == 37){
        console.log("left");
    };
    if (keyPressed == 39){
        console.log("right");
    }; 
    if (keyPressed == 87){
        console.log("car up");
    };
    if (keyPressed == 83){
        console.log("car down");
    };
    if (keyPressed == 65){
        console.log("car left");
    };
    if (keyPressed == 68){
        console.log("car right");
    };  
}