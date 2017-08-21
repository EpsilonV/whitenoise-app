<template>
  <div>
    <header id="header-top">
      <router-link to="back" v-if="goBack" @click="$router.go(-1)">
        <img src="../../assets/left-arrow.svg"/>
      </router-link>
      <router-link to="list" v-else="!goBack">
        <img src="../../assets/list.svg"/>
      </router-link>
        <a href="#" @click.prevent.stop="play" v-if="!settings">
          <img v-show="playing" src="../../assets/play.svg"/>
          <img v-show="!playing" src="../../assets/pause.svg"/>
        </a>
      <router-link to="settings" v-if="!settings">
        <img src="../../assets/settings.svg"/>
      </router-link>
      <p v-if="settings">Settings</p>
    </header>
  </div>
</template>
<script>
  import { Howler } from 'howler/dist/howler.core.min.js';
  import { mapState } from 'vuex';

  export default {
    name: 'navbar',
    props: ['goBack', 'settings'],
    computed: {
      ...mapState({
        playing: state => state.Settings.play,
      }),
    },
    methods: {
      play() {
        Howler.mute(!this.$store.state.Settings.play);
        this.$store.commit('TOGGLE_PLAY');
      },
    },
  };
</script>
<style lang="less">
    #header-top {
        background: #333;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-content: center;
        height: 4rem;
        width: 100%;
      position: fixed;
      top: 0;
    }

    #header-top a {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    #header-top a img {
      align-self: center;
      display: block;
      height: 1.5rem;
      width: 1.5rem;
    }
</style>
