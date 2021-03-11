<template>
  <div class="profile">
    <HeaderTop title="我的"></HeaderTop>
    <nav>
      <img src="./img/1.png" alt="" />
      <div class="login">
        <router-link to="/login" tag="span">登录/注册</router-link>
        <p><span class="iconfont icon-ziyuan"></span>暂无绑定手机号</p>
      </div>
      <span class="iconfont icon-jiantou"></span>
    </nav>
    <div class="main">
      <div class="money">
        <p><span>0.00</span>元</p>
        <span class="b">我的余额</span>
      </div>
      <div class="discount">
        <p><span>0</span>个</p>
        <span>我的优惠</span>
      </div>
      <div class="integral">
        <p><span>0</span>分</p>
        <span>我的积分</span>
      </div>
    </div>
    <div class="list">
      <div>
        <p><span class="iconfont icon-dingdan"></span>我的订单</p>
        <span class="iconfont icon-jiantou"></span>
      </div>
      <div>
        <p><span class="iconfont icon-jifen"></span>积分商城</p>
        <span class="iconfont icon-jiantou"></span>
      </div>
      <div>
        <p><span class="iconfont icon-wodehuiyuanqia"></span>硅谷外卖会员卡</p>
        <span class="iconfont icon-jiantou"></span>
      </div>
      <div>
        <p><span class="iconfont icon-fuwuzhongxin"></span>服务中心</p>
        <span class="iconfont icon-jiantou"></span>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderTop from  '../../components/HeaderTop/HeaderTop.vue'
export default {
    components: {
        HeaderTop
    }
};
</script>

<style scoped>
.profile {
  background-color: #fff;
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
header h3 {
  display: flex;
  flex: 1;
  justify-content: center;
  line-height: 40px;
  color: #fff;
}
nav {
  margin-top: 41px;
  height: 80px;
  background-color: green;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 15px;
  text-align: center;
}
nav img {
  display: block;
  width: 60px;
  height: 60px;
  border-radius: 30px;
}
nav .login {
  flex: 1;
  margin-left: 10px;
  color: #fff;
  text-align: left;
}
nav .login span {
  font-weight: 700;
}
nav .login p {
  margin-top: 10px;
}
nav span {
  color: #fff;
}
.main {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
.main .money {
  width: 100%;
  padding-bottom: 10px;
  border-right: 1px solid #ccc;
}
.main .money p {
  color: #999;
}
.main .money p span {
  color: orange;
  font-weight: 700;
  font-size: 24px;
}
.main .money .b {
  font-size: 14px;
  color: #999;
  margin-top: 15px;
}
.main .discount {
  width: 100%;
  border-right: 1px solid #ccc;
}
.main .discount p {
  color: #999;
}
.main .discount p span {
  color: orangered;
  font-weight: 700;
  font-size: 24px;
}
.main .discount span {
  font-size: 14px;
  color: #999;
  margin-top: 15px;
}
.main .integral {
  width: 100%;
}
.main .integral p {
  color: #999;
}
.main .integral p span {
  color: green;
  font-weight: 700;
  font-size: 24px;
}
.main .integral span {
  font-size: 14px;
  color: #999;
  margin-top: 15px;
}
.list div {
  display: flex;
  justify-content: space-between;
  text-align: left;
  padding: 13px;
  border-bottom: 1px solid #ccc;
}
.list div p span {
  margin-right: 3px;
  color: skyblue;
  font-size: 20px;
}
.list div:nth-child(2) p span {
  color: tomato;
}
.list div:nth-child(3) p span {
  color: orange;
}
.list div:nth-child(4) p span {
  color: green;
}
</style>