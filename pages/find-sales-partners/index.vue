<template>
     <div class=" w-full h-full px-4 bg-gradient-to-b from-[#F6F6F6] to-white">
        <div class=" w-full max-w-[76.25rem] mx-auto ">
           <div class=" pb-[17rem] sm:pb-[30rem] md:pb-[35rem] lg:pb-[40rem]">
             <FirstSection />
           </div>
            <SecondSection />
        </div>
   </div>
</template>

<script setup>
  import FirstSection from "@/components/partials/sections/find_sales_partners/FirstSection.vue"
  import SecondSection from "@/components/partials/sections/find_sales_partners/SecondSection.vue"
</script>