<template>
    <div class="h-screen hidden w-full duration-300 absolute left-0 top-0 bgModal" :class="props ? 'block' : 'hidden'">
        <div class="h-full relative">
        <DataPicker></DataPicker>
    </div>
    </div>
</template>

<script setup lang="ts">
import DataPicker from './Datapicker.vue';
    const props = defineProps({
        isOpen: Boolean,
    })

    
</script>

<style lang="css" scoped>
    .bgModal {
        background: rgba(0,0,0, .25);
    }
</style>