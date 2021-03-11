<template>
  <div class="msite">
    <HeaderTop title="昌平区北七家宏福路(30wewjewewe">
      <span class="iconfont icon-sousuo1 left" slot="left"></span>
      <span class="right" slot="right">登录|注册</span>
    </HeaderTop>
    <nav>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div>
              <img src="./imgs/nav/1.jpg" alt="" />
              <a href="#">甜品餐饮</a>
            </div>
            <div>
              <img src="./imgs/nav/2.jpg" alt="" />
              <a href="#">甜品餐饮</a>
            </div>
            <div>
              <img src="./imgs/nav/3.jpg" alt="" />
              <a href="#">甜品餐饮</a>
            </div>
            <div>
              <img src="./imgs/nav/4.jpg" alt="" />
              <a href="#">甜品餐饮</a>
            </div>
            <div>
              <img src="./imgs/nav/5.jpg" alt="" />
              <a href="#">甜品餐饮</a>
            </div>
            <div>
              <img src="./imgs/nav/6.jpg" alt="" />
              <a href="#">甜品餐饮</a>
            </div>
            <div>
              <img src="./imgs/nav/7.jpg" alt="" />
              <a href="#">甜品餐饮</a>
            </div>
            <div>
              <img src="./imgs/nav/8.jpg" alt="" />
              <a href="#">甜品餐饮</a>
            </div>
          </div>
          <div class="swiper-slide">
            <div>
              <img src="./imgs/nav/9.jpg" alt="" />
              <a href="#">甜品餐饮</a>
            </div>
            <div>
              <img src="./imgs/nav/10.jpg" alt="" />
              <a href="#">甜品餐饮</a>
            </div>
            <div>
              <img src="./imgs/nav/11.jpg" alt="" />
              <a href="#">甜品餐饮</a>
            </div>
            <div>
              <img src="./imgs/nav/12.jpg" alt="" />
              <a href="#">甜品餐饮</a>
            </div>
            <div>
              <img src="./imgs/nav/13.jpg" alt="" />
              <a href="#">甜品餐饮</a>
            </div>
            <div>
              <img src="./imgs/nav/14.jpg" alt="" />
              <a href="#">甜品餐饮</a>
            </div>
            <div>
              <img src="./imgs/nav/11.jpg" alt="" />
              <a href="#">甜品餐饮</a>
            </div>
            <div>
              <img src="./imgs/nav/13.jpg" alt="" />
              <a href="#">甜品餐饮</a>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <footer>
      <div class="header">
        <span class="iconfont icon-menu"></span>
        <span>附近商家</span>
      </div>
      <ShopList></ShopList>
    </footer>
  </div>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import ShopList from "../../components/ShopList/ShopList.vue";

// import Swiper from 'swiper'
// import 'swiper/swiper-bundle.min.css'
export default {
    methods() {
        // 创建一个Swiper实例对象  来实现轮播
        new Swiper ('.swiper-container', {
            loop: true, // 可以循环轮播
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
        })
    },
    components: {
        HeaderTop,
        ShopList
  },    
};
</script>

<style  scoped>
.msite {
  background-color: #fff;
  margin-bottom: 50px;
  overflow: hidden;
}
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 40px;
  background-color: green;
  display: flex;
  justify-content: space-between;
}
a {
  text-decoration: none;
}
header span {
  display: inline-block;
}
header .left {
  text-align: center;
  width: 40px;
  line-height: 40px;
  color: #fff;
}
header h3 {
  display: flex;
  flex: 1;
  box-sizing: border-box;
  justify-content: center;
  line-height: 40px;
  color: #fff;
  text-align: center;
}
.expll {
  display: -webkit-box;
  display: -moz-box;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
header .right {
  width: 100px;
  text-align: center;
  line-height: 40px;
  color: #fff;
}
nav {
  margin-top: 50px;
  height: 140px;
  width: 100%;
}
nav .swiper-wrapper {
  width: 100%;
  overflow: hidden;
}
nav .swiper-wrapper .swiper-slide {
    width: 100%; 
    float: left; 
}
nav .swiper-wrapper .swiper-slide:last-child {
  width: 100%;
  float: right;
}
nav .swiper-wrapper .swiper-slide div {
    float: left;
    width: 25%;
    text-align: center;
}
nav .swiper-wrapper .swiper-slide div img {
    margin: 0 auto;
    display: block;
    width: 50px;
}
nav .swiper-wrapper .swiper-slide div a {
    text-decoration: none;
    font-size: 14px;
    color: #ccc;
}
footer {
  margin: 10px 10px 50px;
  /* overflow: hidden; */
}
footer .header {
  color: #ccc;
  margin-bottom: 10px;
}
footer .header span:last-child {
  margin-left: 5px;
}
/* .ellipsis{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
} */
</style>