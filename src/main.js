import Vue from 'vue'
import $log from 'logger'

import App from './App.vue'
import config from 'config'
import router from './router'
import store from './store'

// prevents from display notice about running in dev mode
Vue.config.productionTip = false

$log.info('config:', config);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
