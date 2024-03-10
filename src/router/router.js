import Main from "@/pages/Home.vue";
import {createRouter, createWebHistory} from "vue-router";
import Contacts from "@/pages/Contacts.vue"
import About from "@/pages/Main.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: Contacts
    },
    {
        path: '/about',
        component: About
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)

})
console.log(process.env.BASE_URL)
export default router;
