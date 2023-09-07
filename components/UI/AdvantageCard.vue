<template>
    <div class="bg-white pt-11 pb-9 px-6 sm:px-9 lg:px-6  xl:px-9 drop_shadow rounded-[3.125rem] text-center flex flex-col items-center max-w-[24.25rem] h-auto shrink-[1] xl:shrink-0">
        <div>
            <slot name="img" />
        </div>
        <div class="text-2xl sm:text-3xl font-galano-grotesque-medium mt-10">
            <slot name="title" />
        </div>        
        <div class="text-lg sm:text-xl mt-5">
            <slot name="description" />
        </div>
    </div>
</template>
<style scoped>
.drop_shadow{
    filter: drop-shadow(-8px -8px 24px rgba(0, 0, 0, 0.05))
}

</style>