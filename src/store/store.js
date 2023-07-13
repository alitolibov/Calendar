import { createStore } from 'vuex';


export default createStore({
    state: {
        isOpen: false
    },
    mutations: {
        toggle() {
            state.isOpen = !state.isOpen
        }
    }
})