<template>
  <!-- <BannerCarrusel/> -->
  <section>
    <BannerCarousel :slides="images" />
    <h2 class="title">Nuestros cursos</h2>
  </section>
</template>
<script>
import { defineComponent } from 'vue';
import banner1 from '@/assets/banner-slider-1.webp'
import banner2 from '@/assets/banner-slider-2.webp'
import banner3 from '@/assets/banner-slider-3.webp'
import banner4 from '@/assets/banner-slider-4.webp'
import BannerCarousel from '@/components/carousel/BannerCarousel.vue';
export default defineComponent({
  name: "HomeView",
  components: {
    BannerCarousel
  },
  data() {
    return {
      images: [
        banner1,
        banner2,
        banner3,
        banner4
      ]
    }
  }
})
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Fredoka:wght@500&display=swap');

.title {
  font-family: 'Fredoka', sans-serif;
  height: 30px;
}
</style>