import Vue from 'vue'
import App from './App'
import sqliteDB from './components/sqliteDB.vue'


Vue.config.productionTip = false

Vue.component('sqliteDB',sqliteDB)

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()


