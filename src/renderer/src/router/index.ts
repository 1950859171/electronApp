import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { useUserStore } from '@renderer/stores/user'
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// localStorage.setItem('token', '123')
const whiteList: string[] = []
router.beforeEach((to, from, next) => {
  const token = useUserStore().userInfo.token
  if (to.path === '/login') {
    if (token) return next('/')
  } else if (!whiteList.includes(to.path)) {
    if (!token) {
      return next('/login')
    }
  }
  next()
})

export default router
