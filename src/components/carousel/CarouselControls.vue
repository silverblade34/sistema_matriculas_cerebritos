<template>
    <button class="carousel-control left" @click="$emit('prev')"><i class="fa-solid fa-arrow-left"></i></button>
    <button class="carousel-control right" @click="$emit('next')"><i class="fa-solid fa-arrow-right"></i></button>
</template>
<script>
export default ({
    name: "CarouselControls",
    emits: ['prev','next'], 
})
</script>
<style lang="scss" scoped>
.carousel-control {
    background-color: rgba(116, 116, 116, 0.671);
    border: none;
    display: inline-block;
    position: absolute;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    top: calc(50%);
    color: white;
    cursor: pointer;
}

.left{
    left: 0;
}

.right{
    right: 0;
}
</style>