/*1. 需求： 在滚动条滚动距离在轮播图高度范围内的时候实现顶部搜索的背景色透明度渐变
	    rgba(255,0,0,0)
	    rgba(255,0,0,1)
	    rgba的最后一个值透明度从0-1的变化
	*/

/*
思路：计算当前滚动条滚动到的距离的透明度的值
1.获取当前滚动条的距离
2.获取当前轮播图的高度
3.计算透明度= 距离/高度
4.计算好后把透明度的值设置好计算后的透明度的值
*/
//1.获取滚动事件
// var header=document.querySelector("#header");
// var slide=document.querySelector("#slide");
// var scrollTop=slide.offsetTop
//1.添加
window.addEventListener('scroll', setOpacity);

//3.获取当前轮播图的高度
var slideHeight = document.querySelector("#slide").offsetHeight;
//6.
var header = document.querySelector('#header');

setOpacity();

function setOpacity() {
    // 2.获取当前滚动条的距离
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    // 4.计算透明度= 距离/高度
    var opacity = scrollTop / slideHeight;
    console.log(opacity);
    // 5.计算好后把透明度的值设置好计算后的透明度的值
    if (opacity <= 1) {
        //7.
        header.style.backgroundColor = 'rgba(222,24,27,' + opacity + ')';
    } else {
        header.style.backgroundColor = 'rgba(222, 24, 27, 1 )';
    }
}
/* 轮播图初始化swiper*/
var mySwiper = new Swiper('.swiper-container', {
    // direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项

    autoplay: {
        delay: 3000, //间隔时间 
        stopOnLastSlide: false, //在最后一张是否要停止  如果开启loop模式无效
        disableOnInteraction: false, // 是否要当(交互的时候)滑动的时候禁用自动轮播图
    },

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
})
