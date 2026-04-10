<script setup lang="ts">
import type { Education, Job } from '@/types/types'
import { useI18n } from 'vue-i18n'

import Card from 'primevue/card'
import Tag from 'primevue/tag'
import Divider from 'primevue/divider'

const { t } = useI18n()

// ОПЫТ РАБОТЫ
const experience: Job[] = [
  {
    company: 'snc',
    role: 'roleSnc',
    period: 'periodSnc',
    description: [
      'sncDescription1',
      'sncDescription2',
      'sncDescription3',
      'sncDescription4',
      'sncDescription5',
      'sncDescription6',
    ],
  },
  {
    company: 'asapGazprom',
    role: 'roleAsap',
    period: 'periodAsap',
    description: ['asapDescription1', 'asapDescription2', 'asapDescription3', 'asapDescription4'],
  },
]

// ОБРАЗОВАНИЕ
const educations: Education[] = [
  {
    place: 'asapEducation',
    degree: 'asapDegree',
    period: 'asapPeriod',
  },
  {
    place: 'tpuEducation',
    degree: 'tpuDegree',
    period: 'tpuPeriod',
  },
]

//КЛЮЧЕВЫЕ ПРОЕКТЫ
const projects: string[] = ['firstProject', 'secondProject']
</script>

<template>
  <div class="flex flex-col gap-2 xl:pl-2">
    <!-- ОБО МНЕ -->
    <Card>
      <template #title>{{ t('aboutMe') }}</template>
      <template #content>
        <Divider class="mt-0" />
        <div class="text-sm">
          {{ t('description') }}
        </div>
      </template>
    </Card>

    <!-- ОПЫТ -->
    <Card>
      <template #title>{{ t('experience') }}</template>
      <template #content>
        <Divider class="mt-0" />
        <div class="space-y-4">
          <div v-for="job in experience" :key="job.company">
            <div class="flex justify-between pb-2">
              <h3 class="font-semibold">{{ t(`${job.role}`) }} - {{ t(`${job.company}`) }}</h3>
              <Tag :value="t(job.period)" severity="secondary" />
            </div>

            <ul class="text-sm mt-1 pr-30 pl-6 max-xl:pr-10" v-for="desc in job.description">
              <li class="list-disc">
                {{ t(`${desc}`) }}
              </li>
            </ul>
            <Divider />
          </div>
        </div>
      </template>
    </Card>

    <!-- ОБРАЗОВАНИЕ -->
    <Card>
      <template #title>{{ t('education') }}</template>
      <template #content>
        <Divider class="mt-0" />

        <div class="space-y-4">
          <div v-for="education in educations" :key="education.place">
            <div class="flex justify-between">
              <h3 class="font-semibold">{{ t(`${education.place}`) }}</h3>
              <Tag :value="t(`${education.period}`)" severity="secondary" />
            </div>
            <ul class="text-sm mt-1 pr-30 pl-6">
              <li class="list-disc">
                {{ t(`${education.degree}`) }}
              </li>
            </ul>
            <Divider />
          </div>
        </div>
      </template>
    </Card>

    <!-- ПРОЕКТЫ -->
    <Card>
      <template #title>{{ t('mainProjects') }}</template>
      <template #content>
        <Divider class="mt-0" />
        <div v-for="description in projects" class="text-sm">
          <ul class="text-sm mt-1 pl-6">
            <li class="list-disc">
              {{ t(`${description}`) }}
            </li>
          </ul>
        </div>
      </template>
    </Card>
  </div>
</template>
