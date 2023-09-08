<template>
    <div v-if="open" class=" w-full fixed h-full space-y-4 flex flex-col justify-between items-center bg-port-gore z-50 top-0 left-0 py-4  px-4 lg:px-8">
        <div class=" w-full flex items-center justify-between">
             <img src="/images/logo/footer_logo.svg" alt="">
             <button @click="closeForm" class=" text-center flex w-12 h-12 bg-caribbean-green rounded-full hover:bg-opacity-70 duration-200">
                <svg class=" m-auto" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M13 13L1 0.999999" stroke="#2B2161" stroke-width="1.5"/>
                    <path d="M1 13L13 0.999999" stroke="#2B2161" stroke-width="1.5"/>
                </svg>
             </button>
        </div>
        <form action="/" method="POST" class=" w-full max-w-[63.25rem] space-y-8 overflow-y-auto py-4 md:py-0">
            <h2 class=" text-white ">Wir freuen uns auf Ihre Anfrage!</h2>
            <div class=" w-full flex md:flex-row flex-col space-y-8 md:space-y-0 items-start md:space-x-8">
                    <div class=" w-full md:max-w-[596px] grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        <input required type="text" placeholder="Anrede" class=" bg-transparent border border-white rounded-full text-white lg:text-xl  w-full placeholder-white px-6 outline-none py-2">
                        <input required type="text" placeholder="Firma" class=" bg-transparent border border-white rounded-full text-white lg:text-xl  w-full placeholder-white px-6 outline-none py-2">
                        <input required type="text" placeholder="Vorname" class=" bg-transparent border border-white rounded-full text-white lg:text-xl  w-full placeholder-white px-6 outline-none py-2">
                        <input required type="text" placeholder="Name" class=" bg-transparent border border-white rounded-full text-white lg:text-xl  w-full placeholder-white px-6 outline-none py-2">
                        <input required type="text" placeholder="E-Mail" class=" bg-transparent border border-white rounded-full text-white lg:text-xl  w-full placeholder-white px-6 outline-none py-2">
                        <input required type="text" placeholder="Telefon" class=" bg-transparent border border-white rounded-full text-white lg:text-xl  w-full placeholder-white px-6 outline-none py-2">
                        <div class=" w-full col-span-1 md:col-span-2 flex flex-col items-start space-y-4">
                            <span class=" text-xl text-white font-galano-grotesque">Haben Sie bereits einen Vertriebspartner ?</span>
                            <div class=" w-full flex items-center justify-between max-w-[23rem]">
                                 <div class=" flex items-start space-x-1 -space-y-0">
                                    <label class="control control-radio text-port-gore lg:text-xl">
                                        <input id="Nein" type="radio" name="Haben" />
                                        <div class="control_indicator"></div>
                                    </label>
                                    <label for="Nein" class=" text-white lg:text-xl font-normal ">Nein</label>
                                </div>
                                <div class=" flex items-start space-x-1 -space-y-0">
                                    <label class="control control-radio text-port-gore lg:text-xl">
                                        <input id="Ja" type="radio" name="Haben" />
                                        <div class="control_indicator"></div>
                                    </label>
                                    <label for="Ja" class=" text-white lg:text-xl font-normal ">Ja</label>
                                </div>
                            </div>
                        </div>
                        <input required type="text" placeholder="Telefon" class=" col-span-1 md:col-span-2 bg-transparent border border-white rounded-full text-white lg:text-xl  w-full placeholder-white px-6 outline-none py-2">
                        
                    </div>
                    <div class=" w-full  md:max-w-[24.1875rem]">
                        <textarea required placeholder="Ihre Nachricht"  rows="12" class=" h-full bg-transparent border border-white rounded-3xl text-white lg:text-xl  w-full placeholder-white px-6 outline-none py-2"></textarea>
                    </div>
            </div>
            <div class=" w-full flex md:flex-row flex-col space-y-4 md:space-y-0 md:items-center md:justify-between">
                <div class=" flex items-start space-x-1 -space-y-0">
                    <label class="control control-radio text-port-gore lg:text-xl">
                        <input id="Datenschutzerklärung" type="radio" name="Datenschutzerklärung" />
                        <div class="control_indicator"></div>
                    </label>
                    <label for="Datenschutzerklärung" class=" text-white lg:text-xl font-normal ">Ich habe die Datenschutzerklärung zur Kenntnis genommen.</label>
                </div>
                <button type="submit" class=" bg-caribbean-green text-port-gore text-base font-galano-grotesque-medium rounded-full px-6 py-3 hover:bg-opacity-60 hover:scale-110 duration-300">
                    Senden
                </button>
            </div>
        </form>
        <div class=" w-full flex sm:flex-row flex-col space-y-4 sm:space-y-0 sm:justify-between items-center">
            <a href="mailto:hello@mobiscan.ch" class=" text-white font-galano-grotesque-medium text-3xl">hello@mobiscan.ch</a>
            <a href="tel:+41 71 444 555 555"  class=" text-white font-galano-grotesque-medium text-3xl">+41 71 444 555 555</a>
        </div>
    </div>
</template>


<script setup>
 const open = ref(false)

 const openForm = () => {
    open.value = true;
     document.documentElement.style.overflow = 'hidden';
 }

 const closeForm = () => {
    open.value = false;
     document.documentElement.style.overflow = 'auto';
 }

 defineExpose({
    openForm
 })
</script>


<style scoped>
 
 
.control {
    font-family: arial;
    display: block;
    position: relative;
    padding-left: 29px;
    margin-bottom: 5px;
    padding-top: 3px;
    cursor: pointer;
    font-size: 16px;
}
    .control input {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }
.control_indicator {
    position: absolute;
    top: 2px;
    left: 0;
    height: 20px;
    width: 20px;
    background: #2c2263;
    border: 1px solid #fff;
    border-radius: undefinedpx;
}
.control:hover input ~ .control_indicator,
.control input:focus ~ .control_indicator {
    background: #2c2263;
}

.control input:checked ~ .control_indicator {
    background: #2c2263;
}
.control:hover input:not([disabled]):checked ~ .control_indicator,
.control input:checked:focus ~ .control_indicator {
    background: #2c2263;
}
.control input:disabled ~ .control_indicator {
    background: #e6e6e6;
    opacity: 0.6;
    pointer-events: none;
}
.control_indicator:after {
    box-sizing: unset;
    content: '';
    position: absolute;
    display: none;
}
.control input:checked ~ .control_indicator:after {
    display: block;
}
.control-radio .control_indicator {
    border-radius: 50%;
}

.control-radio .control_indicator:after {
    left: 3px;
    top: 3px;
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background: #fff;
    transition: background 250ms;
}
.control-radio input:disabled ~ .control_indicator:after {
    background: #7b7b7b;
}
</style>