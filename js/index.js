let canvas, ctx, video;
let canvas2, ctx2, video2;
window.addEventListener('load', function() {
    canvas = document.querySelector("#video1");
    canvas2 = document.querySelector("#video2");
    video = document.querySelector("#myVideo1");
    video2 = document.querySelector("#myVideo2");
    ctx = canvas.getContext("2d");
    ctx2 = canvas2.getContext("2d");
    setInterval("proccess()", 15);
});

function proccess() {
    ctx.save();
    ctx.drawImage(video, 0, 0, 320, 180);
    ctx2.drawImage(video2, 0, 0, 320, 180)
    ctx.restore()
}