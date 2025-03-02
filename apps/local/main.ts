//'use strict';
import {createApp} from 'vue'
import App from '../../libs/App.vue'
import router from '../../libs/router/full'
import {store, key} from '../../libs/store'
//import 'bootstrap';
import 'bootstrap/js/src/util'
import 'bootstrap/js/dist/button'
import 'bootstrap/js/dist/dropdown'
import 'bootstrap/js/dist/collapse'

//icons
//TODO svg-loader
//import "bootstrap-icons/font/bootstrap-icons.css";

import {
    ElBacktop,
    ElImage,
    ElSkeletonItem,
    ElCollapseTransition,
    ElSkeleton,
    ElTable,
    ElTableColumn,
    ElButton,
    ElLoading,
    ElDivider,
    ElInput,
    ElCarousel,
    ElCarouselItem,
    ElNotification,
    ElTag,
    ElRow,
    ElSelect,
    ElOption,
    ElSwitch,
    ElDrawer,
    //ElIcon,
} from 'element-plus'//


//import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

import VueGtag from "vue-gtag-next";
import { trackRouter } from 'vue-gtag-next'

//use @vueuse/head
import { createHead } from "@vueuse/head"

import {ScrollTo} from "../../libs/share/Tools";

//plyr
import 'plyr/dist/plyr.css'

router.afterEach(() => {
  ScrollTo(0)
})

import {i18n} from "../../libs/i18n"
const app = createApp(App)
app.config.globalProperties.append = (path: string, pathToAppend: string) => path + (path.endsWith('/') ? '' : '/') + pathToAppend

//element-plus
app.use(ElBacktop).use(ElImage).use(ElSkeletonItem).use(ElCollapseTransition).use(ElSkeleton).use(ElTable).use(ElTableColumn).use(ElButton).use(ElLoading).use(ElDivider).use(ElInput).use(ElCarousel).use(ElCarouselItem).use(ElNotification).use(ElTag).use(ElRow).use(ElSelect).use(ElOption).use(ElSwitch).use(ElDrawer)
//app.use(ElIcon)
//app.use(ElementPlus)
app.use(router).use(store, key).use(i18n).use(createHead())
app.provide('online_mode', false)
if (process.env.NODE_ENV !== 'development') {
  app.use(VueGtag, {
    property: [
      {id: import.meta.env.VITE_GA_ID},
    ]
  });
  trackRouter(router);
}
router.isReady().then(() => app.mount('#app'))
//app.mount('#app')
