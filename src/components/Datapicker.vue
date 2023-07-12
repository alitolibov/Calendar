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
        <div class="grid grid-cols-7">
            <p class="text-[grey] text-center text-[10px]" v-for="(weekName, index) in weekNames" :key="index">
            {{ weekName }}
            </p>
            <div class="max-w-[20px] p-[2px] text-[grey]" :class="activeButtonIndex === index ? 'text-[#fff] rounded-full duration-300 bg-blue-400' : ''" @click="setActiveButton(index)" v-for="(date, index) in arrayDays" :key="index">
                <p class="text-center text-[10px]">
                {{ date.day }}
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
    const weekNames:String[] = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
    const count = ref(0)
    const arrayDays = ref()
    const activeButtonIndex = ref();
    const date = ref(moment().format('MMMM YYYY'))
    const dateTwo = ref(moment().format('MM YYYY'))
    let splited:String[] = date.value.split(' ')
    let splitedTwo = dateTwo.value.split(' ')
    const daysInMonth = ref(moment(`${splited[0]}-${splited[1]}`, "MMMM-YYYY").daysInMonth())
    createDays(daysInMonth.value, splitedTwo[0], +splitedTwo[1])
    
    watch(count, (newValue) => {
        let newDate = date.value = moment().add(newValue, 'month').format("MMMM YYYY")
        let newDateTwo = dateTwo.value = moment().add(newValue, 'month').format("MM YYYY")
        splited = newDate.split(' ')
        splitedTwo = newDateTwo.split(' ')
        daysInMonth.value = moment(`${splited[0]}-${splited[1]}`, "MMMM-YYYY").daysInMonth()
        activeButtonIndex.value = null
        createDays(daysInMonth.value, splitedTwo[0], +splitedTwo[1])
    })
    
    const incrementMonth = () => {
        count.value++
    }
    const decrementMonth = () => {
        count.value--
    }
    function createDays (days:number, month: string, year: number) {
        let arr = []
        for(let i = 1; i <= days; i++) {
            let getWeek = moment(`${year}-${month}-${i}`)
            let dayOfWeek = getWeek.format('dddd');
            let obj = {
                day: i,
                isActive: false,
                week: dayOfWeek
            }
            arr.push(obj)
        }
        arrayDays.value = arr
    }

    const setActiveButton = (index:number) => {
      activeButtonIndex.value = index;
    };
</script>

<style lang="scss" scoped>

</style>