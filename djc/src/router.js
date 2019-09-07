import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home';


Vue.use(Router)

const router = new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    // {
    //   path:'/',
    //   redirect:'/index'
    // },
  
    {
      path: '/',
      name: 'index',
      component: Home,
      children: [
        {
          path: 'user',
          name: 'user',
          component: () => import('./views/user/User.vue')
        },
        {
          path: 'tiezi',
          name: 'tiezi',
          component: () => import('./views/tiezi/Teizi.vue')

        },
        {
          path: 'lunbo',
          name: 'lunbo',
          component: () => import('./views/lunbo/Lunbo.vue')
        },
        // 心得体会
        {
          path: '/xinde',
          name: 'xinde',
          // redirect:'/xinde',
          component: () => import('./views/xinde/XinDe.vue')
        },
        // 汇报
        {
          path: '/report',
          name: 'report',
          component: () => import('./views/report/Report.vue')
        }

      ]
    },
    {
      path: '/talk',
      name: 'talk',
      redirect: '/talk/list',
      component: Home,
      children: [
        {
          path: '/talk/list',
          name: 'list',
          component: () => import('./views/talk/List.vue')
        },
        {
          path: '/talk/add',
          name: 'add',
          component: () => import('./views/talk/Add.vue')
        },

      ]
    },

    {
      path: '/news',
      name: 'NEWS',
      redirect: "/news/list",
      component: Home,
      children: [
        {
          path: "/news/list",
          name: "新闻列表页",
          component: () => import('./views/news/NewsList.vue')
        },
        {
          path: "/news/add",
          name: "新闻添加页",
          component: () => import('./views/news/AddNew.vue')
        },

      ]
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/zhuce/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login/Login.vue')
    },
  ]
})

// 添加路由守卫
router.beforeEach((to, from, next) => {
  const isLogin = localStorage.eleToken ? true : false;
  // console.log(isLogin)
  if (to.path == "/login" || to.path == "/register") {
    next();
  } 
  else {
    isLogin ? next() : next("/login");
  }
  // next();
})

export default router;
