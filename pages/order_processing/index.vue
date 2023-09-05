<template>
     <div class=" w-full">
            <FirstSection />
            <SecondSection />
            <div class="bg-gradient-to-b  from-white to-[#F6F6F6]">
              <ThirdSection />
              <FourthSection />
            </div>
            <FifthSection />
   </div>
</template>

<script setup>
  import FirstSection from "@/components/partials/sections/order_processing/FirstSection.vue"
  import SecondSection from "@/components/partials/sections/order_processing/SecondSection.vue"
  import ThirdSection from "@/components/partials/sections/order_processing/ThirdSection.vue"
  import FourthSection from "@/components/partials/sections/order_processing/FourthSection.vue"
  import FifthSection from "@/components/partials/sections/order_processing/FifthSection.vue"
</script>