import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import demo from '@/components/demo'
import detalle_herramienta from '@/components/herramientas/detalle_herramienta'
import login from '@/components/login/login'
import factura_compra from '@/components/factura_compra/factura_compra'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: demo
    },
    {
      path: '/herramienta',
      name: 'detalle_herramienta',
      component: detalle_herramienta
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/factura_compra',
      name: 'factura_compra',
      component: factura_compra
    }
  ]
})
