import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import ResponsiveCards from '../components/ResponsiveCards'
import Flexgrid from '../components/Flexgrid'

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
    }
    
  ]
})
