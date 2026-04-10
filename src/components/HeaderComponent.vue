<script setup lang="ts">
import myPhoto from '@/assets/images/photo.png'
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

import ToggleSwitch from 'primevue/toggleswitch'

const { t } = useI18n()
const { locale } = useI18n()

const isEn = computed({
  get: () => locale.value === 'en',
  set: (val: boolean) => {
    locale.value = val ? 'en' : 'ru'
  },
})
</script>

<template>
  <div class="relative flex flex-col text-white rounded-xl">
    <!-- ПЕРЕКЛЮЧЕНИЕ -->
    <div class="absolute top-4 right-4 flex items-center gap-2 z-10">
      <span class="text-xs text-gray-400">RU</span>

      <ToggleSwitch v-model="isEn" />

      <span class="text-xs text-gray-400">EN</span>
    </div>

    <!-- КОНТЕНТ -->
    <div class="flex items-center justify-between gap-4 p-4">
      <img :src="myPhoto" alt="My Photo" class="w-[15%] h-[10%] rounded-4xl" />

      <div class="flex flex-col">
        <h1 class="mt-4 text-5xl text-white font-semibold max-xl:text-3xl">
          {{ t('name') }}
        </h1>
        <p class="text-2xl text-gray-500 max-xl:text-sm">
          {{ t('profession') }}
        </p>
      </div>

      <div></div>
    </div>
  </div>
</template>
