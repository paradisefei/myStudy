/* 
  1.列表在home组件固定显示，在search组件根据鼠标移入移出显示隐藏
    
*/
// @ts-nocheck
import Vue from "vue";
import App from "./App";

import router from "./router";
import store from "./store";

// 引入公共资源
import "./styles/reset.css";

import "./plugins/element.js";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  render: (h) => h(App),
  // 应用router
  router,
  store,
}).$mount("#app");
