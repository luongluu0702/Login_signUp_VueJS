import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import signup from '@/components/signup'
import user from '@/components/user'
import editUser from '@/components/editUser'
Vue.use(Router)
/*eslint-disable*/
export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/signup',
      name: 'signup',
      component: signup
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/edit',
      name: 'editUser',
      component: editUser
    }
  ]
})
