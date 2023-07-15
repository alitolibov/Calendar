import moment from 'moment';
import { createStore } from 'vuex';


export default createStore({
    state: {
        count: 0,
        date: moment().format('MMMM-YYYY'),
        selectedDay: {
            day: Number,
            isActive: Boolean,
            month: String,
            week: String,
            year: Number},
        isTrue: false,
    },
    mutations: {
        increment(state) {
            state.count++
            state.date = moment().add(state.count, 'month').format("MMMM YYYY")
        },
        decrement(state) {
            state.count--
            state.date = moment().add(state.count, 'month').format("MMMM YYYY")
        },
        addSelectedDay (state, payload) {
            state.selectedDay = payload
        },
        incrementWeek(state) {
           if(state.isTrue) {
            let a = moment([state.selectedDay.year, +state.selectedDay.month - 1, state.selectedDay.day]).add(1, 'week').format('YYYY-M-DD')
            let b = a.split('-')
            state.selectedDay.year = +b[0]
            state.selectedDay.month = b[1]
            state.selectedDay.day = +b[2]
           } else {
            state.count++
            state.date = moment().add(state.count, 'month').format("MMMM YYYY")
           }
        },
        decrementWeek(state) {
            if(state.isTrue) {
                let a = moment([state.selectedDay.year, +state.selectedDay.month - 1, state.selectedDay.day]).subtract(1, 'week').format('YYYY-M-DD')
                let b = a.split('-')
                state.selectedDay.year = +b[0]
                state.selectedDay.month = b[1]
                state.selectedDay.day = +b[2]
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
            state.date = moment().format('MMMM-YYYY')
            let split = moment().format('MMMM-YYYY-DD-d').split('-')
            state.selectedDay.year = +split[1]
            state.selectedDay.month = split[0]
            state.selectedDay.day = +split[2]
            state.selectedDay.week = +split[3]
        }
    }
})