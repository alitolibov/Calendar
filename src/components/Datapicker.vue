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
            <div class="max-w-[20px] p-[2px] duration-200 rounded-full" :style="date.isActive ? {background: 'rgb(59 130 246 / 1', color: 'white'} : ''" :class="{'text-white bg-blue-300': date.day === store.state.selectedDay.day}"  @click="validate(date)" v-for="(date, index) in arrayDays" :key="index">
                <p class="text-center text-[11px]">
                {{ date.day }}
                </p>
            </div>
        </div>
            </div>
</template>

<script setup lang="ts">    
    import moment from 'moment';
    import { computed, reactive, ref, watch } from 'vue'
    import { useStore } from 'vuex';
    
    const weekNames:String[] = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'San'],
    store = useStore(),
    arrayDays = ref(),
    todayDate = moment().date(),
    dateTwo = ref(moment().format('MM YYYY'));
    let splitedTwo = dateTwo.value.split(' ')
    
    
    const daysInMonth = ref(moment(`${splitedTwo[0]}-${splitedTwo[1]}`, "MM-YYYY").daysInMonth())
    createDays(daysInMonth.value, splitedTwo[0], +splitedTwo[1])
    
    watch(() => store.state.count, (newValue) => {
        let newDateTwo = dateTwo.value = moment().add(newValue, 'month').format("MM YYYY")       
        splitedTwo = newDateTwo.split(' ')
        daysInMonth.value = moment(`${splitedTwo[0]}-${splitedTwo[1]}`, "MM-YYYY").daysInMonth()
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
                isActive: moment().month() === +splitedTwo[0] - 1 && todayDate === i &&  moment().year() === +splitedTwo[1]? true : false,
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

    const validate = (date:object) => {
        if(date.day !== '') {
            store.commit('isTrue')
            store.commit('addSelectedDay', date) 
        } 
    }

    watch(() => store.state.selectedDay.month, (newValue) => {
        if(store.state.selectedDay.year === +splitedTwo[1]) {
            if(newValue > +splitedTwo[0]) {
            store.commit('increment')
            dateTwo.value = moment().add(1, 'month').format("MM YYYY")
            } else if(newValue < +splitedTwo[0]) {
            store.commit('decrement')
            dateTwo.value = moment().subtract(1, 'month').format("MM YYYY")
        }
        } else if (store.state.selectedDay.year > +splitedTwo[1]) {
            dateTwo.value = moment().add(1, 'year').format("MM YYYY")
            store.commit('increment')
        } else if (store.state.selectedDay.year < +splitedTwo[1]) {
            dateTwo.value = moment().subtract(1, 'year').format("MM YYYY")
            store.commit('decrement')
        }        
        
        if(store.state.selectedDay.year === moment().year() && newValue === moment().format('MMMM') && store.state.selectedDay.day, moment().date()) {
             dateTwo.value = moment().format('MM YYYY')
        }
        
    })
    </script>

<style lang="scss" scoped>

</style>