window.addEventListener('load', function () {
  // 初始化左侧分类swiper内容滚动
  var swiper = new Swiper('.category-left .swiper-container', {
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
  });
  // 初始化右侧分类swiper内容滚动
  var swiper = new Swiper('.category-right .swiper-container', {
    direction: 'vertical',
    slidesPerView: 'auto',
    freeMode: true,
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    mousewheel: true,
  });
  /*实现左侧分类点击功能 */
  /*1. 给所有li添加点击事件 拿到当前点击li的索引
  2. 拿到当前li的高度
  3. 计算位移距离 =  li的索引+li的高度
  4. 获取当前swiper-wrapper元素设置位移
  5. 判断当前位移的距离是否超过了最小位移的距离(往上位移负值) 如果超过了就 设置为最小位移的距离
  6. 如果需要过渡在给swiper-wrapper添加一个过渡效果
  7. 获取所有li删除active类名
  8. 给当前li添加一个active类名
   */
  //1.获取所有的li元素
  var lis = document.querySelectorAll('.category-left ul li');
  //获取滑动容器
  var swiperWrapper = document.querySelector('.swiper-wrapper');
  //2.给每个li添加一个索引
  for (var i = 0; i < lis.length; i++) {
    lis[i].index = i;
    // console.log(i);
    //3.给每个li添加点击事件
    lis[i].addEventListener('click', function () {
      console.log(this.index);
      //4.获取当前点击的索引
      var index = this.index;
      //5.获取当前点击li的高度
      var liHeight = this.offsetHeight;
      //6.计算当前需要位移的值
      var translateY = -index * liHeight;
      //7.计算最少位移的值
      var parentHeight = document.querySelector('.category-left').offsetHeight;
      var childrenHeight = document.querySelector('.category-left ul').offsetHeight;
      var minTranslateY = parentHeight - childrenHeight;
      //8.判断
      if (translateY < minTranslateY) {
        translateY = minTranslateY;
      }
      //9.把计算并判断好值 设置到滑动元素上
      swiperWrapper.style.transform = "translate3d(0px," + translateY + "px, 0px)";
      //10位移
      swiperWrapper.style.transition = 'all, 0.3s';
      //11.删掉所有li的active
      for (var i = 0; i < lis.length; i++) {
        lis[i].classList.remove('active');
      }
      //12.给当前点击的li添加active
      this.classList.add('active');
    })
  }
})