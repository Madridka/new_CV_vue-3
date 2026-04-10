<script setup lang="ts">
import type { Contacts, Languages } from '@/types/types'
import { useI18n } from 'vue-i18n'

import Card from 'primevue/card'
import Tag from 'primevue/tag'
import ProgressBar from 'primevue/progressbar'

const { t } = useI18n()

const contacts: Contacts[] = [
  {
    icon: 'pi pi-envelope',
    value: '@mail.ru',
    mail: 'serbin_kirill1807@mail.ru',
  },
  {
    icon: 'pi pi-telegram',
    value: '@madrid_ka',
    link: 'https://t.me/madrid_ka',
  },
  {
    icon: 'pi pi-github',
    value: '@Madridka',
    link: 'https://github.com/Madridka',
  },
]

const skills: string[] = [
  'html5',
  'css',
  'javaScript',
  'typeScript',
  'vue',
  'stateManagement',
  'restApi',
  'vite',
  'primeVue',
  'tailwind',
  'sass',
  'crossPlatform',
  'figma',
  'androidStudio',
  'goLang',
  'git',
  'docker',
  'codeReview',
  'productTeam',
  'jira',
]

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
  <div class="flex flex-col gap-2 text-white!">
    <!-- КОНТАКТЫ -->
    <Card
      class="bg-gray-800 border-none"
      :pt="{
        content: {
          class: 'flex flex-col gap-2 justify-center',
        },
      }"
    >
      <template #title>
        <div class="text-white">{{ t('contacts') }}</div>
      </template>
      <template #content>
        <div class="flex gap-2 items-center text-sm text-gray-400" v-for="contact in contacts">
          <i :class="contact.icon" />

          <div v-if="contact.link">
            <a :href="contact.link ? contact.link : ''"> {{ contact.value }} </a>
          </div>

          <div v-if="contact.mail">
            <a href="mailto:serbin_kirill1807@mail.ru"> {{ contact.value }} </a>
          </div>
        </div>
      </template>
    </Card>

    <!-- ЯЗЫКИ -->
    <Card
      class="bg-gray-800 border-none"
      :pt="{
        content: {
          class: 'flex flex-row gap-6',
        },
      }"
    >
      <template #title>
        <div class="text-white">{{ t('languages') }}</div>
      </template>
      <template #content>
        <div class="flex flex-col w-full">
          <div v-for="language in languages" :key="language.language">
            <div class="flex justify-between text-sm mb-1">
              <span class="text-gray-200">{{ t(language.language) }}</span>
            </div>
            <ProgressBar :value="language.level" />
          </div>
        </div>
      </template>
    </Card>

    <!-- СТЭК -->
    <Card class="bg-gray-800 border-none">
      <template #title>
        <div class="text-white">{{ t('stack') }}</div>
      </template>
      <template #content>
        <div class="flex flex-wrap gap-2">
          <Tag v-for="item in skills" :key="item" :value="t(item)" severity="info" />
        </div>
      </template>
    </Card>
  </div>
</template>
