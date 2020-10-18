import Vue from 'vue'
import Element from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import dayjs from 'dayjs'
import Header from '@/components/Header.vue'
Vue.use(Element, { locale })
Vue.prototype.$dayjs = dayjs
Vue.component(Header)
