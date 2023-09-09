<template>
    <section class="container w-full pt-32 pb-28 px-4 md:px-8">
        <!-- <div class="w-full grid grid-cols-1 xs:grid-cols-2 lg:flex items-center justify-center gap-6">
        </div> -->
        <!-- buttons -->
        <Splide  class="w-full flex justify-center items-center" :options="options">
                
            <!-- <li class="splide__slide px-3 w-fit"> -->
            <SplideSlide class="py-1 px-3 w-fit">
                <button @click="activeCard='Auftragsbearbeitung'" class="text-sm md:text-base flex font-galano-grotesque-medium font-normal justify-center items-center px-6 py-[0.625rem]  outline  outline-dark-grey rounded-full 
                    tracking-[0.32px] uppercase transition-colors duration-200 ease-in-out hover:text-black hover:outline-black hover:outline-2"
                    :class="{'text-black outline-black outline-2 font-medium':activeCard==='Auftragsbearbeitung' , 'outline-1':activeCard!=='Auftragsbearbeitung'}">
                    Auftragsbearbeitung
                </button>
            </SplideSlide>

            <SplideSlide class="py-1 px-3 w-fit">
                <button @click="activeCard='LAGER'" class="text-sm md:text-base flex font-galano-grotesque-medium font-normal justify-center items-center px-6 py-[0.625rem]  outline outline-dark-grey rounded-full 
                    tracking-[0.32px] uppercase transition-colors duration-200 ease-in-out hover:text-black hover:outline-black hover:outline-2"
                    :class="{'text-black outline-black outline-2 font-medium':activeCard==='LAGER', 'outline-1':activeCard!=='LAGER'}">
                    LAGER
                </button>
            </SplideSlide>
            <SplideSlide class="py-1 px-3 w-fit">
                <button @click="activeCard='SERVICEMANAGEMENT'" class="text-sm md:text-base flex font-galano-grotesque-medium font-normal justify-center items-center px-6 py-[0.625rem]  outline outline-dark-grey rounded-full 
                    tracking-[0.32px] uppercase transition-colors duration-200 ease-in-out hover:text-black hover:outline-black hover:outline-2"
                    :class="{'text-black outline-black outline-2 font-medium':activeCard==='SERVICEMANAGEMENT', 'outline-1':activeCard!=='SERVICEMANAGEMENT'}">
                    SERVICEMANAGEMENT
                </button>
            </SplideSlide>
            <SplideSlide class="py-1 px-3 w-fit">
                <button @click="activeCard='PRODUKTIONSPLANUNG'" class="text-sm md:text-base flex font-galano-grotesque-medium font-normal justify-center items-center px-6 py-[0.625rem]  outline outline-dark-grey rounded-full 
                    tracking-[0.32px] uppercase transition-colors duration-200 ease-in-out hover:text-black hover:outline-black hover:outline-2" 
                    :class="{'text-black outline-black outline-2 font-medium':activeCard==='PRODUKTIONSPLANUNG', 'outline-1':activeCard!=='PRODUKTIONSPLANUNG'}">
                    PRODUKTIONSPLANUNG
                </button>
            </SplideSlide>

                           
        </Splide>
        <!-- cards -->
        <div ref="cardsContainer" class="w-full relative pt-[6.25rem] overflow-hidden box-content">
            <!--Auftragsbearbeitung card-->
            <div class="w-full absolute transition-all duration-300 ease-in-out overflow-hidden" 
                :class="{'top-[6.25rem]':activeCard==='Auftragsbearbeitung',
                        'px-4 lg:px-[3.25rem] top-[5rem]':activeCard==='LAGER',
                        'px-8 lg:px-[5.32rem] top-[3.75rem]':activeCard==='SERVICEMANAGEMENT',
                        'px-12 lg:px-[7.375rem] top-[2.5rem]':activeCard==='PRODUKTIONSPLANUNG',
                        'h-[10rem]':activeCard!=='Auftragsbearbeitung'}">

                <div ref="auftragsbearbeitung_content" class="transition-colors duration-300 ease-in-out w-full flex flex-col items-center text-white gap-16 py-10 px-8  rounded-[3.125rem] 
                            xs:px-10 xs:py-14 md:px-[4.625rem]  lg:flex-row lg:justify-between"
                    :class="{'bg-port-gore':activeCard==='Auftragsbearbeitung',
                        'bg-[#3A3267]':activeCard==='LAGER',
                        'bg-[#4E467B]':activeCard==='SERVICEMANAGEMENT',
                        'bg-[#5F5692] ':activeCard==='PRODUKTIONSPLANUNG',}">
                    <div class="max-w-[28.75rem] lg:order-2">
                        <img class="card-img" src="/images/img_1.webp">
                    </div>
                    <div class="w-full lg:order-1 flex flex-col">
                        <div class="text-lg leading-[18px] md:text-2xl font-semibold lg:leading-[50px] pb-2">Auftragsbearbeitung</div>
                        <h2 class="lg:max-w-[22.5rem]">Lorem ipsum dolor est figum exalibur</h2>
                        <p class="md:text-xl mt-8 lg:max-w-[30.75rem]">
                            Lorem ipsum dolor sit amet consectetur. Habitant vitae mauris aliquam sapien habitant vitae. Egestas dignissim ipsum morbi arcu turpis congue ullamcorper in. 
                        </p>
                        <button class="w-fit self-center sm:self-start mt-16 bg-caribbean-green flex font-galano-grotesque-medium font-normal text-port-gore justify-center items-center px-6 py-[0.625rem] rounded-full 
                            tracking-[0.32px] uppercase transition-colors duration-300 ease-in-out hover:bg-white">
                            so funktioniert’s
                        </button>
                    </div>

                </div>
            </div>
            <!--LAGER card-->
            <div class="w-full absolute transition-all duration-300 ease-in-out overflow-hidden" 
                :class="{'top-full':activeCard==='Auftragsbearbeitung',
                        'top-[6.25rem]':activeCard==='LAGER',
                        'px-4 lg:px-[3.25rem] top-[5rem]':activeCard==='SERVICEMANAGEMENT',
                        'px-8 lg:px-[5.32rem] top-[3.75rem]':activeCard==='PRODUKTIONSPLANUNG',
                        'h-[10rem]':activeCard!=='LAGER'}">

                <div ref="lager_content" class="transition-colors duration-300 ease-in-out w-full flex flex-col items-center text-white gap-16 py-10 px-8  rounded-[3.125rem] 
                            xs:px-10 xs:py-14 md:px-[4.625rem]  lg:flex-row lg:justify-between"
                    :class="{'bg-port-gore':activeCard==='Auftragsbearbeitung'||activeCard==='LAGER',
                        'bg-[#3A3267]':activeCard==='SERVICEMANAGEMENT',
                        'bg-[#4E467B]':activeCard==='PRODUKTIONSPLANUNG',}">
                    <div class="max-w-[28.75rem] lg:order-2">
                        <img class="card-img" src="/images/img_1.webp">
                    </div>
                    <div class="w-full lg:order-1 flex flex-col">
                        <div class="text-lg leading-[18px] md:text-2xl font-semibold lg:leading-[50px] pb-2">LAGER</div>
                        <h2 class="lg:max-w-[22.5rem]">Lorem ipsum dolor est figum exalibur</h2>
                        <p class="md:text-xl mt-8 lg:max-w-[30.75rem]">
                            Lorem ipsum dolor sit amet consectetur. Habitant vitae mauris aliquam sapien habitant vitae. Egestas dignissim ipsum morbi arcu turpis congue ullamcorper in. 
                        </p>
                        <button class="w-fit self-center sm:self-start mt-16 bg-caribbean-green flex font-galano-grotesque-medium font-normal text-port-gore justify-center items-center px-6 py-[0.625rem]  rounded-full 
                            tracking-[0.32px] uppercase transition-colors duration-300 ease-in-out hover:bg-white">
                            so funktioniert’s
                        </button>
                    </div>

                </div>
            </div>
            <!--SERVICEMANAGEMENT card-->
            <div class="w-full absolute transition-all duration-300 ease-in-out overflow-hidden" 
                :class="{'top-full':activeCard==='Auftragsbearbeitung'||activeCard==='LAGER',
                        'top-[6.25rem]':activeCard==='SERVICEMANAGEMENT',
                        'px-4 lg:px-[3.25rem] top-[5rem]':activeCard==='PRODUKTIONSPLANUNG',
                        'h-[10rem]':activeCard!=='SERVICEMANAGEMENT'}">

                <div ref="servicemanagement_content" class="transition-colors duration-300 ease-in-out w-full flex flex-col items-center text-white gap-16 py-10 px-8  rounded-[3.125rem] 
                            xs:px-10 xs:py-14 md:px-[4.625rem]  lg:flex-row lg:justify-between"
                    :class="{'bg-port-gore':activeCard==='Auftragsbearbeitung'||activeCard==='LAGER'||activeCard==='SERVICEMANAGEMENT',
                        'bg-[#3A3267]':activeCard==='PRODUKTIONSPLANUNG',}">
                    <div class="max-w-[28.75rem] lg:order-2">
                        <img class="card-img"  src="/images/img_1.webp">
                    </div>
                    <div class="w-full lg:order-1 flex flex-col">
                        <div class="text-lg leading-[18px] md:text-2xl font-semibold lg:leading-[50px] pb-2">SERVICEMANAGEMENT</div>
                        <h2 class="lg:max-w-[22.5rem]">Lorem ipsum dolor est figum exalibur</h2>
                        <p class="md:text-xl mt-8 lg:max-w-[30.75rem]">
                            Lorem ipsum dolor sit amet consectetur. Habitant vitae mauris aliquam sapien habitant vitae. Egestas dignissim ipsum morbi arcu turpis congue ullamcorper in. 
                        </p>
                        <button class="w-fit self-center sm:self-start mt-16 bg-caribbean-green flex font-galano-grotesque-medium font-normal text-port-gore justify-center items-center px-6 py-[0.625rem]  rounded-full 
                            tracking-[0.32px] uppercase transition-colors duration-300 ease-in-out hover:bg-white">
                            so funktioniert’s
                        </button>
                    </div>

                </div>
            </div>
            <!--PRODUKTIONSPLANUNG card-->
            <div class="w-full absolute transition-all duration-300 ease-in-out overflow-hidden" 
                :class="{'top-full':activeCard!=='PRODUKTIONSPLANUNG',
                        'top-[6.25rem]':activeCard==='PRODUKTIONSPLANUNG'}">

                <div ref="produktionsplanung_content" class="bg-port-gore w-full flex flex-col items-center text-white gap-16 py-10 px-8  rounded-[3.125rem] 
                            xs:px-10 xs:py-14 md:px-[4.625rem]  lg:flex-row lg:justify-between">
                    <div class="max-w-[28.75rem] lg:order-2">
                        <img class="card-img" src="/images/img_1.webp">
                    </div>
                    <div class="w-full lg:order-1 flex flex-col">
                        <div class="text-lg leading-[18px] md:text-2xl font-semibold lg:leading-[50px] pb-2">PRODUKTIONSPLANUNG</div>
                        <h2 class="lg:max-w-[22.5rem]">Lorem ipsum dolor est figum exalibur</h2>
                        <p class="md:text-xl mt-8 lg:max-w-[30.75rem]">
                            Lorem ipsum dolor sit amet consectetur. Habitant vitae mauris aliquam sapien habitant vitae. Egestas dignissim ipsum morbi arcu turpis congue ullamcorper in. 
                        </p>
                        <button class="w-fit self-center sm:self-start mt-16 bg-caribbean-green flex font-galano-grotesque-medium font-normal text-port-gore justify-center items-center px-6 py-[0.625rem]  rounded-full 
                            tracking-[0.32px] uppercase transition-colors duration-300 ease-in-out hover:bg-white">
                            so funktioniert’s
                        </button>
                    </div>

                </div>
            </div>


        </div>
        
    </section>
</template>
<script setup>
import { Splide,SplideSlide } from '@splidejs/vue-splide';
const options = reactive({
    rewind:false,
    arrows:false,
    pagination: false,
    drag:false,
    perMove:1,
    autoWidth:true,
    breakpoints:{
        1024:{
            drag:true,
        }
    }
   

})
const activeCard = ref('Auftragsbearbeitung')

const cardsContainer = ref(null)
const auftragsbearbeitung_content = ref(null)
const lager_content = ref(null)
const servicemanagement_content = ref(null)
const produktionsplanung_content = ref(null)

function setHeight(){
    let heights = []
    heights.push(auftragsbearbeitung_content.value.scrollHeight) 
    heights.push(lager_content.value.scrollHeight) 
    heights.push(servicemanagement_content.value.scrollHeight) 
    heights.push(produktionsplanung_content.value.scrollHeight) 
    let MaxHeight = Math.max(...heights)
    cardsContainer.value.style.height = `${MaxHeight}px`
}

function checkImgs() {
    return new Promise(resolve =>{
        let imgs = [...document.querySelectorAll('.card-img')]
        let count = 0
        let loaded = true
        imgs.forEach(img => {
            if(!img.complete){
                loaded = false;
            }
        });
        if(loaded){
            resolve()
        }
        else{
            imgs.forEach(img => {
                img.onload = ()=> {
                    count++  
                    if(count === 4){
                        resolve()
                    }
                }
               
            });
        }
        
        
            
    })
}
onMounted(async() => {
    setHeight()
    window.addEventListener('resize',setHeight)
    await checkImgs()
    setHeight()
})
onUnmounted(() => {
    window.removeEventListener('resize',setHeight)
})
</script>