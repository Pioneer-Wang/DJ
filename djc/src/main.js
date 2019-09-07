import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'; 

import 'element-ui/lib/theme-chalk/index.css';


import axios from './config/http';

import vueAxios from 'vue-axios'
// 富文本编辑器
import quillEditor  from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
 

Vue.use(quillEditor)
Vue.use(ElementUI)
Vue.use(vueAxios,axios)
// Vue.prototype.$axios=axios;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
