<template>
    <div class="">
        <HeroSection />
        <SecondSection />
        <ThirdSection/>
        <FourthSection />
        <SixthSection />
    </div>
</template>
<script setup>
import HeroSection from '@/components/partials/sections/home/HeroSection.vue'
import SecondSection from "@/components/partials/sections/home/SecondSection.vue"
import ThirdSection from "@/components/partials/sections/home/ThirdSection.vue"
import FourthSection from "@/components/partials/sections/home/FourthSection.vue"
import SixthSection from "@/components/partials/sections/home/SixthSection.vue"
import '@splidejs/vue-splide/css';


</script>