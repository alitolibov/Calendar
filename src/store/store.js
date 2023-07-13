import moment from 'moment';
import { createStore } from 'vuex';


export default createStore({
    state: {
        count: 0,
        date: moment().format('MMMM YYYY')
    },
    mutations: {
        increment(state) {
            state.count++
            state.date = moment().add(state.count, 'month').format("MMMM YYYY")
        },
        decrement(state) {
            state.count--
            state.date = moment().add(state.count, 'month').format("MMMM YYYY")
        }
    }
})