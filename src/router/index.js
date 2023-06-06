import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ServicesView from "../views/ServicesView.vue";
import ContactUs from "../views/ContactUs.vue";
import BlogView from "../views/BlogView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView
    },
    {
      path: "/about",
      name: "About",
      component: AboutView
    },
    {
      path: "/services",
      name: "Services",
      component: ServicesView
    },
    {
      path: "/contact",
      name: "ContactUs",
      component: ContactUs
    },
    {
      path: "/blog",
      name: "Blog",
      component: BlogView
    },
    {
      path: "/login",
      name: "Login",
      component: LoginView
    },
    {
      path: "/register",
      name: "Register",
      component: RegisterView
    }
  ]
});
export default router;