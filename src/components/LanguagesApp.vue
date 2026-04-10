<script setup lang="ts">
import type { Languages } from '@/types/types'
import { useI18n } from 'vue-i18n'
import { useBreakpoint } from '@/helpers/useBreakpoints'

import Card from 'primevue/card'
import Knob from 'primevue/knob'
import ProgressBar from 'primevue/progressbar'

const { t } = useI18n()
const { isMobile } = useBreakpoint()

const languages: Languages[] = [
  {
    language: 'russian',
    level: 96,
  },
  {
    language: 'english',
    level: 60,
  },
  {
    language: 'german',
    level: 30,
  },
]
</script>

<template>
  <Card
    class="bg-gray-800 border-none"
    :pt="{
      content: {
        class: 'flex flex-col gap-6 max-xl:flex-row max-xl:justify-start',
      },
    }"
  >
    <template #title>
      <div class="text-white">{{ t('languages') }}</div>
    </template>

    <template #content>
      <div v-for="language in languages" :key="language.language" class="flex flex-col gap-2">
        <!-- LABEL -->
        <span class="text-gray-200 text-sm">
          {{ t(language.language) }}
        </span>

        <!-- MOBILE -->
        <div v-if="isMobile" class="flex justify-start">
          <Knob v-model="language.level" :size="80" disabled />
        </div>

        <!-- DESKTOP -->
        <ProgressBar v-else :value="language.level" class="w-full" />
      </div>
    </template>
  </Card>
</template>
