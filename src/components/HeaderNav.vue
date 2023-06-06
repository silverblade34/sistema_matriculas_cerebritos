<template>
  <div class="nav-header w-full flex pr-5">
    <div class="container">
      <div class="logo h-full relative">
        <img :src="logo" alt="">
      </div>
    </div>
    <div class="w-full container-items flex text-white items-center justify-end gap-10">
      <div class="item" v-for="item in itemsList" :key="item.name">
        <router-link class="button-link" :to="item.path">
          <span>{{ item.name }}</span>
        </router-link>
      </div>
    </div>
  </div>
</template>
  
<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    logo: String,
  },
  data() {
    const itemsList = [
      { name: "Inicio", path: "/" },
      { name: "Nosotros", path: "/about" },
      { name: "Blog", path: "/blog" },
      { name: "Matricula", path: "/register" },
      { name: "Servicios", path: "/services" },
    ];
    return { itemsList };
  },
});
</script>
  
<style lang="scss" scoped>
.nav-header {
  height: 100px;
  overflow: hidden;

  .logo {
    position: relative;
    width: 15rem;
    padding-left: 4rem;

    img {
      height: 80px;
    }
  }

  .button-link {
    position: relative;
    padding: 0.5rem;
    transition: border-bottom-color 0.3s ease;

    &.router-link-exact-active {
      color: #3fff3f;
      border-bottom: 3px solid #3fff3f;
    }
  }

  .button-link:hover {
    border-bottom: 3px solid #ffffff;
  }
}</style>
  