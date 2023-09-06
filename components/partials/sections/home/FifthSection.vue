<template>
    <section class="pt-28 pb-24 bg-gradient-to-b  from-white to-[#F6F6F6]">
        <div class="w-full container px-4">
            <SalesForm />
        </div>
        <h1 class="w-full text-center text-port-gore pt-40">Testimonials</h1>
        <Splide class="mt-[4.625rem] relative pb-10 px-10 w-full container mx-auto flex justify-between" :has-track="false" :options="options">
            <LeftArrow class="shrink-0 absolute top-20 left-2"/>
            <div  class="slide-wrapper shrink w-full ">
                <div class="splide__track w-full !px-6 ">
                    <ul class="splide__list shrink">
                        <li class="splide__slide h-auto">
                                <TestimonialCard class="">
                                <template #img>
                                    <img src="/images/testimonial-avatar-1.svg" alt="" srcset="">
                                </template>
                                <template #content>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                </template>
                                <template #name>
                                    Maxine Muster
                                </template>
                                <template #organization>
                                    Musterfirma
                                </template>
                                <template #socialMedia>
                                <a href="#" class="mt-4 w-fit">
                                        <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M32.5001 16.5816C32.5001 25.4656 25.3344 32.6633 16.5001 32.6633C7.66589 32.6633 0.500122 25.4656 0.500122 16.5816C0.500122 7.69766 7.66589 0.5 16.5001 0.5C25.3344 0.5 32.5001 7.69766 32.5001 16.5816Z" stroke="#4F4F4F"/>
                                            <path d="M15.6282 14.8281V21.8434" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12.1377 14.8281V21.8434" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M15.6282 17.8973C15.6282 17.0833 15.9499 16.3027 16.5227 15.7271C17.0954 15.1515 17.8723 14.8281 18.6823 14.8281C19.4923 14.8281 20.2691 15.1515 20.8418 15.7271C21.4146 16.3027 21.7363 17.0833 21.7363 17.8973V21.8434" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12.0586 12.905C12.4926 12.905 12.8432 12.5516 12.8432 12.1172C12.8432 11.6829 12.4926 11.3295 12.0586 11.3295C11.6245 11.3295 11.274 11.6829 11.274 12.1172C11.274 12.5516 11.6245 12.905 12.0586 12.905Z" fill="#4F4F4F" stroke="#4F4F4F" stroke-width="0.3"/>
                                        </svg>
                                    </a>
                                </template>
                            </TestimonialCard>
                        </li>

                        <li class="splide__slide h-auto">
                            <TestimonialCard>
                                <template #img>
                                    <img src="/images/testimonial-avatar-2.svg" alt="" srcset="">
                                </template>
                                <template #content>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                </template>
                                <template #name>
                                    Maxine Muster
                                </template>
                                <template #organization>
                                    Musterfirma
                                </template>
                                <template #socialMedia>
                                <a href="#" class="mt-4 w-fit">
                                        <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M32.5001 16.5816C32.5001 25.4656 25.3344 32.6633 16.5001 32.6633C7.66589 32.6633 0.500122 25.4656 0.500122 16.5816C0.500122 7.69766 7.66589 0.5 16.5001 0.5C25.3344 0.5 32.5001 7.69766 32.5001 16.5816Z" stroke="#4F4F4F"/>
                                            <path d="M15.6282 14.8281V21.8434" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12.1377 14.8281V21.8434" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M15.6282 17.8973C15.6282 17.0833 15.9499 16.3027 16.5227 15.7271C17.0954 15.1515 17.8723 14.8281 18.6823 14.8281C19.4923 14.8281 20.2691 15.1515 20.8418 15.7271C21.4146 16.3027 21.7363 17.0833 21.7363 17.8973V21.8434" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12.0586 12.905C12.4926 12.905 12.8432 12.5516 12.8432 12.1172C12.8432 11.6829 12.4926 11.3295 12.0586 11.3295C11.6245 11.3295 11.274 11.6829 11.274 12.1172C11.274 12.5516 11.6245 12.905 12.0586 12.905Z" fill="#4F4F4F" stroke="#4F4F4F" stroke-width="0.3"/>
                                        </svg>
                                    </a>
                                </template>
                            </TestimonialCard>
                        </li>

                        <li class="splide__slide h-auto">
                                <TestimonialCard>
                                <template #img>
                                    <img src="/images/testimonial-avatar-1.svg" alt="" srcset="">
                                </template>
                                <template #content>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                </template>
                                <template #name>
                                    Maxine Muster
                                </template>
                                <template #organization>
                                    Musterfirma
                                </template>
                                <template #socialMedia>
                                <a href="#" class="mt-4 w-fit">
                                        <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M32.5001 16.5816C32.5001 25.4656 25.3344 32.6633 16.5001 32.6633C7.66589 32.6633 0.500122 25.4656 0.500122 16.5816C0.500122 7.69766 7.66589 0.5 16.5001 0.5C25.3344 0.5 32.5001 7.69766 32.5001 16.5816Z" stroke="#4F4F4F"/>
                                            <path d="M15.6282 14.8281V21.8434" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12.1377 14.8281V21.8434" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M15.6282 17.8973C15.6282 17.0833 15.9499 16.3027 16.5227 15.7271C17.0954 15.1515 17.8723 14.8281 18.6823 14.8281C19.4923 14.8281 20.2691 15.1515 20.8418 15.7271C21.4146 16.3027 21.7363 17.0833 21.7363 17.8973V21.8434" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12.0586 12.905C12.4926 12.905 12.8432 12.5516 12.8432 12.1172C12.8432 11.6829 12.4926 11.3295 12.0586 11.3295C11.6245 11.3295 11.274 11.6829 11.274 12.1172C11.274 12.5516 11.6245 12.905 12.0586 12.905Z" fill="#4F4F4F" stroke="#4F4F4F" stroke-width="0.3"/>
                                        </svg>
                                    </a>
                                </template>
                            </TestimonialCard>
                        </li>

                        <li class="splide__slide h-auto">
                            <TestimonialCard>
                                <template #img>
                                    <img src="/images/testimonial-avatar-2.svg" alt="" srcset="">
                                </template>
                                <template #content>
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                </template>
                                <template #name>
                                    Maxine Muster
                                </template>
                                <template #organization>
                                    Musterfirma
                                </template>
                                <template #socialMedia>
                                <a href="#" class="mt-4 w-fit">
                                        <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M32.5001 16.5816C32.5001 25.4656 25.3344 32.6633 16.5001 32.6633C7.66589 32.6633 0.500122 25.4656 0.500122 16.5816C0.500122 7.69766 7.66589 0.5 16.5001 0.5C25.3344 0.5 32.5001 7.69766 32.5001 16.5816Z" stroke="#4F4F4F"/>
                                            <path d="M15.6282 14.8281V21.8434" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12.1377 14.8281V21.8434" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M15.6282 17.8973C15.6282 17.0833 15.9499 16.3027 16.5227 15.7271C17.0954 15.1515 17.8723 14.8281 18.6823 14.8281C19.4923 14.8281 20.2691 15.1515 20.8418 15.7271C21.4146 16.3027 21.7363 17.0833 21.7363 17.8973V21.8434" stroke="#4F4F4F" stroke-linecap="round" stroke-linejoin="round"/>
                                            <path d="M12.0586 12.905C12.4926 12.905 12.8432 12.5516 12.8432 12.1172C12.8432 11.6829 12.4926 11.3295 12.0586 11.3295C11.6245 11.3295 11.274 11.6829 11.274 12.1172C11.274 12.5516 11.6245 12.905 12.0586 12.905Z" fill="#4F4F4F" stroke="#4F4F4F" stroke-width="0.3"/>
                                        </svg>
                                    </a>
                                </template>
                            </TestimonialCard>
                        </li>
                    </ul>   
                </div>
            </div>
            <RightArrow class="shrink-0 absolute top-20 right-2"/>
            <ul class="splide__pagination"></ul>
            
        </Splide>
        
    </section>
</template>
<script setup>
import SalesForm from "@/components/partials/includes/SalesForm.vue"
import TestimonialCard from "@/components/UI/TestimonialCard.vue";
import { Splide,SplideSlide } from '@splidejs/vue-splide';
import RightArrow from '@/components/UI/RightArrow.vue'
import LeftArrow from '@/components/UI/LeftArrow.vue'

const options = reactive({
    rewind:false,
    perMove: 1,
    arrows:true,
    pagination: true,
    drag:'free',
    perPage: 2,
    gap:'40px',
    trimSpace: false,
    breakpoints: {
		1024: {
			perPage: 1,
		},
    }

})
</script>
<style scoped>
/* .splide__track{
    padding:0 2rem !important;
} */

</style>
<style>
.splide__pagination .splide__pagination__page {
    @apply bg-[#D9D9D9] h-3 w-3;
}
.splide__pagination .splide__pagination__page.is-active {
    @apply bg-port-gore transform-none;
}
</style>