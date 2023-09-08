<template>
    <div class=" rounded-[3.125rem] w-full bg-caribbean-green px-6 md:px-10 py-8 space-y-10 overflow-hidden">
        <div class=" w-full flex flex-col items-start space-y-4">
            <h2 class=" text-port-gore ">Vertriebspartner werden</h2>
            <p class=" text-port-gore text-base md:text-xl font-galano-grotesque max-w-[30.75rem]">
                Lorem ipsum dolor sit amet consectetur. Habitant vitae mauris aliquam sapien habitant vitae. Egestas dignissim ipsum morbi arcu turpis congue ullamcorper in. 
            </p>
        </div>
        <div class=" w-full space-y-4">
            <div class=" w-full grid md:grid-cols-2 gap-6">
                <input type="text" class=" bg-transparent border border-port-gore rounded-full text-port-gore-dark lg:text-xl  w-full placeholder-port-gore px-6 outline-none py-2" placeholder="Name">
                <input type="text" class=" bg-transparent border border-port-gore rounded-full text-port-gore-dark lg:text-xl  w-full placeholder-port-gore px-6 outline-none py-2" placeholder="Vorname">
                <input type="text" class=" bg-transparent border border-port-gore rounded-full text-port-gore-dark lg:text-xl  w-full placeholder-port-gore px-6 outline-none py-2" placeholder="Firma">
                <input type="text" class=" bg-transparent border border-port-gore rounded-full text-port-gore-dark lg:text-xl  w-full placeholder-port-gore px-6 outline-none py-2" placeholder="E-Mail">
            </div>

            <div class=" w-full flex lg:flex-row flex-col items-start space-y-4 lg:space-y-0 lg:items-center lg:justify-between overflow-hidden">
                <div class=" flex items-start space-x-1 -space-y-0">
                   <label class="control control-radio text-port-gore lg:text-xl">
                    <input id="checkb" type="radio" name="radio" />
                    <div class="control_indicator"></div>
                  </label>
                    <label for="checkb" class=" text-port-gore lg:text-xl ">Ich habe die Datenschutzerklärung zur Kenntnis genommen.</label>
                </div>
                <button  class="text-sm text-white font-galano-grotesque-medium font-normal uppercase lg:text-base bg-port-gore px-8 py-3 rounded-full hover:bg-white hover:text-port-gore duration-200">
                    Anfrage senden
                </button>
            </div>
        </div>
    </div>
</template>



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
    background: #00ffb0;
    border: 1px solid #2c2263;
    border-radius: undefinedpx;
}
.control:hover input ~ .control_indicator,
.control input:focus ~ .control_indicator {
    background: #2c2263;
}

.control input:checked ~ .control_indicator {
    background: #00ffb0;
}
.control:hover input:not([disabled]):checked ~ .control_indicator,
.control input:checked:focus ~ .control_indicator {
    background: #00ffb0;
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
    background: #2c2263;
    transition: background 250ms;
}
.control-radio input:disabled ~ .control_indicator:after {
    background: #7b7b7b;
}
</style>