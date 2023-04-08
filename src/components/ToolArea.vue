<template>
  <div class="toolarea">
    <div class="toolarea-buttons">
      <a href="#" class="toolarea-button toolbar-home"><i class="bi bi-house"></i></a>
      <a href="#" class="toolarea-button toolbar-previous"><i class="bi bi-arrow-left"></i></a>
    </div>
  </div>
</template>

<script>
import { mapState } from 'pinia'
import { useCommonStore } from '../stores/common';
import Common from '../lib/common';

export default {
  name: 'ToolArea',
  data(){
    return {
      folders: [],
    }
  },
  methods:{
    goRoot(){
      const store = useCommonStore();
      store.setCurrentPath(`/`);
      this.$router.push(`/`);
    },
  },
 }
</script>

<style lang="scss">
.toolarea{
  margin-top: 50px;
  padding-left: 50px;
  border: 1px solid #CCCED1;
  background-color: white;

  .toolarea-buttons{
    a{
      font-size: 1.8em;
      color: black;
      margin-right: 20px;
    }
  }
}
</style>
