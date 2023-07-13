<template>
    <div class="p-[15px] bg-white rounded-md w-[250px] h-[230px] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div class="space-y-[10px] relative h-full">
        <div class="flex items-center justify-between">
            <p class="text-[var(--main-color)] text-[12px] font-semibold">{{ date }}</p>
            <div class="flex items-center gap-x-[5px]">
            <button @click="decrementMonth" class="rounded-full">
            <img src="https://cdn4.iconfinder.com/data/icons/developer-set-3/128/left-1024.png" width="12" class="object-center" alt="">
            </button>
            <button @click="incrementMonth" class="rounded-full">
            <img src="https://cdn4.iconfinder.com/data/icons/developer-set-3/128/left-1024.png" width="12" class="object-center rotate-180" alt="">
        </button>
        </div>
        </div>
        <div class="grid grid-cols-7">
            <p class="w-fit text-[grey] text-center text-[11px]" v-for="(weekName, index) in weekNames" :key="index">
            {{ weekName }}
            </p>
            <div class="max-w-[20px] p-[2px] duration-200" :class="activeButtonIndex === index ? 'text-[#fff] rounded-full bg-blue-400' : 'text-[grey]'" @click="setActiveButton(date, index)" v-for="(date, index) in arrayDays" :key="index">
                <p class="text-center text-[11px]">
                {{ date.day }}
                </p>
            </div>
        </div>
                <div class="flex items-center justify-between absolute bottom-0 w-full">
                    <button @click="closeModal" class="rounded-[10px] text-[14px] px-[15px] py-[5px] bg-red-400 text-white">Close</button>
                    <button :disabled="!selectedDay" :class="!selectedDay ? 'bg-gray-400' : 'bg-blue-400'" class="rounded-[10px] text-[14px] px-[15px] py-[5px] bg-blue-400 text-white">Select</button>
                </div>
            </div>
    </div>
</template>

<script setup lang="ts">
    import moment from 'moment';
    import { ref, watch } from 'vue'
    import { useStore } from 'vuex';

    const weekNames:String[] = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'San'],
    store = useStore(),
    count = ref(0),
    arrayDays = ref(),
    activeButtonIndex = ref(moment().date() - 1),
    selectedDay = ref(null),
    date = ref(moment().format('MMMM YYYY')),
    dateTwo = ref(moment().format('MM YYYY'));
    let splited:String[] = date.value.split(' ')
    let splitedTwo = dateTwo.value.split(' ')
    console.log(activeButtonIndex.value);
    
    const daysInMonth = ref(moment(`${splited[0]}-${splited[1]}`, "MMMM-YYYY").daysInMonth())
    createDays(daysInMonth.value, splitedTwo[0], +splitedTwo[1])
    
    watch(count, (newValue) => {
        let newDate = date.value = moment().add(newValue, 'month').format("MMMM YYYY")
        let newDateTwo = dateTwo.value = moment().add(newValue, 'month').format("MM YYYY")
        splited = newDate.split(' ')
        selectedDay.value = null
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
                year: year,
                month: month,
                day: i,
                isActive: false,
                week: dayOfWeek
            }
            activeButtonIndex.value === i ? selectedDay.value = obj : null
            arr.push(obj)
        }
        arrayDays.value = arr
    }

    const setActiveButton = (date:any, index:number) => {
      activeButtonIndex.value = index;
      selectedDay.value = date
      console.log(selectedDay.value);
    };

    const closeModal = () => {
        store.commit('toggle')
        selectedDay.value = null
        activeButtonIndex.value = null
    }

</script>

<style lang="scss" scoped>

</style>