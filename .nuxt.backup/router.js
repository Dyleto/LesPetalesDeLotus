import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1c61b567 = () => interopDefault(import('..\\pages\\account.vue' /* webpackChunkName: "pages/account" */))
const _d85305ba = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _3c4b9e53 = () => interopDefault(import('..\\pages\\members.vue' /* webpackChunkName: "pages/members" */))
const _68c5364e = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _51413259 = () => interopDefault(import('..\\pages\\settings.vue' /* webpackChunkName: "pages/settings" */))
const _6ba24be8 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account",
    component: _1c61b567,
    name: "account"
  }, {
    path: "/login",
    component: _d85305ba,
    name: "login"
  }, {
    path: "/members",
    component: _3c4b9e53,
    name: "members"
  }, {
    path: "/register",
    component: _68c5364e,
    name: "register"
  }, {
    path: "/settings",
    component: _51413259,
    name: "settings"
  }, {
    path: "/",
    component: _6ba24be8,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
