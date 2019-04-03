import Vue from 'vue'
import $log from 'logger'

import App from './App.vue'
import config from 'config'
import router from './router'
import store from './store'
import api from './interfaces/apiInterface'

// prevents from display notice about running in dev mode
Vue.config.productionTip = false

// make api available everywhere
Vue.prototype.$api = api

$log.info('config:', config);
$log.info('main.js VERSION', VERSION); // eslint-disable-line no-undef

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
