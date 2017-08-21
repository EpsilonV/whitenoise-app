<template>
  <div>
    <footer>
      <router-link to="addSing">
        <img src="../../assets/file.svg"/>
      </router-link>
      <a href="#" @click.prevent.stop="saveMix">
        <img src="../../assets/save.svg"/>
      </a>
      <a href="#" @click.prevet.stop="remind">
        <img src="../../assets/stopwatch.svg"/>
      </a>
    </footer>
  </div>
</template>
<script>
  export default {
    name: 'footer-bar',
  };
</script>
<style lang="less">
  footer {
    background: #f5f5f5;
    height: 3.5rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-content: center;
    position: fixed;
    bottom: 0;
    border-top: 1px solid rgba(128, 128, 128, 0.23);
  }

  footer a {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  footer a img {
    align-items: center;
    width: 1.5rem;
    height: 1.5rem;
  }
</style>
