<template>
  <div>
    <Header></Header>
    <ModalPicker></ModalPicker>
    <main class="px-[8px] flex justify-between">
    </main>
  </div>
</template>

<script lang="ts" setup>
  import Header from './components/Header.vue';
  import DataPicker from './components/Datapicker.vue';
  import ModalPicker from './components/ModalPicker.vue';
  import { ref } from 'vue';

  const modalToggle = ref(false)
  

</script>

<style lang="scss" scoped>

</style>