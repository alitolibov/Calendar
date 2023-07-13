<template>
        <div class="space-y-[10px] w-[230px] mx-auto">
        <div class="flex items-center justify-between">
            <p class="text-[var(--main-color)] text-[12px] font-semibold">{{ store.state.date }}</p>
            <div class="flex items-center gap-x-[5px]">
            <button @click="store.commit('decrement')" class="rounded-full">
            <img src="https://cdn4.iconfinder.com/data/icons/developer-set-3/128/left-1024.png" width="12" class="object-center" alt="">
            </button>
            <button @click="store.commit('increment')" class="rounded-full">
            <img src="https://cdn4.iconfinder.com/data/icons/developer-set-3/128/left-1024.png" width="12" class="object-center rotate-180" alt="">
        </button>
        </div>
        </div>
        <div class="grid grid-cols-7 gap-y-[4px]">
            <p class="w-fit text-[grey] text-center text-[11px]" v-for="(weekName, index) in weekNames" :key="index">
            {{ weekName }}
            </p>
            <div class="max-w-[20px] p-[2px] duration-200 rounded-full" :style="selectedDay.index === index ? {background: 'rgb(96 165 250 / 0.5', color: 'white'} : ''" :class="{'text-white bg-blue-400': date.isActive}"  @click="date.day !== '' ? setActiveButton(date, index) : null" v-for="(date, index) in arrayDays" :key="index">
                <p class="text-center text-[11px]">
                {{ date.day }}
                </p>
            </div>
        </div>
            </div>
</template>

<script setup lang="ts">    
    import moment from 'moment';
    import { reactive, ref, watch } from 'vue'
    import { useStore } from 'vuex';
    
    const weekNames:String[] = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'San'],
    store = useStore(),
    arrayDays = ref(),
    date = ref(store.state.date),
    todayDate = moment().date(),
    today = ref(),
    dateTwo = ref(moment().format('MM YYYY'));
    let selectedDay = ref({})
    let splited:String[] = date.value.split(' ')
    let splitedTwo = dateTwo.value.split(' ')
    
    
    
    const daysInMonth = ref(moment(`${splited[0]}-${splited[1]}`, "MMMM-YYYY").daysInMonth())
    createDays(daysInMonth.value, splitedTwo[0], +splitedTwo[1])
    
    watch(() => store.state.count, (newValue) => {
        let newDateTwo = dateTwo.value = moment().add(newValue, 'month').format("MM YYYY")
        splited = date.value.split(' ')
        selectedDay.value = {}
        splitedTwo = newDateTwo.split(' ')
        daysInMonth.value = moment(`${splited[0]}-${splited[1]}`, "MMMM-YYYY").daysInMonth()
        createDays(daysInMonth.value, splitedTwo[0], +splitedTwo[1])
    })

    function createDays (days:number, month: string, year: number) {
        let arr = []
        for(let i = 1; i <= days; i++) {
            let getWeek = moment(`${year}-${month}-${i}`)
            let dayOfWeek = getWeek.format('d');
            
            let obj = {
                year: year,
                month: month,
                day: i,
                isActive: moment().month() === +splitedTwo[0] - 1 && todayDate === i ? true : false,
                week: dayOfWeek
            }
            arr.push(obj)
        }

        let firstDay = +arr[0].week

        for(let i = 0; i < firstDay; i++) {
            let obj = {
                day: ''
            }
            arr.unshift(obj)
        }
        arrayDays.value = arr
    }

    const setActiveButton = (date:object, index:number) => {
        selectedDay.value = Object.assign(date, {index})
    };

    const returnToday = () => { 
        // activeButtonIndex.value = moment().date() - 1
        // selectedDay.value = today.value
    }
    
    console.log(selectedDay.value);
    
    </script>

<style lang="scss" scoped>

</style>