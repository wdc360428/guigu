<template>
    <div class="login">
        <div class="header">
            <span class="iconfont icon-angle-left" @click="$router.back()"></span>
            <h1>硅谷外卖</h1>
        </div>
        <div class="content">
            <div class="top">
                <span>短信登录</span>
                <span>密码登录</span>
            </div>
            <div class="phone">
                <input type="text" placeholder="手机号"/>
                <input type="text" placeholder="验证码"/>
            </div>
            <p>温馨提示：未注册硅谷外卖账号的手机号，登录时自动注册，且代表已同意<span>《 用户服务协议 》</span></p>
            <a href="#">登录</a>
            <span class="profile">关于我们</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .login {
        padding: 10px;
        background-color: #fff;
    }
    .login .header span {
        font-size: 24px;
        color: #ccc;
    }
    .login .header h1 {
        height: 100px;
        line-height: 100px;
        text-align: center;
        color: green;
    }
    .login .content {
        padding: 0 40px;
    }
    .login .content .top {
        display: flex;
        justify-content: space-around;
        margin-bottom: 10px;
    }
    .login .content .top span:first-child {
        color: green;
        border-bottom: 2px solid green;
        height: 24px;
    }
    .login .content input {
        width: 100%;
        height: 45px;
        box-sizing: border-box;
        padding-left: 10px;
        margin-bottom: 15px;
        border-radius: 3px;
        border: 1px solid #ccc;
        color: #999;
        outline: none;
    }
    .login .content p {
        font-size: 13px;
        color: #999;
        margin-bottom: 25px;
    }
    .login .content p span {
        color: green;
    }
    .login .content a {
        text-decoration: none;
        width: 100%;
        background-color: green;
        height: 40px;
        line-height: 40px;
        display: block;
        margin-bottom:15px;
        color: #fff;
        text-align: center;
        border-radius: 4px;
    }
    .login .content .profile {
        font-size: 12px;
        text-align: center;
        color: #ccc;
        width: 100%;
        display: block;
    }
</style>