<template>
    <section class="pt-32 bg-gradient-to-b from-[#F6F6F6] to-white">
        <div class="container">
            <h1 class="w-full text-center text-port-gore ">Vertiebspartner</h1>
            
            <div class="w-full flex flex-col items-center text-port-gore gap-16 py-10 px-4  rounded-[3.125rem] mt-14
                        xs:py-14 md:px-8 lg:flex-row lg:justify-between">
                <div class="self-center lg:w-full relative flex lg:justify-center">
                    <!--Handshake-->
                    <div class="z-0 w-[16rem] xs:w-[24.125rem] aspect-square card-drop p-6 rounded-[3.125rem] bg-white md:p-2 flex relative">
                        <Handshake class="z-10 w-[8rem] xs:w-[10rem]  absolute -top-[3.75rem] -left-8"/>
                        <div class=" m-auto max-w-[17.25rem] w-full ">
                            <img src="/images/business/M.svg" class="m-auto w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
                <div class="w-full flex flex-col">
                    <div class="text-lg leading-[18px] md:text-2xl font-semibold lg:leading-[50px] pb-2">Partner-Programm</div>
                    <h2 class="lg:max-w-[22.5rem]">Gemeinsam zum Erfolg</h2>
                    <p class="md:text-xl mt-8 lg:max-w-[30.75rem]">
                        Lorem ipsum dolor sit amet consectetur. Habitant vitae mauris aliquam sapien habitant vitae. Egestas dignissim ipsum morbi arcu turpis congue ullamcorper in. 
                    </p>
                    <button class="w-fit self-center sm:self-start mt-16 bg-caribbean-green flex font-galano-grotesque-medium font-normal text-port-gore justify-center items-center px-6 py-[0.625rem] rounded-full 
                        tracking-[0.32px] uppercase transition-colors duration-300 ease-in-out hover:text-white hover:bg-port-gore">
                        Mehr erfahren
                    </button>
                </div>

            </div>

            <div class="text-light-dark-grey font-poppins text-xl text-center mt-20 px-4 md:px-8">
                Diese Vertriebspartner setzen bereits auf MobiScan
            </div>
            <CompaniesSlide />
        </div>

    </section>
</template>
<script setup>
import Handshake  from "~/components/partials/includes/Handshake.vue";
import CompaniesSlide from "@/components/partials/includes/CompaniesSlide.vue"
</script>

<style scoped>
 .card-drop {
    filter: drop-shadow(-8px -8px 24px rgba(0, 0, 0, 0.05));
 }
</style>