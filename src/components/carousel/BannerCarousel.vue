<template>
    <div class="carousel">
        <div class="carousel-inner">
            <CarouselItem v-for="(slide, index) in slides" :slide="slide" :key="index" :current-slide="currentSlide"
                :index="index" :direction="direction" />
            <CarouselControls @prev="prev" @next="next" />
        </div>
    </div>
</template>
<script>
import CarouselItem from "./CarouselItem.vue";
import CarouselControls from "./CarouselControls.vue";
export default {
    props: ["slides"],
    components: { CarouselItem, CarouselControls },
    data() {
        return {
            currentSlide: 0,
            slideInterval: null
        }
    },
    methods: {
        setCurrentSlide(index) {
            this.currentSlide = index;
        },
        prev() {
            const index = this.currentSlide > 0 ? this.currentSlide - 1 : this.slides.length - 1;
            this.currentSlide = index;
            this.direction = "left";
        },
        next() {
            const index = this.currentSlide < this.slides.length - 1 ? this.currentSlide + 1 : 0;
            this.currentSlide = index;
            this.direction = "right";
        }
    },
    mounted() {
        this.slideInterval = setInterval(() => {
            this.next;
        }, 8000)
    },
    beforeUnmount() {
        clearInterval(this.slideInterval);
    }
}
</script>
<style lang="scss" scoped>
.carousel {
    display: flex;
    justify-content: center;
}

.carousel-inner {
    position: relative;
    width: 100%;
    height: 900px;
    overflow: hidden;
}
</style>