//'use strict';
import Vue from 'vue'
import App from './App.vue'
//import router from './router'
//import 'bootstrap';
import 'bootstrap/js/dist/util'
import 'bootstrap/js/dist/button'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'
import "bootstrap/scss/bootstrap.scss";
import 'jquery';
//import 'popper.js';
import {
  Input,
  Drawer,
  Row,
  Backtop,
  Select,
  Option,
  Image,
  Divider,
  Icon,
  Button,
  Loading,
  MessageBox,
  Message,
  Progress,
  Switch,
  Notification,//https://github.com/ElemeFE/element/issues/3450#issuecomment-500717476
} from 'element-ui';
import '@femessage/element-ui/lib/theme-chalk/skeleton.css';
import Skeleton from '@femessage/element-ui/lib/skeleton.js';
import VeLine from 'v-charts/lib/line.common'

//import VueHighlightJS from 'vue-highlightjs'
//Vue.use(VueHighlightJS);

//gtag
import VueGtag from "vue-gtag";
if (process.env.NODE_ENV !== "development") {
  Vue.use(VueGtag, {
    config: { id: "UA-90617066-2" }
  });

}

import VueMeta from 'vue-meta'

//import './registerServiceWorker'
Vue.use(VueMeta);
Vue.use(Input);
Vue.use(Drawer);
Vue.use(Row);
Vue.use(Backtop);
Vue.use(Select);
Vue.use(Option);
Vue.use(Image);
Vue.use(Divider);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Progress);
Vue.use(Switch);
Vue.use(Loading.directive);
Vue.use(Skeleton);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;
Vue.component(VeLine.name, VeLine);
//Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  //router,
}).$mount('#app');
