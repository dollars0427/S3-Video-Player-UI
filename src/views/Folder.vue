<template>
  <div class="home">
    <div class="container">
      <div class="page-header">
        <h1>{{ currentPath }}</h1>
      </div>
      <ToolArea />
      <div class="page-content">
        <div class="file-list">
          <div class="file" v-for="file in files">
            <div class="file-inner" v-if="file.type === 'folder'" @click="switchFolder(file.fileKey, file.filename)">
              <img src="@/assets/folder-80.png"/>
              <div class="file-name">{{ file.filename }}</div>
            </div>
            <div class="file-inner" v-else @click="playVideo(file.fileKey)">
              <img :src="`${fileUrl}/${file.thumbnail}`" class="thumbnail" />
              <div class="file-name">{{ file.filename }}</div>
            </div>
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
  name: 'Folder',
  mounted(){
    this.loadFolderContent();
  },
  components: {
    ToolArea,
  },
  data(){
    return {
      files: [],
    }
  },
  methods:{
    async loadFolderContent(){
      const baseApiUrl = this.apiUrl;
      const folder = this.currentFolder;
      const files = await Common.loadFolder(baseApiUrl, folder);
      this.files = files;
    },
  },
  computed: {
    ...mapState(useCommonStore, ['apiUrl', 'currentPath', 'currentFolder'])
  },
 }
</script>

<style lang="scss">
.file-list{
  display: flex;
  .file{
    margin-right: 50px;
    &:hover{
      cursor: pointer;
    }
  }
}
.file-inner{
  text-align: center;
}
.file-name{
  text-align: center;
}
.thumbnail{
  width: 150px;
  height: 100px;
}
</style>
