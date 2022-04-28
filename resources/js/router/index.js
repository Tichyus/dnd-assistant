import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: () => import(/* webpackChunkName: "home" */ "../Pages/HomePage.vue"),
        },
        // {
        //   path: "/spells",
        //   name: "Spells",
        //   component: () =>
        //     import(/* webpackChunkName: "spells" */ "@/pages/Spells.vue"),
        // },
        // {
        //   path: "/druid",
        //   name: "Druid",
        //   component: () =>
        //     import(/* webpackChunkName: "druid" */ "@/pages/Druid.vue"),
        // },
        // {
        //   path: "/background",
        //   name: "Background",
        //   component: () =>
        //     import(/* webpackChunkName: "background" */ "@/pages/Background.vue"),
        // },
    ],
});

export default router;
