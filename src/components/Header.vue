<template>
    <header class="h-[54px] border-b px-[8px] flex items-center justify-between">
        <button class="border text-[var(--main-color)] p-[5px] text-[13px]">Сегодня</button>
        <div class="flex items-center gap-x-[5px]">
            <button class="rounded-full">
            <img src="https://cdn4.iconfinder.com/data/icons/developer-set-3/128/left-1024.png" width="15" class="object-center" alt="">
            </button>
            <button class="rounded-full">
            <img src="https://cdn4.iconfinder.com/data/icons/developer-set-3/128/left-1024.png" width="15" class="object-center rotate-180" alt="">
            </button>
            <p class="text-[var(--main-color)] text-[13px]">Июль  <span>2023</span></p>
        </div>
        <select v-model="selected" class="text-[var(--main-color)] text-[13px] p-[5px]">
            <option v-for="(opt, index) in optionsArr" :key="index" :value="opt.value">
            {{ opt.desc }}
            </option>
        </select>
    </header>
</template>

<script setup lang="ts">
import {ref} from 'vue';

const optionsArr = ref([
    {
        value: 'day',
        desc: 'День'
    }, {
        value: 'four',
        desc: '4 дня'
    }, {
        value: 'week',
        desc: 'Неделя'
    }, {
        value: 'month',
        desc: 'Месяц'
    }, {
        value: 'year',
        desc: 'Год'
    }
])
const selected = ref('week')





</script>

<style lang="scss" scoped>

</style>