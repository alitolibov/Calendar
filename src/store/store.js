import moment from 'moment';
import { createStore } from 'vuex';


export default createStore({
    state: {
        count: 0,
        date: moment().format('MMMM YYYY'),
        selectedDay: {
            day: moment().date(),
            isActive: false,
            month: moment().month() + 1,
            week: moment().format('d'),
            year: moment().year()},
        isTrue: true,
        selected: 'w'
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
        changeView(state, payload) {
            state.selected = payload
        },
        addSelectedDay (state, payload) {
            state.selectedDay = payload
        },
        incrementDays(state) {
           if(state.isTrue) {
            let a
            if(state.selected === 'M') {
                state.selectedDay.day = 1
                a = moment([state.selectedDay.year, +state.selectedDay.month - 1, state.selectedDay.day]).add(1, state.selected).format('YYYY-M-DD-d').split('-')
            } else {
                a = moment([state.selectedDay.year, +state.selectedDay.month - 1, state.selectedDay.day]).add(1, state.selected).format('YYYY-M-DD-d').split('-')
                state.selectedDay.day = +a[2]
            }
            state.selectedDay.year = +a[0]
            state.selectedDay.month = a[1]
            state.selectedDay.week = +a[3]
            
           } else {
            state.count++
            state.date = moment().add(state.count, 'month').format("MMMM YYYY")
           }
        },
        decrementDays(state) {
            if(state.isTrue) {
                let a
            if(state.selected === 'M') {
                state.selectedDay.day = 1
                a = moment([state.selectedDay.year, +state.selectedDay.month - 1, state.selectedDay.day]).subtract(1, state.selected).format('YYYY-M-DD-d').split('-')
            } else {
                a = moment([state.selectedDay.year, +state.selectedDay.month - 1, state.selectedDay.day]).subtract(1, state.selected).format('YYYY-M-DD-d').split('-')
                state.selectedDay.day = +a[2]
            }
            state.selectedDay.year = +a[0]
            state.selectedDay.month = a[1]
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
            state.date = moment().format('MMMM YYYY')
            let split = moment().format('MM-YYYY-DD-d').split('-')
            state.selectedDay.year = +split[1]
            state.selectedDay.month = split[0]
            state.selectedDay.day = +split[2]
            state.selectedDay.week = +split[3]
        }
    }
})