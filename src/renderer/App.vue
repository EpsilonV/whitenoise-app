<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import fs from 'fs-extra';
  import path from 'path';
  export default {
    name: 'electron-demo',
    mounted() {
      fs.readJson(path.join(__static, '/sounds.json'), (err, data) => {
        if (err) {
          console.log(err);
        }
        console.log('data', data);
        this.$store.commit('INIT_SINGS', data);
      });
      this.$store.dispatch('initSettings');
    },
  };
</script>

<style lang="less">
  /* CSS */
  @import './styles/base.less';
</style>
