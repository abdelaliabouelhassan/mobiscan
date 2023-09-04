<template>
    <footer class="footer w-full bg-port-gore-dark  pt-10 pb-16 px-14 space-y-20"> 
        <img src="/images/logo/footer_logo.svg" alt="">

        <div class=" w-full flex sm:flex-row flex-col space-y-8  sm:space-y-0 items-start max-w-[746px] mx-auto jus sm:justify-between sm:space-x-4">
            <div class=" max-w-[16.1875rem] w-full">
                <p class=" text-white text-base font-galano-grotesque font-normal">
                    MOBISCAN AG <br>
                    Grüntalstrasse 23 <br>
                    9300 Wittenbach <br> <br>

                    +41 71 444 555 555 <br>
                    hello@mobiscan.ch <br>
                </p>
            </div>

            <div class=" w-full max-w-[10.4375rem] flex flex-col items-start space-y-2 font-galano-grotesque-medium font-normal">
                <nuxt-link to="/" class=" text-white  text-base hover:text-opacity-70 duration-500">Module</nuxt-link>
                <nuxt-link to="/" class=" text-white  text-base hover:text-opacity-70 duration-500">Vertriebspartner</nuxt-link>
                <nuxt-link to="/" class=" text-white  text-base hover:text-opacity-70 duration-500">Unternehmen</nuxt-link>
                <nuxt-link to="/" class=" text-white  text-base hover:text-opacity-70 duration-500">Testimonials</nuxt-link>
                <nuxt-link to="/" class=" text-white  text-base hover:text-opacity-70 duration-500">KONTAKT</nuxt-link>
            </div>

              <div class=" w-full max-w-[7.6375rem] flex flex-col items-start space-y-2 font-galano-grotesque-medium font-normal">
                <nuxt-link to="/" class=" text-white  text-base hover:text-opacity-70 duration-500">Impressum</nuxt-link>
                <nuxt-link to="/" class=" text-white  text-base hover:text-opacity-70 duration-500">datenschutz</nuxt-link>
                <br>
                <span class=" text-white  text-base">Social Media</span>
                <a href="/" target="_blank">
                    <img src="/images/linkedIn.svg" alt="linkedIn">
                </a>
            </div>
        </div>
    </footer>
</template>


<style scoped>
 .footer {
    box-shadow: -4px -4px 4px 0px rgba(0, 0, 0, 0.05);
    border-radius: 2.5rem 2.5rem 0rem 0rem;
 }
</style>