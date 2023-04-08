import { defineStore } from 'pinia'


export const useCommonStore = defineStore({
  id: 'common',
  state: () => ({
    apiUrl: import.meta.env.VITE_API_URL,
    fileUrl: import.meta.env.VITE_API_FILE_URL,
    currentPath: '/',
  }),
  actions: {
    setCurrentPath(newPath) {
      this.currentPath = newPath;
    },
  },
})
