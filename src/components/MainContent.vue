<script setup lang="ts">
import type { Education, Job } from '@/types/types'

import Card from 'primevue/card'
import Tag from 'primevue/tag'
import Divider from 'primevue/divider'

// ОБО МНЕ
const descriptions: string[] = [
  'Frontend-разработчик с опытом разработки и поддержки бизнес web-приложений. Есть опыт миграции с Vue 2 на Vue 3, работе с legacy-кодом и построении масштабируемой frontend-архитектуры (Composition API, Pinia).',
]

// ОПЫТ РАБОТЫ
const experience: Job[] = [
  {
    company: 'СибНефтеКарт',
    role: 'Инженер-программист',
    period: '06/26 - н.в.',
    description: [
      'Мигрировал приложение с Vue 2 на Vue 3 (Composition API), включая перенос и адаптацию бизнес-логики',
      'Поддерживал и развивал web-приложения под автоматизацию АЗС и нефтебаз',
      'Адаптировал web-приложение под мобильные устройства (responsive layout, оптимизация UX)',
      'Участвовал в подготовке сборки приложения под Android',
      'Интегрировал REST API (Axios), обеспечивая стабильное взаимодействие frontend с backend',
      'Использовал PrimeVue для ускорения разработки и унификации UI',
    ],
  },
  {
    company: 'ASAP Education/Газпром трансгаз Томск',
    role: 'Frontend разработчик',
    period: '02/25 - 06/25',
    description: [
      'Участвовал в разработке MVP web-приложения с нуля',
      'Разрабатывал кастомные компоненты с использованием Vue 3 + Composition API',
      'Интегрировал backend API',
      'Работал в команде с использованием GitFlow, code review и Jira',
    ],
  },
]

// ОБРАЗОВАНИЕ
const educations: Education[] = [
  {
    place: 'ASAP Education',
    degree: 'Frontend разработчик',
    period: '02/25 - 07/25',
  },
  {
    place: 'НИ Томский политехнический университет, Томск',
    degree:
      'Институт природных ресурсов, кафедра Химической технологии топлива и химической кибернетики',
    period: '08/12-07/16',
  },
]

//TODO: КЛЮЧЕВЫЕ ПРОЕКТЫ
const projects: string[] = [
  'Разработал систему планирования обучения сотрудников (MVP), позволившую автоматизировать процессы HR и сократить ручные операции',
  'Провёл миграцию frontend-приложения с Vue 2 на Vue 3, улучшив поддерживаемость кода и упростив дальнейшее развитие продукта',
]
</script>

<template>
  <div class="flex flex-col gap-2 xl:pl-2">
    <!-- ОБО МНЕ -->
    <Card>
      <template #title>Обо мне</template>
      <template #content>
        <Divider class="mt-0" />
        <div v-for="description in descriptions" class="text-sm">
          <p>{{ description }}</p>
        </div>
      </template>
    </Card>

    <!-- ОПЫТ -->
    <Card>
      <template #title>Опыт работы</template>
      <template #content>
        <Divider class="mt-0" />
        <div class="space-y-4">
          <div v-for="job in experience" :key="job.company">
            <div class="flex justify-between pb-2">
              <h3 class="font-semibold">{{ job.role }} - {{ job.company }}</h3>
              <Tag :value="job.period" severity="secondary" />
            </div>

            <ul class="text-sm mt-1 pr-30 pl-6 max-xl:pr-10" v-for="desc in job.description">
              <li class="list-disc">
                {{ desc }}
              </li>
            </ul>
            <Divider />
          </div>
        </div>
      </template>
    </Card>

    <!-- ОБРАЗОВАНИЕ -->
    <Card>
      <template #title>Образование</template>
      <template #content>
        <Divider class="mt-0" />

        <div class="space-y-4">
          <div v-for="education in educations" :key="education.place">
            <div class="flex justify-between">
              <h3 class="font-semibold">{{ education.place }}</h3>
              <Tag :value="education.period" severity="secondary" />
            </div>
            <ul class="text-sm mt-1 pr-30 pl-6">
              <li class="list-disc">
                {{ education.degree }}
              </li>
            </ul>
            <Divider />
          </div>
        </div>
      </template>
    </Card>

    <!-- ПРОЕКТЫ -->
    <Card>
      <template #title>Ключевые проекты</template>
      <template #content>
        <Divider class="mt-0" />
        <div v-for="description in projects" class="text-sm">
          <ul class="text-sm mt-1 pl-6">
            <li class="list-disc">
              {{ description }}
            </li>
          </ul>
        </div>
      </template>
    </Card>
  </div>
</template>
