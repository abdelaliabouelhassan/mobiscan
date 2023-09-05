<template>
     <div class=" w-full h-full ">
      <div class=" w-full  bg-gradient-to-b px-4 from-[#F6F6F6] to-white">
           <div class=" w-full max-w-[76.25rem] mx-auto ">
           <FirstSection />
        </div>
      </div>
        <div class=" w-full bg-gradient-to-b px-4 from-[#F6F6F6] to-white">
         <div class=" w-full max-w-[76.25rem] mx-auto ">
             <SecondSection />
             <ThirdSection />
         </div>
        </div>
   </div>
</template>

<script setup>
  import FirstSection from "@/components/partials/sections/sales_partner/FirstSection.vue"
  import SecondSection from "@/components/partials/sections/sales_partner/SecondSection.vue"
  import ThirdSection from "@/components/partials/sections/sales_partner/ThirdSection.vue"

</script>