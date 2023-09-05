<template>
    <section class=" w-full  pb-36 space-y-10">
        <div class="grid sm:grid-cols-2 sm:pt-4 md:pt-0 md:grid-cols-3 gap-6 w-full">
            <AddressCard v-for="i in 10" :key="i" address="Fidigit (Schweiz) AG" subaddress="3011 Bern" phone="+41 58 906 16 00" link="http://localhost:3001"/>
        </div>
      <div class=" w-full">
        <SalesForm />
      </div>
    </section>
</template>

<script setup>
 import AddressCard from "@/components/UI/AddressCard.vue"
 import SalesForm from "@/components/partials/includes/SalesForm.vue"
</script>