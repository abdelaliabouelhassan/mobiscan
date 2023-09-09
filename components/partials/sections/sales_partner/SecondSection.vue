<template>
    <div class=" w-full flex flex-col items-center space-y-10 pt-20 pb-1">
        <h2 class="text-4xl leading-9 sm:text-4xl sm:leading-9 lg:text-[3.125rem] lg:leading-[3.125rem] text-center text-port-gore">Ihre Vorteile</h2>

        <div class=" w-full grid lg:grid-cols-3 container px-4 md:px-8 gap-y-8 lg:gap-6 xl:gap-8 justify-items-center">
            <AdvantageCard img="/images/sales_partner/innovation.svg" title="Innovation" description="Lorem ipsum dolor sit amet consectetur." />
            <AdvantageCard img="/images/sales_partner/entwicklung.svg" title="Entwicklung" description="Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur." />
            <AdvantageCard img="/images/sales_partner/fortschritt.svg" title="Fortschritt" description="Lorem ipsum dolor sit amet consectetur." />
        </div>

        <div class=" w-full pt-24 container px-4 md:px-8 ">
            <div class="w-full bg-port-gore rounded-[3.125rem] px-4 sm:px-8  md:px-12 lg:px-4 py-20">
              <div class="w-full flex lg:flex-row flex-col items-center space-y-10 md:space-y-12 lg:space-y-0 lg:space-x-4  justify-between ">
                <div class="w-full bg-port-gore rounded-full   flex justify-center">
                  <img
                    src="/images/sales_partner/testimonial.png"
                    class=" h-[14rem] w-[14rem] md:w-[24.1875rem] md:h-[24.1875rem]"
                    alt=""
                  />
                </div>

                <div class="flex flex-col items-center lg:items-start  space-y-8 w-full ">
                  <h2 class="text-white text-center lg:text-start" >
                  Lorem ipsum dolor est figum
                  </h2>
                  <p class="text-white text-center lg:text-start text-lg md:text-xl lg:max-w-[32.5625rem] ">
                  Lorem ipsum dolor sit amet consectetur. Suspendisse risus erat id nullam velit in. Tristique pretium viverra cursus felis eu elit bibendum quam. Amet pellentesque diam quam pretium est praesent mi. Adipiscing tellus laoreet velit senectus non. Pretium duis magna tempor cursus at metus nulla.
                  </p>
                  <p class=" text-white text-lg md:text-xl text-center lg:text-start">
                  <span class=" font-bold"> Zino Meuli</span>
                  <br>
                    MOBISCAN AG
                  </p>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>


<script setup>
 import AdvantageCard from "@/components/UI/AdvantageCard.vue"
</script>