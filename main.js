function preload(){
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.position(550, 250);

    video = createCapture(VIDEO);
    video.hide();

    tint_color = " ";
}

function draw()
{
    image(video, 78, 72, 450, 350);
    tint(tint_color);

    fill(242, 106, 151);

    circle(50, 50, 70);
    fill(242, 235, 33);
    for(let i = 100 ; i < 550; i += 40){
        circle(i, 45, 50)
        ;
    }
    circle(550, 50, 70);
    fill(242, 106, 151);
    for(let i = 100 ; i < 425; i += 40){
        circle(550, i, 50);
    }

    circle(50, 450, 70);
    fill(242, 106, 151);
    for(let i = 100 ; i < 550; i += 40){
        circle(i, 450, 50);
    }

    circle(550, 450, 70);

    fill(242, 235, 33);
    for(let i = 100 ; i < 425; i += 40){
        circle(50, i, 50);
    }

}

function take_snapshot()
{
    save("student_name.png");
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value;
}