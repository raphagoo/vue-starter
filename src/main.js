import Vue from 'vue'
import VueLogger from 'vuejs-logger';

import App from './App.vue'
import router from './router'
import store from './store'

// Vue.config.productionTip = false
const logOptions = {
    // isEnabled: false,
    logLevel : 'error',
    // stringifyArguments : false,
    // showLogLevel : true,
    // showMethodName : true,
    // separator: '|',
    showConsoleColors: true,
};

Vue.use(VueLogger, logOptions);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
