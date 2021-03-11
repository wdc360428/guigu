// 导入Vue
import Vue from 'vue'

//导入路由
import VueRouter from 'vue-router'

//注册路由
Vue.use(VueRouter)

// 导入路由组件
import Msite from '../pages/Msite/Msite.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

// 导出路由
export default new VueRouter({
    routes: [
        {
            path: '/msite',
            component: Msite,
            meta: {
                FooterGuide: true
            }
        },
        {
            path: '/order',
            component: Order,
            meta: {
                FooterGuide: true
            }
        },
        {
            path: '/search',
            component: Search,
            meta: {
                FooterGuide: true
            }
        },
        {
            path: '/profile',
            component: Profile,
            meta: {
                FooterGuide: true
            }
        },
        {
            path: '/',
            redirect: './msite'
        },
        {
            path: '/login',
            component: Login
        }
    ]
})