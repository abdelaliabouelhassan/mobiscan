<template>
    <div class=" w-full h-full ">
           <FirstSection />
        <div class=" w-full bg-gradient-to-b px-4 from-[#F6F6F6] to-white">
             <SecondSection />
             <ThirdSection />
         </div>
   </div>
</template>

<script setup>
  import FirstSection from "@/components/partials/sections/sales_partner/FirstSection.vue"
  import SecondSection from "@/components/partials/sections/sales_partner/SecondSection.vue"
  import ThirdSection from "@/components/partials/sections/sales_partner/ThirdSection.vue"

</script>