<template>
    <section class="bg-gradient-to-b from-[#F6F6F6] to-white pt-20 sm:pt-24 lg:pt-32 pb-36">
        <div class="text-center w-full container px-4 md:px-8">
            <h1 class="text-4xl leading-9 sm:text-4xl sm:leading-9 lg:text-[3.125rem] lg:leading-[3.125rem] text-port-gore">Ihr Nutzen</h1>
            <p class="mt-6 sm:text-lg lg:text-xl lg:mt-10 max-w-[51.625rem] mx-auto">Die Auftrags­bearbeitung ist das Herz­stück der integrierten MOBISCAN Applikation. Zudem zeichnet sich die Applikation durch folgende Vorteile aus:</p>
        </div>
        <div class="container px-4 md:px-8 grid grid-cols-1 gap-y-8 lg:gap-6 xl:gap-8 justify-center justify-items-center lg:grid-cols-3 mt-16">
            
            <AdvantageCard img="/images/order_processing/umfassend.svg" title="Umfassend" description="Lorem ipsum dolor sit amet consectetur." />
            <AdvantageCard img="/images/order_processing/digitalisiert.svg" title="Digitalisiert" description="Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur." />
            <AdvantageCard img="/images/order_processing/ubersichtlich.svg" title="Übersichtlich" description="Lorem ipsum dolor sit amet consectetur." />
            
        </div>
    </section>
</template>

<script setup>
import AdvantageCard from "@/components/UI/AdvantageCard.vue";
</script>