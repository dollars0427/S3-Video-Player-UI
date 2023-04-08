<template>
  <div id="app">
    <header class="main-header" id="header">
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">S3 Video Player</a>
        </div>
      </nav>
    </header>
    <div class="main-content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    Footer
  },
}
</script>

<style lang="scss">
.topbar{
  position: sticky;
  top: 0;
  z-index: 50;
  width: 100%;
  padding-left: 30px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

body{
  margin: 0;
  font-family: "PingFang TC", "PingFang SC", "微軟正黑體", "Microsoft JhengHei", "微软雅黑", "Microsoft YaHei", "Noto Sans CJK TC", "Noto Sans CJK SC", "Droid Sans", "wenquanyi micro hei", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Helvetica Neue", sans-serif;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.main-content{
  min-height: 690px;
}

.page-header{
  margin-top: 50px;
  h1{
    font-size: 1.5em;
  }
}

.page-content{
  padding: 15px;
  padding-left: 0;
  position: relative;
  background: #fff;
  padding-left: 50px;
  color: #5b5b5b;
  margin-bottom: 20px;
  border: 1px solid #CCCED1;
  border-top: 0;
  border-radius: 5px;

  .content-header{
    margin: 0;
    border-radius: 3px 3px 0 0;
    h2{
      padding-left: 20px;
      padding-bottom: 20px;
      margin: 8px 0 0;
      font-weight: 400;
      font-size: 16px;
      display: block;
      color: #C6471B;
      border-bottom: none;
    }
  }
}
</style>
