<template>
    <div class="aspect-[1.3/2]">
        <div class="flex items-center justify-between">
            <p class="text-[var(--main-color)] text-[13px] ml-[4px]">Июль  <span>2023</span></p>
            <div class="flex items-center gap-x-[5px]">
            <button @click="decrementMonth" class="rounded-full">
            <img src="https://cdn4.iconfinder.com/data/icons/developer-set-3/128/left-1024.png" width="13" class="object-center" alt="">
            </button>
            <button @click="incrementMonth" class="rounded-full">
            <img src="https://cdn4.iconfinder.com/data/icons/developer-set-3/128/left-1024.png" width="13" class="object-center rotate-180" alt="">
        </button>
        </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import moment, { lang } from 'moment';
    import { ref, watch } from 'vue'
    let month = new Date().getMonth() 
    let count = 0
    // const daysInMonth = ref(moment(`${count}-${year}`, "MM-YYYY").daysInMonth())
    const selectedMonth = ref(moment().format('MMMM YYYY'))
    console.log(selectedMonth.value);
    

    
    
    const incrementMonth = () => {
        count++
        selectedMonth.value = moment().add(count, 'month').format('MMMM YYYY')
        console.log(selectedMonth.value);
        
    }
    const decrementMonth = () => {
        count--
        selectedMonth.value = moment().add(count, 'month').format('MMMM YYYY')
        console.log(selectedMonth.value);
    }
</script>

<style lang="scss" scoped>

</style>