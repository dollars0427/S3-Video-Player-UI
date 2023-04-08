<template>
  <div class="home">
    <div class="container">
      <div class="page-header">
        <h1>{{ currentPath }}</h1>
      </div>
      <ToolArea />
      <div class="page-content">
        <div class="file-list">
          <div class="file" v-for="folder in folders" @click="switchFolder(folder.fileKey, folder.filename)">
            <img src="@/assets/folder-80.png"/>
            <div class="file-name">{{ folder.filename }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useCommonStore } from '../stores/common';
import ToolArea from '@/components/ToolArea.vue';
import Common from '../lib/common';

export default {
  name: 'Home',
  mounted(){
    this.loadRootContent();
  },
  components: {
    ToolArea,
  },
  data(){
    return {
      folders: [],
    }
  },
  methods:{
    async loadRootContent(){
      const baseApiUrl = this.apiUrl;
      const folders = await Common.loadFolder(baseApiUrl, 'root');
      this.folders = folders;
    },
  },
  computed: {
    ...mapState(useCommonStore, ['apiUrl', 'currentPath'])
  },
 }
</script>

<style lang="scss">
.folder-list{
  display: flex;
  .folder{
    margin-right: 50px;
    &:hover{
      cursor: pointer;
    }
  }
}
.folder-name{
  text-align: center;
}
</style>
