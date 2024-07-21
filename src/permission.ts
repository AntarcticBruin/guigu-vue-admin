//路由鉴权
import router from "./router";
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import useUserStore from "./store/modules/user.ts";
import pinia from "./store";
import {ElMessage} from "element-plus";
//需要传入大仓库
let userStore = useUserStore(pinia);

//全局前置守卫
router.beforeEach(async (to: any, from: any, next: nay) => {
    //访问某一个路由之前触发
    // to:将要访问的路由对象
    // from:从哪个路由而来
    //next： 路由的放行函数
    nprogress.start()
    //获取token，判断永用户是否邓丽
    let token = userStore.token;
    let username = userStore.username;
    if (token) {
        if (to.path === '/login') {
            next({path: '/home'})
        } else {
            if (username) {
                next();
            } else {
                try {
                    await userStore.userInfo();
                    next();
                } catch (err) {
                    ElMessage.error(err.message);
                }
            }
        }
    } else {
        if (to.path === '/login') {
            next()
        } else {
            next({path: '/login'})
        }
    }
    next();
})
//全局前置守卫
router.afterEach((to: any, from: any) => {
    nprogress.done()
})
//任意路由的切换实现进度条效果
//路由鉴权
//全部路由组件
//用户未登录只能访问login其他的不能访问
//用户登录成功之后不能访问login