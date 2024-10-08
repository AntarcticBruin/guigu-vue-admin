export const constRoute = [
    {
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name: 'Login',
        meta: {
            title: '登录',
            hidden: true,
            icon: 'Promotion'
        }
    },
    {
        path: '/',
        component: () => import('@/layout/index.vue'),
        name: 'Layout',
        redirect: '/home',
        meta: {
            title: '',
            hidden: false,
            icon: ''
        },
        children: [
            {
                path: '/home',
                component: () => import('@/views/home/index.vue'),
                name: 'Home',
                meta: {
                    title: '首页',
                    hidden: false,
                    icon: 'Tools'
                }
            },

        ]
    },
    {
        path: '/404',
        component: () => import('@/views/404/index.vue'),
        name: '404',
        meta: {
            title: '404',
            hidden: true,
            icon: 'Grid'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        redirect: '404',
        name: 'Any',
        meta: {
            title: '任意路由',
            hidden: true,
            icon: 'InfoFilled'
        }
    },
    {
        path: '/screen',
        component: () => import('@/views/screen/index.vue'),
        name: 'Screen',
        meta: {
            title: '数据大屏',
            hidden: false,
            icon: 'Promotion'
        }
    },
    {
        path: '/acl',
        component: () => import('@/layout/index.vue'),
        name: 'Acl',
        redirect: '/acl/user',
        meta: {
            title: '权限管理',
            hidden: false,
            icon: 'Lock',
        },
        children: [
            {
                path: '/acl/user',
                component: () => import('@/views/acl/user/index.vue'),
                name: 'User',
                meta: {
                    title: '用户管理',
                    hidden: false,
                    icon: 'Tools'
                }
            },
            {
                path: '/acl/role',
                component: () => import('@/views/acl/role/index.vue'),
                name: 'Role',
                meta: {
                    title: '角色管理',
                    hidden: false,
                    icon: 'Tools'
                }
            },
            {
                path: '/acl/permission.ts',
                component: () => import('@/views/acl/permission/index.vue'),
                name: 'Permission',
                meta: {
                    title: '菜单管理',
                    hidden: false,
                    icon: 'Tools'
                }
            }

        ]
    },
    {
        path: '/product',
        component: () => import('@/layout/index.vue'),
        name: 'Product',
        redirect: '/product/trademark',
        meta: {
            title: '商品管理',
            hidden: false,
            icon: 'Goods',
        },
        children: [
            {
                path: '/product/trademark',
                component: () => import('@/views/product/trademark/index.vue'),
                name: 'Trademark',
                meta: {
                    title: '品牌管理',
                    hidden: false,
                    icon: 'Tools'
                }
            },
            {
                path: '/product/attr',
                component: () => import('@/views/product/attr/index.vue'),
                name: 'Attr',
                meta: {
                    title: '属性管理',
                    hidden: false,
                    icon: 'Tools'
                }
            },
            {
                path: '/product/spu',
                component: () => import('@/views/product/spu/index.vue'),
                name: 'Spu',
                meta: {
                    title: 'SPU管理',
                    hidden: false,
                    icon: 'Tools'
                }
            },
            {
                path: '/product/sku',
                component: () => import('@/views/product/sku/index.vue'),
                name: 'Sku',
                meta: {
                    title: 'SKU管理',
                    hidden: false,
                    icon: 'Tools'
                }
            }

        ]
    }
]