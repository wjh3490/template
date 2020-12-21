import Vue from 'vue';
import VueRouter from 'vue-router';
import BasicLayout from '../layout';

Vue.use(VueRouter);

// hack
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};

export const routes = [
  {
    path: '/',
    redirect: '/books/index',
    component: BasicLayout,
    children: [
      {
        path: '/books/index',
        component: () =>
          import(/*webpackChunkName: 'books' */ '@/views/books/index'),
        name: 'Books',
        meta: { title: 'book', icon: 'el-icon-star-on' },
      },
    ],
  },
  {
    path: '/users',
    redirect: '/users/index',
    component: BasicLayout,
    meta: { title: 'user', icon: 'el-icon-s-help' },
    children: [
      {
        path: '/users/index',
        component: () =>
          import(/*webpackChunkName: 'users' */ '@/views/books/index'),
        meta: { title: 'user1', icon: 'el-icon-s-order' },
        name: 'User',
      },
      {
        path: '/users/user1',
        redirect:'/users/user1/user2',
        component: () =>
          import(/*webpackChunkName: 'users' */ '@/views/users/user.vue'),
        meta: { title: 'user2', icon: 'el-icon-s-cooperation' },
        name: 'User1',
        children: [
          {
            path: '/users/user1/user2',
            component: () =>
              import(/*webpackChunkName: 'users' */ '@/views/users/user1.vue'),
            meta: { title: 'user3',  },
            name: 'User2',
          },
          {
            path: '/users/user1/user3',
            component: () =>
              import(/*webpackChunkName: 'users' */ '@/views/users/user2.vue'),
            meta: { title: 'user4',  },
            name: 'User3',
          },
        ]
      },
    ],
  },
  {
    path: '/articles',
    redirect: '/articles/index',
    component: BasicLayout,
    children: [
      {
        path: '/articles/index',
        name: 'Articles',
        component: () =>
          import(/*webpackChunkName: 'artcles' */ '@/views/articles/index'),
        meta: { title: 'article', icon: 'el-icon-s-promotion' },
      },
    ],
  },
  {
    path: '/videos',
    redirect: '/videos/index',
    component: BasicLayout,
    children: [
      {
        path: '/videos/index',
        name: 'Videos',
        component: () =>
          import(/*webpackChunkName: 'videos' */ '@/views/videos/index'),
        meta: { title: 'video', icon: 'el-icon-s-management' },
      },
    ],
  },
  {
    path: '/audits',
    redirect: '/audits/index',
    component: BasicLayout,
    children: [
      {
        path: '/audits/index',
        name: 'Audits',
        component: () =>
          import(/*webpackChunkName: 'audits' */ '@/views/audits/index'),
        meta: { title: 'audit', icon: 'el-icon-s-flag' },
      },
    ],
  },
 
  {
    path: '/data/index',
    name: 'Data',
    component: () =>
      import(/*webpackChunkName: 'Data' */ '@/views/data/index.vue'),
    meta: { title: 'data', icon: 'el-icon-s-data', noCache: true },
  },
  {
    path: '/login',
    name: 'Login',
    component: () =>
      import(/*webpackChunkName: 'Data' */ '@/views/login/index.vue'),
  },
];
const router = new VueRouter({
  routes,
});

export default router;
