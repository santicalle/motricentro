import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import demo from '@/components/demo'
import detalle_herramienta from '@/components/herramientas/detalle_herramienta'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'demo',
      component: demo
    },
    {
      path: '/herramienta',
      name: 'detalle_herramienta',
      component: detalle_herramienta
    }
  ]
})
