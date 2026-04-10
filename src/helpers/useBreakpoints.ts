import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useBreakpoint() {
  const isMobile = ref(false)

  const checkSize = () => {
    isMobile.value = window.innerWidth <= 1280
  }

  onMounted(() => {
    // сразу проверить при монтировании
    checkSize()
    window.addEventListener('resize', checkSize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkSize)
  })

  return {
    isMobile,
  }
}
