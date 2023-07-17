<template>
    <header class="h-[54px] border-b px-[8px] flex items-center justify-between">
      <button @click="store.commit('returnToday')" class="border text-[var(--main-color)] rounded-sm p-[5px] text-[13px]">Today</button>
      <div class="relative w-[45%] max-w-[200px] min-w-[150px] gap-x-[10px]">
        <div class="absolute left-0 top-[50%] translate-y-[-50%] space-x-[10px]">
            <button class="rounded-full" @click="store.commit('decrementDays')">
                <img src="https://cdn4.iconfinder.com/data/icons/developer-set-3/128/left-1024.png" width="15" class="object-center" alt="">
            </button>
            <button class="rounded-full" @click="store.commit('incrementDays')">
                <img src="https://cdn4.iconfinder.com/data/icons/developer-set-3/128/left-1024.png" width="15" class="object-center rotate-180" alt="">
            </button>
        </div>
        <p class="right-0 top-[50%] translate-y-[-50%] absolute text-[var(--main-color)] text-[13px]">{{ store.state.date }}</p>
      </div>
      <select :value="store.state.selected" @change="changeView" class="text-[var(--main-color)] text-[13px] p-[5px]">
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

  const changeView = (e:any) => {
    store.commit('changeView', e.target.value)   
  }
  
  const selectOptionsArr = ref(optionsArr);
  const selected = ref('w');

  
  
  </script>
  