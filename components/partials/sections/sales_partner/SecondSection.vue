<template>
    <div class=" w-full container px-4 md:px-8 flex flex-col items-center space-y-10 pt-20 pb-1">
        <h2 class="text-4xl leading-9 sm:text-4xl sm:leading-9 lg:text-[3.125rem] lg:leading-[3.125rem] text-center text-port-gore">Ihre Vorteile</h2>

        <div class=" w-full grid lg:grid-cols-3 gap-y-8 lg:gap-6 xl:gap-8 justify-items-center">
            <!-- <Card img="/images/sales_partner/innovation.svg" title="Innovation" desciption="Lorem ipsum dolor sit amet consectetur." />
            <Card img="/images/sales_partner/entwicklung.svg" title="Entwicklung" desciption="Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur." />
            <Card img="/images/sales_partner/fortschritt.svg" title="Fortschritt" desciption="Lorem ipsum dolor sit amet consectetur." /> -->

            <AdvantageCard>
                <template #img>
                    <svg width="159" height="160" viewBox="0 0 159 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="79.5" cy="80" r="79.5" fill="#2B2161"/>
                        <path d="M115.024 68.5916H72.288V120.506H115.024V68.5916Z" fill="url(#paint0_linear_53_328)"/>
                        <path d="M90.1465 92.8077H97.4328" stroke="#2B2161" stroke-width="2" stroke-miterlimit="10"/>
                        <path d="M101.576 92.8077H108.862" stroke="#2B2161" stroke-width="2" stroke-miterlimit="10"/>
                        <path d="M78.717 103.059H86.0033" stroke="#2B2161" stroke-width="2" stroke-miterlimit="10"/>
                        <path d="M101.576 103.059H108.862" stroke="#2B2161" stroke-width="2" stroke-miterlimit="10"/>
                        <path d="M78.717 113.291H86.0033" stroke="#2B2161" stroke-width="2" stroke-miterlimit="10"/>
                        <path d="M101.576 113.291H108.862" stroke="#2B2161" stroke-width="2" stroke-miterlimit="10"/>
                        <path d="M107.934 75.3778H79.6636V84.7H107.934V75.3778Z" stroke="#2B2161" stroke-width="1.5" stroke-miterlimit="10"/>
                        <path d="M43 105.487V39.5H91.6646M97.6115 63.8234V45.4469H56.8047L48.9469 53.3047V111.381H67.3055M51.6971 56.93H60.4478V48.1971" stroke="#5345AC" stroke-width="1.5" stroke-miterlimit="10"/>
                        <path d="M78.717 92.8077H86.0033" stroke="#00FFB0" stroke-width="2" stroke-miterlimit="10"/>
                        <path d="M90.1465 103.059H97.4328" stroke="#00FFB0" stroke-width="2" stroke-miterlimit="10"/>
                        <path d="M90.1465 113.291H97.4328" stroke="#00FFB0" stroke-width="2" stroke-miterlimit="10"/>
                        <defs>
                        <linearGradient id="paint0_linear_53_328" x1="93.6557" y1="68.5916" x2="93.6557" y2="120.506" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#00FFB0"/>
                        <stop offset="1" stop-color="#2B2161"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </template>
                <template #title>
                    Innovation
                </template>
                <template #description>
                    Lorem ipsum dolor sit amet consectetur.
                </template>
            </AdvantageCard>

            <AdvantageCard>
                <template #img>
                    <svg width="159" height="160" viewBox="0 0 159 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="79.5" cy="80" r="79.5" fill="#2B2161"/>
                        <path d="M59.0394 120.5C63.1919 120.492 67.249 119.253 70.6976 116.94C74.1463 114.627 76.8318 111.343 78.4146 107.504C79.9974 103.665 80.4065 99.4432 79.5902 95.3717C78.7739 91.3002 76.7688 87.5621 73.8284 84.6299C70.888 81.6977 67.1442 79.7031 63.0704 78.8983C58.9966 78.0934 54.7756 78.5143 50.941 80.1079C47.1064 81.7015 43.8303 84.3962 41.5269 87.8513C39.2235 91.3065 37.9962 95.3669 38.0001 99.5195C37.9923 102.282 38.5315 105.018 39.5868 107.571C40.6421 110.124 42.1925 112.443 44.1485 114.393C46.1045 116.344 48.4274 117.887 50.9832 118.936C53.539 119.984 56.2771 120.515 59.0394 120.5Z" fill="url(#paint0_linear_53_329)"/>
                        <path d="M78 91.4201H40M78 107.56H40M59 78.5V120.48M58.9615 78.5196C52.8399 78.5196 47.8541 87.9053 47.8541 99.5098C47.8541 111.114 52.8399 120.5 58.9615 120.5C65.0831 120.5 70.0881 111.095 70.0881 99.5098C70.0881 87.925 65.1023 78.5196 58.9807 78.5196H58.9615Z" stroke="#2B2161" stroke-width="1.5" stroke-linejoin="round"/>
                        <path d="M81.9858 98.0223H119.989V51.4829H45.8579V77.985" stroke="#5345AC" stroke-width="1.5"/>
                        <path d="M91.9865 48.4826V42.5H73.8601V48.4826" stroke="#5345AC" stroke-width="1.5"/>
                        <path d="M120.007 51.465H45.8579V70.5736H120.007V51.465Z" stroke="#5345AC" stroke-width="1.5" stroke-linejoin="round"/>
                        <path d="M64.3412 65.9482V74.5382" stroke="#5345AC" stroke-width="1.5" stroke-linejoin="round"/>
                        <path d="M101.505 65.9482V74.5382" stroke="#5345AC" stroke-width="1.5" stroke-linejoin="round"/>
                        <defs>
                        <linearGradient id="paint0_linear_53_329" x1="46.8083" y1="83.5498" x2="79.8391" y2="120.985" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#00FFB0"/>
                        <stop offset="1" stop-color="#2B2161"/>
                        </linearGradient>
                        </defs>
                    </svg>
                </template>
                <template #title>
                    Entwicklung
                </template>
                <template #description>
                    Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
                </template>
            </AdvantageCard>

            <AdvantageCard>
                <template #img>
                    <svg width="159" height="159" viewBox="0 0 159 159" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="79.5" cy="79.5" r="79.5" fill="#2B2161"/>
                      <path d="M101 86.0032L82.2204 68L77.6293 72.3651C75.9931 73.9224 76.2129 74.4415 77.1165 75.2909C78.02 76.1404 80.8773 75.928 81.6832 78.5235C81.7795 79.4087 81.647 80.3033 81.2975 81.1269C80.948 81.9505 80.3925 82.6774 79.6807 83.2425C79.092 83.9234 78.3376 84.4523 77.4851 84.7817C76.6326 85.1112 75.7087 85.2309 74.7965 85.1301C72.1102 84.3751 72.3544 81.7088 71.4264 80.765C70.4984 79.8212 70.01 79.7032 68.3738 81.2605L62 87.3717L68.0564 93.1761C69.6925 94.7334 69.4483 95.2525 68.5692 96.1019C67.69 96.9514 64.784 96.739 64.0025 99.3345C63.8948 100.221 64.0221 101.119 64.3724 101.944C64.7227 102.77 65.2845 103.496 66.005 104.054C66.5882 104.742 67.3411 105.278 68.1945 105.612C69.0479 105.946 69.9745 106.067 70.8892 105.965C73.5755 105.21 73.3312 102.52 74.2592 101.6C75.1872 100.679 75.6756 100.538 77.3118 102.095L79.7539 104.455" fill="url(#paint0_linear_53_2165)"/>
                      <path d="M64.0551 101.683H45.3036V46H96.1826V72.52M45 53.9828H96.5041M49.0539 50.0182H51.7684M54.4829 50.0182H57.1974M73.4666 60.6619H91.0751M73.4666 67.3053H91.0751M50.4111 80.5742H62.6085M50.4111 87.2176H57.1974M67.734 72.2164H52.072V60.7333H67.734V72.1628V72.2164Z" stroke="#5345AC" stroke-width="1.5" stroke-miterlimit="10"/>
                      <path d="M101.468 122.506L117.452 106.648L113.88 103.076C112.594 101.808 112.184 101.986 111.487 102.683C110.791 103.379 110.951 105.63 108.826 106.255C108.096 106.345 107.355 106.25 106.672 105.979C105.988 105.707 105.384 105.268 104.915 104.701C104.343 104.244 103.898 103.648 103.622 102.969C103.347 102.29 103.251 101.552 103.344 100.826C103.969 98.7005 106.165 98.9327 106.915 98.1826C107.665 97.4325 107.808 97.0754 106.522 95.7896L101.54 90.8606L96.7181 95.5574C95.4323 96.8432 95.0215 96.6468 94.3251 95.9681C93.6286 95.2895 93.7893 93.0036 91.6641 92.3964C90.9342 92.3058 90.1932 92.4006 89.5096 92.6722C88.826 92.9438 88.2219 93.3833 87.7531 93.9501C87.1833 94.4092 86.74 95.006 86.465 95.6841C86.19 96.3622 86.0925 97.0992 86.1816 97.8254C86.8066 99.9506 89.0032 99.7184 89.7533 100.469C90.5033 101.219 90.6462 101.576 89.3604 102.844L85.5029 106.683L101.451 122.506H101.468Z" fill="#2B2161" stroke="#5345AC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M115.095 64.3049L99.1113 80.1633L102.683 83.735C103.969 85.003 104.469 84.8244 105.094 84.1279C105.719 83.4315 105.63 81.1813 107.755 80.5562C108.486 80.4693 109.228 80.5677 109.911 80.8423C110.595 81.117 111.198 81.559 111.666 82.1278C112.236 82.5869 112.679 83.1836 112.954 83.8617C113.229 84.5398 113.327 85.2768 113.237 86.0031C112.612 88.1104 110.398 87.8782 109.666 88.6462C108.934 89.4141 108.791 89.7534 110.076 91.0213L115.059 95.9682L119.827 91.2178C121.113 89.9498 121.524 90.1284 122.238 90.8249C122.953 91.5214 122.756 93.7716 124.899 94.3966C125.629 94.4913 126.37 94.402 127.056 94.1368C127.743 93.8717 128.352 93.4392 128.828 92.8786C129.398 92.4157 129.841 91.8156 130.116 91.1347C130.391 90.4539 130.488 89.7144 130.4 88.9855C129.774 86.8782 127.56 87.1103 126.828 86.3603C126.096 85.6102 125.953 85.2352 127.239 83.9672L131.078 80.1455L115.095 64.3049Z" stroke="#5345AC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                      <defs>
                      <linearGradient id="paint0_linear_53_2165" x1="69.3125" y1="76.5806" x2="95.0313" y2="98.4984" gradientUnits="userSpaceOnUse">
                      <stop stop-color="#00FFB0"/>
                      <stop offset="1" stop-color="#2B2161"/>
                      </linearGradient>
                      </defs>
                    </svg>
                </template>
                <template #title>
                    Fortschritt
                </template>
                <template #description>
                    Lorem ipsum dolor sit amet consectetur.
                </template>
            </AdvantageCard>
        </div>

        <div class=" w-full pt-24 container">
            <div class="w-full bg-port-gore rounded-[3.125rem] px-4 sm:px-8  md:px-12 lg:px-4 py-20">
              <div class="w-full flex lg:flex-row flex-col items-center space-y-10 md:space-y-12 lg:space-y-0 lg:space-x-4  justify-between ">
                <div class="w-full bg-port-gore rounded-full   flex justify-center">
                  <img
                    src="/images/sales_partner/testimonial.png"
                    class=" h-[14rem] w-[14rem] md:w-[24.1875rem] md:h-[24.1875rem]"
                    alt=""
                  />
                </div>

                <div class="flex flex-col items-center lg:items-start  space-y-8 w-full ">
                  <h2 class="text-white text-center lg:text-start" >
                  Lorem ipsum dolor est figum
                  </h2>
                  <p class="text-white text-center lg:text-start text-lg md:text-xl lg:max-w-[32.5625rem] ">
                  Lorem ipsum dolor sit amet consectetur. Suspendisse risus erat id nullam velit in. Tristique pretium viverra cursus felis eu elit bibendum quam. Amet pellentesque diam quam pretium est praesent mi. Adipiscing tellus laoreet velit senectus non. Pretium duis magna tempor cursus at metus nulla.
                  </p>
                  <p class=" text-white text-lg md:text-xl text-center lg:text-start">
                  <span class=" font-bold"> Zino Meuli</span>
                  <br>
                    MOBISCAN AG
                  </p>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>


<script setup>
 import Card from "@/components/UI/Card.vue"
 import AdvantageCard from "@/components/UI/AdvantageCard.vue"
</script>