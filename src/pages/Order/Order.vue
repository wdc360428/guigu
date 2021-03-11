<template>
  <div class="order">
    <HeaderTop title="订单"></HeaderTop>
    <nav>
      <img src="./imgs/person.png" alt="" />
      <p>登录后查看外卖订单</p>
      <button>立即登录</button>
    </nav>
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
.order {
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
.order nav {

  margin-top: 140px;
  text-align: center;
}
.order nav img {
  margin: auto;
  display: block;
  width: 200px;
  height: 200px;
}
.order nav p {
  font-size: 16px;
  margin: 10px 0;
}
.order nav button {
  background-color: green;
  color: #fff;
  width: 100px;
  height: 40px;
  border-radius: 6px;
  border: none;
  outline: none;
}
</style>