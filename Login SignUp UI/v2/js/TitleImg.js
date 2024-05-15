var timgbox = document.querySelector('#timg');

var imgindex;

var imgs = 3;
var imgCacheArr = [];

// 預先加載所有的圖片
for (let i = 1; i <= imgs; i++) {
    let img = new Image();
    img.src = "image/TitleImg" + i + ".jpg";
    imgCacheArr.push(img);
}

imgindex = getRandomInt(1, imgs);

timgsw();
function timgsw() {
    timgbox.style.backgroundImage = "url(" + "image/TitleImg" + imgindex + ".jpg" + ")";
    imgindex = (imgindex == imgs) ? 1 : imgindex + 1;
}

setInterval(timgsw, 5000);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}