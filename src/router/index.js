import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import ResponsiveCards from '../components/ResponsiveCards'
import Flexgrid from '../components/Flexgrid'
import Coins from '../components/Coins'
import Coindetail from '../components/Coindetail'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/responsivecards',
      name: 'ResponsiveCards',
      component: ResponsiveCards
    },
    {
      path: '/flexgrid',
      name: 'Flexgrid',
      component: Flexgrid
    },
    {
      path: '/coins',
      name: 'Coins',
      component: Coins
    },
    {
      path: '/coindetail/:id',
      name: 'Coindetail',
      component: Coindetail
    }
    
  ]
})
