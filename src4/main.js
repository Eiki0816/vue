// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import app from './components/app'


Vue.use(VueResource)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<app/>',
  components: { app }
})
