import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login.vue'
import home from '../views/home.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component:login ,
    },
    {
        path: '/task',
        name: 'task',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: home,
        beforeEnter:(to, from, next) => {
            Vue.prototype.$fauth.onAuthStateChanged(user => {
                if (!user) {
                    next('/')
                } else {
                    console.log("utilisateur connecté")
                    next()
                }
            })
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
