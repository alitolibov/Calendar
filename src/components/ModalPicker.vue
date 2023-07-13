<template>
    <div class="h-screen hidden w-full duration-300 absolute left-0 top-0 bgModal" :style="isOpenToggle ? 'display: block' : 'display: none'">
        <div class="h-full relative">
        <DataPicker></DataPicker>
    </div>
    </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import DataPicker from './Datapicker.vue';
import { useStore } from 'vuex';
const store = useStore();
const isOpenToggle = ref(false)

watch(() => store.state.isOpen,(newValue) =>  {
    isOpenToggle.value = newValue
})



    
</script>

<style lang="css" scoped>
    .bgModal {
        background: rgba(0,0,0, .25);
    }
</style>