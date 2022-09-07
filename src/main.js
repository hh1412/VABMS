import Vue from 'vue'
import App from './views/App.vue'
import '@/components/Antd/antd-components.js'
import router from '@/routes'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')