<template>
    <div class=" w-full flex flex-col items-center space-y-10 pt-20 pb-1">
        <h1 class=" text-port-gore text-[3.125rem] text-center font-galano-grotesque-medium">Ihre Vorteile</h1>

        <div class=" w-full grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card img="/images/sales_partner/innovation.svg" title="Innovation" desciption="Lorem ipsum dolor sit amet consectetur." />
            <Card img="/images/sales_partner/entwicklung.svg" title="Entwicklung" desciption="Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur." />
            <Card img="/images/sales_partner/fortschritt.svg" title="Fortschritt" desciption="Lorem ipsum dolor sit amet consectetur." />

        </div>

        <div class=" w-full pt-24">
            <div class="w-full bg-port-gore rounded-[3.125rem] px-4 py-20">
      <div
        class="w-full flex lg:flex-row flex-col items-center space-y-8 lg:space-y-0 lg:space-x-4 justify-between max-w-[1024px] mx-auto"
      >
        <div
          class=" bg-port-gore rounded-full  h-[14rem] w-[14rem] md:w-[24.1875rem] md:h-[24.1875rem] flex"
        >
          <img
            src="/images/sales_partner/testimonial.png"
            class="m-auto object-cover "
            alt=""
          />
        </div>

        <div
          class="flex flex-col items-center lg:items-start  space-y-8 w-full max-w-[30.75rem]"
        >
          <h2
            class="text-white text-center lg:text-start  font-galano-grotesque-medium font-normal text-4xl md:text-[3.125rem] md:leading-[3.125rem]"
          >
           Lorem ipsum dolor est figum
          </h2>
          <p class="text-white text-center lg:text-start text-lg md:text-xl max-w-[32.5625rem] ">
           Lorem ipsum dolor sit amet consectetur. Suspendisse risus erat id nullam velit in. Tristique pretium viverra cursus felis eu elit bibendum quam. Amet pellentesque diam quam pretium est praesent mi. Adipiscing tellus laoreet velit senectus non. Pretium duis magna tempor cursus at metus nulla.
          </p>
          <p class=" text-white text-xl font-galano-grotesque text-center lg:text-start">
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
 import Card from "@/components/UI/Card.vue"
</script>