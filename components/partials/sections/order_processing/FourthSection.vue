<template>
    <section class="pt-20 sm:pt-24 lg:pt-32">
        <!-- buttons -->
        <Splide class="pt-[4.75rem] w-full container flex justify-center items-center" :options="options">
                
            <SplideSlide class="py-1 px-3 w-fit">
                <button @click="activeCard='Stammdaten'" class="text-sm md:text-base flex font-galano-grotesque-medium font-normal justify-center items-center px-6 py-[0.625rem]  outline  outline-dark-grey rounded-full 
                    tracking-[0.32px] uppercase transition-colors duration-200 ease-in-out hover:text-port-gore hover:outline-port-gore hover:outline-2"
                    :class="{'text-port-gore outline-port-gore outline-2 font-medium':activeCard==='Stammdaten' , 'outline-1':activeCard!=='Stammdaten'}">
                    Stammdaten
                </button>
            </SplideSlide>

            <SplideSlide class="py-1 px-3 w-fit">
                <button @click="activeCard='Verkauf / Auftragswesen'" class="text-sm md:text-base flex font-galano-grotesque-medium font-normal justify-center items-center px-6 py-[0.625rem]  outline outline-dark-grey rounded-full 
                    tracking-[0.32px] uppercase transition-colors duration-200 ease-in-out hover:text-port-gore hover:outline-port-gore hover:outline-2"
                    :class="{'text-port-gore outline-port-gore outline-2 font-medium':activeCard==='Verkauf / Auftragswesen', 'outline-1':activeCard!=='Verkauf / Auftragswesen'}">
                    Verkauf / Auftragswesen
                </button>
            </SplideSlide>

            <SplideSlide class="py-1 px-3 w-fit">
                <button @click="activeCard='Einkauf / Bestellwesen'" class="text-sm md:text-base flex font-galano-grotesque-medium font-normal justify-center items-center px-6 py-[0.625rem]  outline outline-dark-grey rounded-full 
                    tracking-[0.32px] uppercase transition-colors duration-200 ease-in-out hover:text-port-gore hover:outline-port-gore hover:outline-2"
                    :class="{'text-port-gore outline-port-gore outline-2 font-medium':activeCard==='Einkauf / Bestellwesen', 'outline-1':activeCard!=='Einkauf / Bestellwesen'}">
                    Einkauf / Bestellwesen
                </button>
            </SplideSlide>

            <SplideSlide class="py-1 px-3 w-fit">
                <button @click="activeCard='Lagerverwaltung'" class="text-sm md:text-base flex font-galano-grotesque-medium font-normal justify-center items-center px-6 py-[0.625rem]  outline outline-dark-grey rounded-full 
                    tracking-[0.32px] uppercase transition-colors duration-200 ease-in-out hover:text-port-gore hover:outline-port-gore hover:outline-2"
                    :class="{'text-port-gore outline-port-gore outline-2 font-medium':activeCard==='Lagerverwaltung', 'outline-1':activeCard!=='Lagerverwaltung'}">
                    Lagerverwaltung
                </button>
            </SplideSlide>
            <SplideSlide class="py-1 px-3 w-fit">
                <button @click="activeCard='Controlling'" class="text-sm md:text-base flex font-galano-grotesque-medium font-normal justify-center items-center px-6 py-[0.625rem]  outline outline-dark-grey rounded-full 
                    tracking-[0.32px] uppercase transition-colors duration-200 ease-in-out hover:text-port-gore hover:outline-port-gore hover:outline-2"
                    :class="{'text-port-gore outline-port-gore outline-2 font-medium':activeCard==='Controlling', 'outline-1':activeCard!=='Controlling'}">
                    Controlling
                </button>
            </SplideSlide>
            <SplideSlide class="py-1 px-3 w-fit">
                <button @click="activeCard='DeepSign'" class="text-sm md:text-base flex font-galano-grotesque-medium font-normal justify-center items-center px-6 py-[0.625rem]  outline outline-dark-grey rounded-full 
                    tracking-[0.32px] uppercase transition-colors duration-200 ease-in-out hover:text-port-gore hover:outline-port-gore hover:outline-2"
                    :class="{'text-port-gore outline-port-gore outline-2 font-medium':activeCard==='DeepSign', 'outline-1':activeCard!=='DeepSign'}">
                    DeepSign
                </button>
            </SplideSlide>

                           
        </Splide>
        <!-- cards -->
        <div class="pt-12 container px-4 md:px-8">
            <transition name="card">
                <div v-if="activeCard === 'Stammdaten'" class="w-full">
                    <div class="flex flex-col gap-y-10 lg:gap-x-5 lg:flex-row lg:items-center lg:justify-between">
                        <div class="w-full max-w-[36.5rem] flex justify-center self-center lg:self-start">
                            <img class="card-img w-full transition-all duration-1000 ease" src="/images/order_processing/laptop-1.webp">
                        </div>
                        <div class="w-full flex flex-col lg:items-center">
                            <div>
                                <h2 class="text-port-gore">Stammdaten</h2>
                                <ul class="list-disc list-outside ml-8 mt-8 leading-8 md:text-xl lg:max-w-[30.75rem]">
                                    <li class=""> Artikel-­ und Leistungsstammdaten</li>
                                    <li> Artikelvarianten, Produkte­-Sets und Stücklisten</li>
                                    <li> Zubehör-­, Ersatz­- und Auswahlprodukte</li>
                                    <li> Flexibles Preis­ und Rabattsystem inkl. Preiskalkulation</li>
                                    <li> Verwaltung von Chargen­-/Seriennummern</li>
                                    <li> Benutzermasken inkl. Lese­-/Schreibberech­tigung</li>
                                    <li> Debitoren­-, Kreditoren-­, Konten­- und Kosten­stellenstammdaten</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else-if="activeCard === 'Verkauf / Auftragswesen'" class="w-full">
                    <div class="flex flex-col gap-y-10 lg:gap-x-5 lg:flex-row lg:items-center lg:justify-between">
                        <div class="w-full max-w-[36.5rem] flex justify-center self-center lg:self-start">
                            <img class="card-img w-full transition-all duration-1000 ease" src="/images/order_processing/laptop-2.webp">
                        </div>
                        <div class="w-full flex flex-col lg:items-center">
                            <div>
                                <h2 class="text-port-gore">Verkauf / Auftragswesen</h2>
                                <ul class="list-disc list-outside ml-8 mt-8 leading-8 md:text-xl lg:max-w-[30.75rem]">
                                    <li>Aufträge, Offerten, Projektaufträge inkl. Sammelverarbeitung</li>
                                    <li>Kasse</li>
                                    <li>Sammelrechnungen</li>
                                    <li>Abonnements­verwaltung</li>
                                    <li>Rahmenaufträge</li>
                                    <li>Auftragsdisposition</li>
                                    <li>Provisionierung</li>
                                    <li>Rechnungs­- und Dokumentenaustausch inkl. EDI</li>
                                    <li>Anbindung E­-Business AbaShop, AbaNet und PepperShop</li>
                                    <li>Mobile Auftrags-­/Offerterfassung</li>
                                    <li class="text-persian-green">QR-Rechnung</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else-if="activeCard === 'Einkauf / Bestellwesen'" class="w-full">
                    <div class="flex flex-col gap-y-10 lg:gap-x-5 lg:flex-row lg:items-center lg:justify-between">
                        <div class="w-full max-w-[36.5rem] flex justify-center self-center lg:self-start">
                            <img class="card-img w-full transition-all duration-1000 ease" src="/images/order_processing/laptop-2.webp">
                        </div>
                        <div class="w-full flex flex-col lg:items-center">
                            <div>
                                <h2 class="text-port-gore">Einkauf / Bestellwesen</h2>
                                <ul class="list-disc list-outside ml-8 mt-8 leading-8 md:text-xl lg:max-w-[30.75rem]">
                                    <li > Artikel-­ und Leistungsstammdaten</li>
                                    <li> Artikelvarianten, Produkte­-Sets und Stücklisten</li>
                                    <li> Zubehör-­, Ersatz­- und Auswahlprodukte</li>
                                    <li> Flexibles Preis­ und Rabattsystem inkl. Preiskalkulation</li>
                                    <li> Verwaltung von Chargen­-/Seriennummern</li>
                                    <li> Benutzermasken inkl. Lese­-/Schreibberech­tigung</li>
                                    <li> Debitoren­-, Kreditoren-­, Konten­- und Kosten­stellenstammdaten</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else-if="activeCard === 'Lagerverwaltung'" class="w-full">
                    <div class="flex flex-col gap-y-10 lg:gap-x-5 lg:flex-row lg:items-center lg:justify-between">
                        <div class="w-full max-w-[36.5rem] flex justify-center self-center lg:self-start">
                            <img class="card-img w-full transition-all duration-1000 ease" src="/images/order_processing/laptop-2.webp">
                        </div>
                        <div class="w-full flex flex-col lg:items-center">
                            <div>
                                <h2 class="text-port-gore">Lagerverwaltung</h2>
                                <ul class="list-disc list-outside ml-8 mt-8 leading-8 md:text-xl lg:max-w-[30.75rem]">
                                    <li > Artikel-­ und Leistungsstammdaten</li>
                                    <li> Artikelvarianten, Produkte­-Sets und Stücklisten</li>
                                    <li> Zubehör-­, Ersatz­- und Auswahlprodukte</li>
                                    <li> Flexibles Preis­ und Rabattsystem inkl. Preiskalkulation</li>
                                    <li> Verwaltung von Chargen­-/Seriennummern</li>
                                    <li> Benutzermasken inkl. Lese­-/Schreibberech­tigung</li>
                                    <li> Debitoren­-, Kreditoren-­, Konten­- und Kosten­stellenstammdaten</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else-if="activeCard === 'Controlling'" class="w-full">
                    <div class="flex flex-col gap-y-10 lg:gap-x-5 lg:flex-row lg:items-center lg:justify-between">
                        <div class="w-full max-w-[36.5rem] flex justify-center self-center lg:self-start">
                            <img class="card-img w-full transition-all duration-1000 ease" src="/images/order_processing/laptop-2.webp">
                        </div>
                        <div class="w-full flex flex-col lg:items-center">
                            <div>
                                <h2 class="text-port-gore">Controlling</h2>
                                <ul class="list-disc list-outside ml-8 mt-8 leading-8 md:text-xl lg:max-w-[30.75rem]">
                                    <li > Artikel-­ und Leistungsstammdaten</li>
                                    <li> Artikelvarianten, Produkte­-Sets und Stücklisten</li>
                                    <li> Zubehör-­, Ersatz­- und Auswahlprodukte</li>
                                    <li> Flexibles Preis­ und Rabattsystem inkl. Preiskalkulation</li>
                                    <li> Verwaltung von Chargen­-/Seriennummern</li>
                                    <li> Benutzermasken inkl. Lese­-/Schreibberech­tigung</li>
                                    <li> Debitoren­-, Kreditoren-­, Konten­- und Kosten­stellenstammdaten</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-else-if="activeCard === 'DeepSign'" class="w-full">
                    <div class="flex flex-col gap-y-10 lg:gap-x-5 lg:flex-row lg:items-center lg:justify-between">
                        <div class="w-full max-w-[36.5rem] flex justify-center self-center lg:self-start">
                            <img class="card-img w-full transition-all duration-1000 ease" src="/images/order_processing/laptop-2.webp">
                        </div>
                        <div class="w-full flex flex-col lg:items-center">
                            <div>
                                <h2 class="text-port-gore">DeepSign</h2>
                                <ul class="list-disc list-outside ml-8 mt-8 leading-8 md:text-xl lg:max-w-[30.75rem]">
                                    <li > Artikel-­ und Leistungsstammdaten</li>
                                    <li> Artikelvarianten, Produkte­-Sets und Stücklisten</li>
                                    <li> Zubehör-­, Ersatz­- und Auswahlprodukte</li>
                                    <li> Flexibles Preis­ und Rabattsystem inkl. Preiskalkulation</li>
                                    <li> Verwaltung von Chargen­-/Seriennummern</li>
                                    <li> Benutzermasken inkl. Lese­-/Schreibberech­tigung</li>
                                    <li> Debitoren­-, Kreditoren-­, Konten­- und Kosten­stellenstammdaten</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </transition>
        </div>

    </section>
</template>

<script setup>
import { Splide,SplideSlide } from '@splidejs/vue-splide';

const activeCard = ref('Stammdaten')
const options = reactive({
    rewind:false,
    arrows:false,
    pagination: false,
    drag:true,
    perMove:1,
    autoWidth:true,
    
})
</script>

<style scoped>
.card-enter-active{
  transition: opacity 1s ease 0.5s;
}
.card-leave-active {
  transition: opacity 0.5s ease 0s;
}

.card-enter-from,
.card-leave-to {
  opacity: 1;
}

.card-enter-active .card-img{
  transition: all 1s ease 0.5s;

}
.card-leave-active .card-img
{
  transition: all 0.5s ease 0s;
}

.card-enter-from .card-img,
.card-leave-to .card-img
{
   transform: rotateY(90deg);
}





</style>