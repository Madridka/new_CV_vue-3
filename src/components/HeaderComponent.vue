<script setup lang="ts">
import myPhoto from '@/assets/images/photo.png'
</script>

<template>
  <div class="flex flex-col px-23 text-white! rounded-xl">
    <div class="flex gap-35 items-center py-4">
      <img :src="myPhoto" alt="My Photo" class="w-[15%] h-[10%] rounded-4xl" />
      <div class="flex flex-col">
        <h1 class="mt-4 text-5xl text-white font-semibold max-xl:text-2xl">Сербин Кирилл</h1>
        <p class="text-2xl text-gray-500 max-xl:text-sm">Frontend разработчик</p>
      </div>
    </div>
  </div>
</template>
