<script setup lang="ts">
import SideBar from '@/components/SideBar.vue'
import MainContent from '@/components/MainContent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col gap-2 bg-slate-200 text-white xl:px-130 max-xl:px-5">
    <header class="bg-linear-to-b from-indigo-800 via-indigo-900 to-slate-900 rounded-3xl mt-4">
      <HeaderComponent />
    </header>
    <div class="flex mb-4 max-xl:flex-col max-xl:gap-2">
      <aside
        class="w-[30%] p-4 bg-linear-to-b from-indigo-800 via-indigo-900 to-slate-900 rounded-3xl max-xl:w-full"
      >
        <SideBar />
      </aside>

      <main class="w-[70%] overflow-y-auto max-xl:w-full">
        <MainContent />
      </main>
    </div>
  </div>
</template>
