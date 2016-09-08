import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import About from './About'
import Archives from './Archive'

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

var router = new VueRouter()

router.map({'/home': {component: About},
  '/archives': {component: Archives}})

router.start(App, '#app')
