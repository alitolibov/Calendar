<template>
  <div>
    <Header></Header>
    <main class="px-[8px] flex flex-col my-[30px]">
      <DataPicker></DataPicker>
    </main>
  </div>
</template>

<script lang="ts" setup>
  import Header from './components/Header.vue';
  import DataPicker from './components/Datapicker.vue';
</script>

<style lang="scss" scoped>

</style>