<template>
    <section class="product-slider">
        <img :src="img" v-for="img in data.images" :key="img" alt="">
        <div class="card">
            <div class="panel-1">
            </div>
            <div class="panel-2">
            </div>
            <ProductDetails
            />
            <div class="arrow-left">
                <i class="fa-solid fa-arrow-left"></i>
            </div>
            <div class="arrow-right">
                <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>
    </section>
</template>
  
<script>
import banner1 from '@/assets/banner-slider-1.webp'
import banner2 from '@/assets/banner-slider-2.webp'
import banner3 from '@/assets/banner-slider-3.webp'
import banner4 from '@/assets/banner-slider-4.webp'
import ProductDetails from './ProductDetails.vue'
import { defineComponent } from 'vue'
export default defineComponent({
    name: "BannerCarrusel",
    components: {ProductDetails},
    data() {
        return {
            slideIndex: 0,
            count: 0,
            active: 1,
            data: {
                images: [
                    banner1,
                    banner2,
                    banner3,
                    banner4
                ]
            }
        }
    }
})
</script>
<style lang="scss" scoped></style>