<template>
    <section class="w-full overflow-hidden bg-gradient-to-b from-[#F6F6F6] to-white">
        <div class="w-full flex pt-12 container pl-8 gap-x-6 overflow-visible">
            <div class="flex flex-col gap-y-[3.75rem] w-[57%] shrink-0 ">
                <h1 class="text-[150px] leading-[130px] tracking-[3px] font-galano-grotesque-medium">
                    <span class="text-caribbean-green">SCAN TO </span><br>
                    <span class="text-port-gore">ABACUS</span>
                </h1>
                <div class="ml-[7.125rem] flex flex-col gap-y-10">
                    <div class="text-3xl">
                        Lorem ipsum dolor sit amet<br> consectetur. Habitant vitae<br> mauris aliquam sapien habitant<br> vitae. 
                    </div>
                    <button class="w-fit bg-caribbean-green flex justify-center items-center px-6 py-[0.625rem] text-port-gore rounded-full 
                        tracking-[0.32px] uppercase transition-colors duration-300 ease-in-out
                        hover:bg-port-gore hover:text-white">
                        so funktioniert’s
                    </button>
                        
                </div>
                <div class="ml-[7.125rem] relative flex rounded-[3rem] overflow-hidden">
                    <img class="w-full h-full object-cover  " src="/images/home/hero-section-video-img.webp" alt="" srcset="">
                    <div class="video-background z-10 w-full h-full absolute top-0 left-0 flex items-center justify-center">
                        <button >
                            <svg width="107" height="108" viewBox="0 0 107 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="53.3786" cy="53.9653" r="52.3092" stroke="white" stroke-width="2"/>
                                <path d="M71.435 53.9653L44.9953 79.2828L44.9953 28.6478L71.435 53.9653Z" stroke="white" stroke-width="2" stroke-linejoin="round"/>
                            </svg>
                        </button>
                    </div>
                    
                </div>
            </div>
            <div class="h-auto grow">
                <img class="z-0 h-full object-cover object-left-top overflow-visible" src="/images/home/mobile_device.webp" alt="" srcset="">
            </div>
        </div>
    </section>
</template>
<style scoped>
.video-background{
    background: linear-gradient(247deg, #2B2161 0%, #00A39A 50.22%, #00FFB0 100.45%);
    mix-blend-mode: screen; 
}
</style>