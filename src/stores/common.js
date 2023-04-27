import { defineStore } from 'pinia'


export const useCommonStore = defineStore({
  id: 'common',
  state: () => ({
    apiUrl: import.meta.env.VITE_API_URL,
    fileUrl: import.meta.env.VITE_API_FILE_URL,
    currentPath: '/',  //This path is show for user.
    currentFolder: '', //This path is for system to read.
  }),
  actions: {
    setCurrentPath(newPath) {
      this.currentPath = newPath;
    },
    setCurrentFolder(newFolder){
      this.currentFolder = newFolder;
    },
  },
})
