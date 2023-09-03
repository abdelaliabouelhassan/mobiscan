<template>
    <div class="background">
        <Header />
        <main class="">
            <slot />
        </main>
        <Footer />
    </div>
</template>
<script setup>
import Header from '@/components/partials/Header.vue'
import Footer from '@/components/partials/Footer.vue'
</script>


<style scoped>
.background {
    background: linear-gradient(180deg, #F6F6F6 0%, rgba(246, 246, 246, 0.00) 100%);
}
</style>