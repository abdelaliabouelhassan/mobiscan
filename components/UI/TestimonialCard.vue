<template>
    <div class="pt-20 h-full">
        <div class="bg-white flex flex-col justify-between h-full relative pt-28 pb-16 px-16 drop_shadow rounded-[3.125rem]">
            <div class="w-[10rem] h-[10rem] absolute -top-20 left-16">
                <slot name="img" />
            </div>
            <div>
                <slot name="content" />
            </div>
            <div class="flex flex-col mt-[1.125rem]">
                
                <div class="md:text-xl font-semibold font-galano-grotesque-medium"> <slot name="name" /></div>
                <div class="md:text-xl"> <slot name="organization" /></div>
                <div class="mt-4 w-fit">
                    <slot name="socialMedia" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.drop_shadow{
    filter: drop-shadow(-8px -8px 6px rgba(0, 0, 0, 0.05))
}
</style>