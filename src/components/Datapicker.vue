<template>
    <div class="aspect-[1.3/2] bg-[red]">
        <div class="flex items-center justify-between">
            <p class="text-[var(--main-color)] text-[13px] ml-[4px]">Июль  <span>2023</span></p>
            <div class="flex items-center gap-x-[5px]">
            <button class="rounded-full">
            <img src="https://cdn4.iconfinder.com/data/icons/developer-set-3/128/left-1024.png" width="13" class="object-center" alt="">
            </button>
            <button class="rounded-full">
            <img src="https://cdn4.iconfinder.com/data/icons/developer-set-3/128/left-1024.png" width="13" class="object-center rotate-180" alt="">
        </button>
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import moment from 'moment';
    import { ref } from 'vue'

    const selectedMonth = ref(new Date().getMonth())
    console.log(moment().month(selectedMonth.value));
    
    
    


</script>

<style lang="scss" scoped>

</style>