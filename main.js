video = "";

function prelaod() {
    video = createVideo('video.mp4')
}

function setup() {
    canvas = createCanvas(234, 567)
    canvas.center()
}

function draw() {
    image(video, 0, 0, 234, 567)
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', Headshot)
    document.getElementById("status").innerHTML = "HeadShot Rate : Calculating"
}

function Headshot() {
    console.log("Dj Adam ")
    status = true
    video.loop()
    video.speed(1.5)
    video.volume(0)
}