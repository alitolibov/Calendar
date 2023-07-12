<template>
    <div class="aspect-[1/2] space-y-[10px]">
        <div class="flex items-center justify-between">
            <p class="text-[var(--main-color)] text-[11.5px] font-semibold">{{ date }}</p>
            <div class="flex items-center gap-x-[20%]">
            <button @click="decrementMonth" class="rounded-full">
            <img src="https://cdn4.iconfinder.com/data/icons/developer-set-3/128/left-1024.png" width="12" class="object-center" alt="">
            </button>
            <button @click="incrementMonth" class="rounded-full">
            <img src="https://cdn4.iconfinder.com/data/icons/developer-set-3/128/left-1024.png" width="12" class="object-center rotate-180" alt="">
        </button>
        </div>
        </div>
        <div class="grid grid-cols-7 gap-[3px]" >
            <p class="text-[grey] text-center text-[10px]" v-for="(weekName, index) in weekNames" :key="index">
            {{ weekName }}
            </p>
            <div v-for="(data, index) in daysInMonth" :key="index">
                <p class="text-[grey] text-center text-[10px]">
                {{ data }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import moment from 'moment';
    import { ref, watch } from 'vue'
    moment.updateLocale('ru', {
    months : [
    "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль",
    "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"
    ]
    });
    const weekNames:String[] = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс',]
    const count = ref(0)
    const date = ref(moment().format('MMMM YYYY'))
    console.log(date.value);
    
    watch(count, (newValue) => {
        date.value = moment().add(newValue, 'month').format("MMMM YYYY")
    })
    let splited = date.value.split(' ')
    const daysInMonth = ref(moment(`${splited[0]}-${splited[1]}`, "MMMM-YYYY").daysInMonth())
    console.log(daysInMonth.value);
    
    
    watch(date, (newValue) => {
        splited = newValue.split(' ')
        daysInMonth.value = moment(`${splited[0]}-${splited[1]}`, "MMMM-YYYY").daysInMonth()
        console.log(daysInMonth.value);
    })
    
    
    const incrementMonth = () => {
        count.value++
    }
    const decrementMonth = () => {
        count.value--
    }
</script>

<style lang="scss" scoped>

</style>