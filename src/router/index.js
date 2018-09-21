import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Happybuy from '@/components/Happybuy'
import Sadbuy from '@/components/Sadbuy'
import Buy from '@/components/Buy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Happy',
      name: 'Happybuy',
      component: Happybuy
    },
    {
      path: '/Sad',
      name: 'Sadbuy',
      component: Sadbuy
    },
    {
      path: '/Buy',
      name: 'Buy',
      component: Buy
    }
  ]
})
