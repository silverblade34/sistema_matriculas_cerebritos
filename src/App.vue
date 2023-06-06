<template>
  <div id="app">
    <HeaderNav :logo="LogoCerebritos" class="header-nav"/>
    <router-view />
  </div>
</template>

<script>
import HeaderNav from '@/components/HeaderNav.vue';
import LogoCerebritos from '@/assets/logo-cerebritos.png';
export default {
  name: "App",
  components:{
      HeaderNav
    },
    data(){
      return {LogoCerebritos}
    }
};
</script>

<style lang="scss">
#app {
  * {
    transition: linear 0.2s;
  }
  .header-nav{
    position: fixed;
    z-index: 999;
  }
}
</style>
