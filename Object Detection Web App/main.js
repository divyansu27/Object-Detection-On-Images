img="";
status="";
objects=[];
function preload(){
    img=LoadImage('dog_cat.jpg')
}
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    vedio=createCapture(VEDIO);
    vedio.size(380,380);
    vedio.hide();
    objectDetector= ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects"
;}
function draw(){
    image(img,0,0,640,420);
}
function modelLoaded(){
    console.log("Model Loaded")
    status=true;
    objectDetector.detect(vedio,gotResult)
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}
function draw(){
    image(vedio,0,0,380,380);
    if(status!="")
    {
        r=random(255);
        g=random(255);
        b=random(255);
        objectDetector.detect(vedio,gotResult);
        for(i=0;i<object.length;i++)
        {
            document.getElementById("status").innerHTML="Status:Object Detected";
            document.getElementById("number_of_objects").innerHTML="Number Of Objects Are:"+object.length;
            fill(r,g,b);
            percent=floor(objects[i].confidence*100);
            text(objects[i].lable+""+percent+"%",objects[i].x,objects[i].objects[i].y);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x,objects[i].objects[i].y,objects[i].width,objects[i].height);
        }
    }
    fill("#FF0000");
    text("dog",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);
    image(img,0,0,640,420);
    fill("#FF0000");
    text("cat",320,120);
    noFill();
    stroke("#FF0000");
    rect(300,90,270,320);
}