<template>
    <div class=" shadow-lg  w-full max-w-[24.1875rem] rounded-3xl px-10 py-8 space-y-10">
        <div class=" w-full flex flex-col items-start text-dark-grey text-lg lg:text-xl">
            <span class="  font-galano-grotesque-medium font-semibold ">{{address}}</span>
            <span class=" font-galano-grotesque font-normal">{{subaddress}}</span>
        </div>
        <div class=" w-full flex flex-col items-start text-dark-grey text-lg lg:text-xl">
            <span class="  font-galano-grotesque  ">{{phone}}</span>
            <a :href="link" class=" text-caribbean-green font-galano-grotesque  font-normal" target="_blank">Website</a>
        </div>
    </div>
</template>

<script setup>
 const props = defineProps(['address','subaddress','phone','link'])
</script>