<template>
  <div class="search">
    <HeaderTop title="搜索"></HeaderTop>
    <div class="b">
      <input type="search" placeholder="请输入商家或美食名称" />
      <button>提交</button>
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
.search {
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
.search .b {
  margin: 55px 8px;
  display: flex;
  justify-content: space-between;
}
.search .b input {
  outline: none;
  border: 1px solid #999;
  border-radius: 4px;
  flex: 1;
  padding: 3px;
}
.search .b button {
  width: 60px;
  height: 32px;
  line-height: 32px;
  border: 1px solid #fff;
  outline: none;
  border-radius: 3px;
  font-weight: 700;
  background-color: green;
  color: #fff;
  margin-left: 10px;
}
</style>