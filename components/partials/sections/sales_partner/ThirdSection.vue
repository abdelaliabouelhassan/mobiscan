<template>
    <div class=" w-full">
            <div class="text-light-dark-grey font-poppins text-xl text-center mt-20 px-4 md:px-8">
                Diese Vertriebspartner setzen bereits auf MobiScan
            </div>
             <CompaniesSlide />
            <div class=" w-full container px-4 md:px-8 py-28">
               <SalesForm />
            </div>
    </div>
</template>


<script setup>
import CompaniesSlide from "@/components/partials/includes/CompaniesSlide.vue"
import SalesForm from "@/components/partials/includes/SalesForm.vue"

</script>

