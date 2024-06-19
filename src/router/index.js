import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Home from "../views/General/Home.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/1",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
