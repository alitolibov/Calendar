<template>
    <table class="w-full border-collapse">
        <thead>
            <tr>
                <th v-for="(render, index) in reloadDays.rendering" :key="index">
                    {{ render }}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>4</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
    import moment from 'moment';
import { computed, ref, watch } from 'vue';
    import {useStore} from 'vuex';
    const store = useStore();
    const reloadDays = ref({
        rendering: 7,
        date: store.state.selectedDay
    })

    console.log(store.state.selectedDay);
    

    watch([() => store.state.selected, () => store.state.selectedDay.day], ([newSelect , newDay]) => {
        if(newSelect === 'w') {
            reloadDays.value =  {
                rendering: 7,
                date: store.state.selectedDay
            }
        } else if (store.state.selected == 'M') {
            reloadDays.value =  {
                rendering: moment(`${store.state.selectedDay.month}-${store.state.selectedDay.year}`, "MM YYYY").daysInMonth(),
                date: store.state.selectedDay
            }
        } else {
            reloadDays.value = {
                rendering: 1,
                date: store.state.selectedDay
            }
        }
    })


</script>

<style scoped >
    th, td {
        @apply border 
    }
</style>