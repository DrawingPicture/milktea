// 获取展示轮播图的div块
var bannerMainBody = document.getElementById("banner");
var ul = document.getElementById("bannerul");
// 通过ul获取ul内的li的个数
var picList = ul.getElementsByTagName("li");
// 获取下一个按钮
var btnNext = document.getElementById("btnNext");
// 设置图片的坐标，从-1开始。因为我的函数是先自增的
var iNow = -1;
// console.log(picList.length);
var timer = null;

// 轮播图自动播放,每隔1.5秒
function StratAutoPlay() {
    timer = setInterval(function () {
        if (++iNow == picList.length) {
            iNow = 0;
            // 当轮播到最后一张重复的一号图时，关闭线性动画，
            // 并立刻跳转到第一张图，实现轮播，循环到第二张图
            ul.style.transition = "none";
            ul.style.left = "0px";
        }else{
            // 开启线性动画
            ul.style.transition = "left 1s linear";
        }
        change(iNow);
    }, 1500);
}

// 轮播图停止播放
function endAutoPlay() {
    if (timer) {
        clearInterval(timer);
    }
}

// 当鼠标不在轮播图区域时，轮播图自动播放。否则停止
function bannerPic() {
    bannerMainBody.onmouseover = function () {
        endAutoPlay();
    }
    bannerMainBody.onmouseout = function () {
        StratAutoPlay();
    }
    bannerMainBody.onmouseout();
}

// 启动自动轮播函数
bannerPic();

//移动函数,根据下标将图片向左移动
function change(idx) {
    ul.style.left = -idx * 1200 + "px";
    // console.log(ul.style.left);
}

// 点击下一张，当图片下标到最后一张的时候返回第一张
btnNext.onclick = function () {
    if (++iNow == picList.length) {
        iNow = 0;
        ul.style.transition = "none";
        ul.style.left = "0px";
    }else{
        ul.style.transition = "left 1s linear";
    }
    change(iNow);
}

// 底部culture图片滚动
var cultureBottom = document.getElementById("cultureBottom");
var cutureUl = document.getElementById("cultureUl");
var photoNext = document.getElementById("photoNext");
var photoPre = document.getElementById("photoPre");
photoPre.style.display = "none";
photoNext.onclick = function(){
    cutureUl.style.left = -370 + "px";
    // 显示左移按钮
    photoPre.style.display = "block";
}
photoPre.onclick = function(){
    cutureUl.style.left = 5 + "px";
    // 隐藏左移按钮
    photoPre.style.display = "none";
}

// 子导航
var btnSubnav = document.getElementById("btnSubnav");
var mainnav = document.getElementById("mainnav");
var subnav = document.getElementById("subnav");
var subright = document.getElementById("subnavClose");

//函数：mainnavDisplay 对主导航页的隐藏与显示作控制
function mainnavDisplay(opacity,visibility,zIndex){
    // 设置div的元素的不透明级别，0为完全透明，1为完全不透明。默认值为1
    mainnav.style.opacity = opacity;
    // visibility属性规定元素是否可见
    mainnav.style.visibility = visibility;
    // z-index 属性设置元素的堆叠顺序;
    // 拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。
    mainnav.style.zIndex = zIndex;
}

//函数：subnavDisplay 对主导航页的隐藏与显示作控制
function subnavDisplay(opacity,visibility,zIndex){
    subnav.style.opacity = opacity;
    subnav.style.visibility = visibility;
    subnav.style.zIndex = zIndex;
}
btnSubnav.onclick = function(){
    mainnavDisplay(0, "hidden", 1);
    subnavDisplay(1, "visible", 2);
    // mainnav.style.display = "none";
    // subnav.style.display = "block";
    // mainnav.style.opacity = 0;
    // mainnav.style.visibility = "hidden";
    // mainnav.style.zIndex = 1;
    // subnav.style.opacity = 1;
    // subnav.style.visibility = "visible";
    // subnav.style.zIndex = 2;

}
subright.onclick = function(){
    mainnavDisplay(1, "visible", 2);
    subnavDisplay(0, "hidden", 1);
    // mainnav.style.opacity = 1;
    // mainnav.style.visibility = "visible";
    // mainnav.style.zIndex = 2;
    // subnav.style.opacity = 0;
    // subnav.style.visibility = "hidden";
    // subnav.style.zIndex = 1;
    // subnav.style.display = "none";
    // mainnav.style.display = "block";
}
document.getElementById("dl_button").onclick = function(){
    window.location.href='http://localhost:3000/dl';
}
document.getElementById("zc_button").onclick = function(){
    window.location.href='http://localhost:3000/zc';
}