import { createStore } from 'vuex';


export default createStore({
    state: {
        isOpen: false
    },
    mutations: {
        toggle(state) {
            state.isOpen = !state.isOpen
        }
    }
})