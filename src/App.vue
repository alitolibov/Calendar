<template>
  <div>
    <Header></Header>
    <main class="px-[8px] flex flex-col my-[30px] space-y-[20px]">
      <DataPicker></DataPicker>
      <Calendar></Calendar>
    </main>
  </div>
</template>

<script lang="ts" setup>
  import Header from './components/Header.vue';
  import DataPicker from './components/Datapicker.vue';
  import Calendar from './components/Calendar.vue';
</script>

<style lang="scss" scoped>

</style>