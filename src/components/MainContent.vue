<script setup lang="ts">
import type { Education, Job } from '@/types/types'

import Card from 'primevue/card'
import Tag from 'primevue/tag'
import Divider from 'primevue/divider'

const descriptions: string[] = [
  'Frontend-разработчик с реальным опытом бизнес-разработки и поддержки веб-приложений на Vue 3, включая миграцию проектов с Vue 2 (Composition API, рефакторинг, адаптация legacy-кода).',
]

//TODO: изменить название
const declare: string[] = [
  'Адаптивная и кросс-платформенная верстка под мобильные устройства.',
  'Интеграция frontend с REST API (backend на Golang): работа с асинхронными запросами, обработка данных, базовая отладка взаимодействия клиент–сервер.',
  'Опыт сборки и деплоя мобильных приложений на базе веб-стека с использованием Capacitor (Android Studio).',
  'Работа в команде: взаимодействие с backend-разработчиками, аналитиками и продакт-менеджерами, участие в постановке задач, оценке и обсуждении решений, использование инструментов вроде Jira.',
]

const experience: Job[] = [
  {
    company: 'СибНефтеКарт',
    role: 'Инженер-программист',
    period: '06/26 - н.в.',
    description: [
      'Миграция проекта Vue 2 → Vue 3, а также полная поддержка старой и новой бизнес-логики.',
      'Разработка web- приложения под автоматизацию АЗС и нефтебаз.',
      'Разработка включает личные кабинеты для покупателей, продавцов и держателей карт АЗС.',
      'Полная навигация по приложению исходя из роли пользователя.',
      'В разработке использовалась библиотека готовых компонентов PrimeVue v4.',
    ],
  },
  {
    company: 'ASAP Education/Газпром трансгаз Томск',
    role: 'Frontend разработчик',
    period: '02/25 - 06/25',
    description: [
      'Полноценная работа в команде над созданием с нуля готового MVP web-приложения для компании с целью автоматизации и оптимизации процессов планирования обучения сотрудников.',
      'Разработка с кастомными компонентами, работа с API.',
    ],
  },
]

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
</script>

<template>
  <div class="flex flex-col gap-2 pl-2">
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
            <div class="flex justify-between">
              <h3 class="font-semibold">{{ job.role }} - {{ job.company }}</h3>
              <Tag :value="job.period" severity="secondary" />
            </div>

            <ul class="text-sm mt-1 pr-30 pl-6" v-for="desc in job.description">
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
        <div v-for="description in declare" class="text-sm">
          <p>{{ description }}</p>
        </div>
      </template>
    </Card>
  </div>
</template>
