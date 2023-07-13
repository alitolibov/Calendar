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
        <div class="grid grid-cols-7">
            <p class="w-fit text-[grey] text-center text-[11px]" v-for="(weekName, index) in weekNames" :key="index">
            {{ weekName }}
            </p>
            <div class="max-w-[20px] p-[2px] duration-200" :class="activeButtonIndex === index ? 'text-[#fff] rounded-full bg-blue-400' : 'text-[grey]'" @click="date.day !== '' ? setActiveButton(date, index) : null" v-for="(date, index) in arrayDays" :key="index">
                <p class="text-center text-[11px]">
                {{ date.day }}
                </p>
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
    arrayDays = ref(),
    activeButtonIndex:any = ref(moment().date()),
    date = ref(store.state.date),
    todayDate = moment().date(),
    selectedDay = ref(),
    today = ref(),
    dateTwo = ref(moment().format('MM YYYY'));
    let splited:String[] = date.value.split(' ')
    let splitedTwo = dateTwo.value.split(' ')
    
    
    
    const daysInMonth = ref(moment(`${splited[0]}-${splited[1]}`, "MMMM-YYYY").daysInMonth())
    createDays(daysInMonth.value, splitedTwo[0], +splitedTwo[1])
    
    watch(() => store.state.count, (newValue) => {
        let newDateTwo = dateTwo.value = moment().add(newValue, 'month').format("MM YYYY")
        splited = date.value.split(' ')
        selectedDay.value = null
        splitedTwo = newDateTwo.split(' ')
        daysInMonth.value = moment(`${splited[0]}-${splited[1]}`, "MMMM-YYYY").daysInMonth()
        if(moment().month() !== +splitedTwo[0] - 1) {
            activeButtonIndex.value = null
        } else {
            activeButtonIndex.value = todayDate
        }
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
                isActive: false,
                week: dayOfWeek
            }
            if(activeButtonIndex.value === i) {
                selectedDay.value = obj
                today.value = obj
            } 
            arr.push(obj)
        }

        let firstDay = +arr[0].week

        for(let i = 0; i < firstDay; i++) {
            let obj = {
                day: ''
            }
            if(moment().month() === +splitedTwo[0] - 1) {
                activeButtonIndex.value++
                console.log(+splitedTwo[0] - 1, activeButtonIndex.value);
            }
            arr.unshift(obj)
        }
        arrayDays.value = arr
        // console.log(splitedTwo[0] - 1, moment().month());
        
    }

    const setActiveButton = (date:object, index:number) => {
      activeButtonIndex.value = index;
      selectedDay.value = date
    };

    const returnToday = () => { 
        activeButtonIndex.value = moment().date() - 1
        selectedDay.value = today.value
    }
    
    
</script>

<style lang="scss" scoped>

</style>