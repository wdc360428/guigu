<template>
    <div class="footer">
        <div @click="goTo('/msite')" :class="{on : '/msite' === $route.path}">
            <span class="iconfont icon-meituan"></span>
            <span class="font">外卖</span>
        </div>
        <div @click="goTo('/search')" :class="{on : '/search' === $route.path}">
            <span class="iconfont icon-icon--copy"></span>
            <span class="font">搜索</span>
        </div>
        <div @click="goTo('/order')" :class="{on : '/order' === $route.path}">
            <span class="iconfont icon-dingdanhui"></span>
            <span class="font">订单</span>
        </div>
        <div @click="goTo('/profile')" :class="{on : '/profile' === $route.path}">
            <span class="iconfont icon-icon-test"></span>
            <span class="font">我的</span>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goTo (path) {
           this.$router.replace(path)
        }
    }
}
</script>

<style scoped>
    .footer {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        z-index: 100;
        background-color: #fff;
        border-top: 1px solid #ccc;
    }
    div {
        text-align: center;
        box-sizing: border-box;
    }
    span {
        font-size: 18px;
    }
    .font {
        display: block;
        padding-top: 3px;
        font-size: 13px;
    }
    .on {
        color: skyblue;
    }
</style>