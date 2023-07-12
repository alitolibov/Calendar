<template>
  <div>
    <Header></Header>
    <main class="px-[8px] flex justify-between">
      <div class="w-[37%] my-[20px]">
        <DataPicker></DataPicker>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
  import Header from './components/Header.vue';
  import DataPicker from './components/Datapicker.vue';

  

</script>

<style lang="scss" scoped>

</style>