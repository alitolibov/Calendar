import moment from 'moment';
import { createStore } from 'vuex';


export default createStore({
    state: {
        count: 0,
        date: moment().format('MMMM YYYY'),
        selectedDay: {
            day: Number,
            isActive: Boolean,
            month: String,
            week: String,
            year: Number},
        isTrue: false,
    },
    mutations: {
        increment(state, payload) {
            if(payload === 'addYear') {
                state.date = moment().add(1, 'year').format("MMMM YYYY")
            } else {
                state.count++
                state.date = moment().add(state.count, 'month').format("MMMM YYYY")
            }
        },
        decrement(state) {
            if(payload === 'subtractYear') {
                state.date = moment().subtract(1, 'year').format("MMMM YYYY")
            } else {
                state.count--
                state.date = moment().add(state.count, 'month').format("MMMM YYYY")
            }
        },
        addSelectedDay (state, payload) {
            state.selectedDay = payload
        },
        incrementDays(state, payload) {
           if(state.isTrue) {
            let a = moment([state.selectedDay.year, +state.selectedDay.month - 1, state.selectedDay.day]).add(1, payload).format('YYYY-M-DD-d').split('-')
            state.selectedDay.year = +a[0]
            state.selectedDay.month = a[1]
            state.selectedDay.day = +a[2]
            state.selectedDay.week = +a[3]
           } else {
            state.count++
            state.date = moment().add(state.count, 'month').format("MMMM YYYY")
           }
        },
        decrementDays(state, payload) {
            if(state.isTrue) {
                let a = moment([state.selectedDay.year, +state.selectedDay.month - 1, state.selectedDay.day]).subtract(1, payload).format('YYYY-M-DD-d').split('-')
                state.selectedDay.year = +a[0]
                state.selectedDay.month = a[1]
                state.selectedDay.day = +a[2]
                state.selectedDay.week = +a[3]
            } else {
                state.count--
                state.date = moment().add(state.count, 'month').format("MMMM YYYY")
            }
        },
        isTrue(state) {
            state.isTrue = true
        },
        isFalse(state) {
            state.isTrue = false
        },
        returnToday(state) {
            state.count = 0
            state.date = moment().format('MMMM-YYYY')
            let split = moment().format('MM-YYYY-DD-d').split('-')
            state.selectedDay.year = +split[1]
            state.selectedDay.month = split[0]
            state.selectedDay.day = +split[2]
            state.selectedDay.week = +split[3]
            console.log(state.selectedDay);
        }
    }
})