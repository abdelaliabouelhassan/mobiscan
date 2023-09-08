<template>
    <header class="w-full  fixed top-0 left-0 z-50">
        <div class="w-full max-w-[80rem] mx-auto relative flex md:h-[4.75rem] items-center">
            <nav class="w-full h-full bg-white py-2 md:py-0 space-y-5 md:space-y-0 px-8 flex md:flex-row flex-col items-center md:justify-between z-50 rounded-b-[2.5rem] shadow-[0_4px_4px_0_rgba(0,0,0,0.05)]">
                <nuxt-link to="/" class="h-8">
                    <img class="h-full  object-center" src="/images/logo/logo.svg" alt="" srcset="">
                </nuxt-link>
                <button @click="showMenu =!showMenu" class="menu-btn  hidden md:flex font-galano-grotesque-medium font-normal justify-center items-center px-6 py-[0.625rem]  border  rounded-full 
                        tracking-[0.32px] uppercase transition-colors duration-300 ease-in-out
                         " :class="{'bg-port-gore text-white':showMenu,'text-port-gore border-port-gore bg-white md:hover:bg-port-gore md:hover:text-white':!showMenu}">
                        MENU
                </button>
                <button @click="openContactForm" class="bg-caribbean-green font-galano-grotesque-medium font-normal hidden md:flex justify-center items-center px-6 py-[0.625rem] text-port-gore rounded-full 
                    tracking-[0.32px] uppercase transition-colors duration-300 ease-in-out
                    hover:bg-port-gore hover:text-white">
                    Kontakt
                </button>

                <div class=" w-full flex md:hidden items-center justify-between">
                    <button @click="showMenu =!showMenu"  class="menu-btn flex  font-galano-grotesque-medium font-normal justify-center items-center px-6 py-[0.625rem]  border  rounded-full 
                        tracking-[0.32px] uppercase transition-colors duration-300 ease-in-out
                         " :class="{'bg-port-gore text-white':showMenu,'text-port-gore border-port-gore bg-white md:hover:bg-port-gore md:hover:text-white':!showMenu}">
                        MENU
                    </button>
                    <button @click="openContactForm" class="bg-caribbean-green flex font-galano-grotesque-medium font-normal justify-center items-center px-6 py-[0.625rem] text-port-gore rounded-full 
                        tracking-[0.32px] uppercase transition-colors duration-300 ease-in-out
                        hover:bg-port-gore hover:text-white">
                        Kontakt
                    </button>
                </div>
            </nav>
            <!-- menu -->
            <transition name="menu">
                <div v-if="showMenu" class="menu z-40 absolute top-0 left-0 w-full pt-[4.75rem] bg-port-gore text-white rounded-b-[2.5rem] 
                        transition-all duration-300 ease-in-out">
                    <div class="w-full max-w-[63.25rem] gap-x-8 gap-y-12 mx-auto py-20 grid sm:grid-cols-2 lg:grid-cols-3 p-4 max-h-[488px] overflow-y-auto">
                        <div class="flex flex-col space-y-5 md:space-y-3">
                            <h3 class="md:mb-9 mb-5 text-3xl md:leading-10 font-galano-grotesque-medium font-normal">MODULE</h3>
                            <nuxt-link @click="showMenu =!showMenu" to="/order_processing" class=" text-lg md:text-xl md:leading-8">Auftragsbearbeitung</nuxt-link>
                            <nuxt-link @click="showMenu =!showMenu" to="/" class="text-lg md:text-xl md:leading-8">Lager</nuxt-link>
                            <nuxt-link @click="showMenu =!showMenu" to="/" class="text-lg md:text-xl md:leading-8">Servicemanagement</nuxt-link>
                            <nuxt-link @click="showMenu =!showMenu" to="/" class="text-lg md:text-xl md:leading-8">Produktionsplanung</nuxt-link>
                        </div>
                        <div class="flex flex-col  space-y-5 md:space-y-3 pt-10 sm:pt-0">
                            <h3 class="md:mb-9 mb-5  text-3xl md:leading-10 font-galano-grotesque-medium font-normal">VERTRIEB</h3>
                            <nuxt-link @click="showMenu =!showMenu" to="/sales-partner" class="text-lg md:text-xl md:leading-8">Vertriebsparter-Programm</nuxt-link>
                            <nuxt-link @click="showMenu =!showMenu" to="/find-sales-partners" class="text-lg md:text-xl md:leading-8">Vertriebspartner finden</nuxt-link>
                            <nuxt-link @click="showMenu =!showMenu" to="/sales-partner" class="text-lg md:text-xl md:leading-8">Vertriebspartner werden</nuxt-link>
                        </div>
                        <div class="flex flex-col  space-y-5 md:space-y-3 pt-10 md:pt-0">
                            <h3 class="md:mb-9 mb-5 text-3xl md:leading-10 font-galano-grotesque-medium font-normal">UNTERNEHMEN</h3>
                            <nuxt-link to="/business" class="text-lg md:text-xl md:leading-8">Über uns</nuxt-link>
                        </div>
                    </div>
                </div>
            </transition>
            
        </div>
        
        
    </header>
    <ContactForm ref="ContactFormRef" />
</template>
<script setup>
import ContactForm from "@/components/partials/includes/ContactForm.vue"

const showMenu = ref(false)
const ContactFormRef = ref(null)

const openContactForm = () => {
    ContactFormRef.value.openForm();
}


onMounted(() => {
    window.addEventListener('click',(event)=>{
        let isMenu = !!event.target.closest('.menu')
        let isMenuBtn = !!event.target.classList.contains('menu-btn')
        if(!isMenu && !isMenuBtn && showMenu.value){
            showMenu.value = false
        }
    })
})
</script>

<style scoped>
.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}
</style>