<template>
    <div>
        <Header />
        <main class="pt-[4.75rem]">
            <slot />
        </main>
    </div>
</template>
<script setup>
import Header from '@/components/partials/Header.vue'
</script>