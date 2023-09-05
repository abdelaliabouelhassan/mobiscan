<template>
    <div class="drop-card w-full bg-white py-10 px-6 rounded-[3.125rem]">
        <div class=" w-full flex flex-col items-center space-y-8">
            <img :src="img" class=" max-w-[9.9375rem] max-h-[9.9375rem] rounded-full object-cover w-full h-full" alt="">
           <div class=" w-full flex flex-col items-center space-y-4">
             <span class=" text-port-gore font-galano-grotesque-medium text-3xl">{{title}}</span>
            <p class=" text-center max-w-[20rem] w-full text-dark-grey font-galano-grotesque text-xl">
                {{desciption}}
            </p>
           </div>
        </div>
    </div>
</template>

<script setup>
  const props = defineProps(['title','desciption','img'])
</script>


<style scoped>
 .drop-card {
    filter: drop-shadow(-8px -8px 24px rgba(0, 0, 0, 0.05));
 }
</style>