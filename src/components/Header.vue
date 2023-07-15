<template>
    <header class="h-[54px] border-b px-[8px] flex items-center justify-between">
      <button @click="store.commit('returnToday')" class="border text-[var(--main-color)] rounded-sm p-[5px] text-[13px]">Today</button>
      <div class="flex items-center gap-x-[10px]">
        <button class="rounded-full" @click="store.commit('decrementDays', selected)">
          <img src="https://cdn4.iconfinder.com/data/icons/developer-set-3/128/left-1024.png" width="15" class="object-center" alt="">
        </button>
        <button class="rounded-full" @click="store.commit('incrementDays', selected)">
          <img src="https://cdn4.iconfinder.com/data/icons/developer-set-3/128/left-1024.png" width="15" class="object-center rotate-180" alt="">
        </button>
        <p @click="openModal" class="text-[var(--main-color)] text-[13px]">{{ store.state.date }}</p>
      </div>
      <select v-model="selected" class="text-[var(--main-color)] text-[13px] p-[5px]">
        <option v-for="(opt, index) in selectOptionsArr" :key="index" :value="opt.value">
          {{ opt.desc }}
        </option>
      </select>
    </header>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
  import { optionsArr } from '../mocks/optionsHeader';
  import { useStore } from 'vuex';
    
  const store = useStore();
  
  const openModal = () => {
    store.commit('toggle')
  };
  
  const selectOptionsArr = ref(optionsArr);
  const selected = ref('w');

  
  
  </script>
  