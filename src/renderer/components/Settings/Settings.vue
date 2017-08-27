<template>
    <div>
      <Navbar go-back="true" settings="true"></Navbar>
      <div style="padding-top: 4rem">
        <div class="volume-adjust">
          <img src="../../assets/speaker.svg"/>
          <Slider :value="volume" v-on:on-change="adjustVolume"></Slider>
          <img src="../../assets/speaker_sound.svg"/>
        </div>
        <div class="setting-bar">
          <span>Start at Login</span>
          <Switch-btn :value="startAtLogin" v-on:on-change="toggleLogin"></Switch-btn>
        </div>
        <div class="setting-bar">
          <span>Show in Dock</span>
          <Switch-btn :value="dockIcon" v-on:on-change="toggleDock"></Switch-btn>
        </div>
        <div class="setting-bar">
          <span>Play after Launch</span>
          <Switch-btn :value="playAfterLaunch" v-on:on-change="toggleLaunch"></Switch-btn>
        </div>
      </div>
    </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Navbar from '../Nav/Navbar';
  import Slider from '../UI/Slider.vue';
  import SwitchBtn from '../UI/Switch.vue';
  import api from '../../api';

  export default{
    name: 'settings',
    components: {
      Navbar,
      Slider,
      SwitchBtn,
    },
    computed: {
      ...mapState({
        volume: state => state.Settings.settings.volume,
        startAtLogin: state => state.Settings.settings.startAtLogin,
        dockIcon: state => state.Settings.settings.dockIcon,
        playAfterLaunch: state => state.Settings.settings.playAfterLaunch,
      }),
    },
    methods: {
      adjustVolume(value) {
        api.settingsApi.setItem('volume', value);
      },
      toggleLaunch(value) {
        console.log('sfdsfsdfsd');
        api.settingsApi.setItem('playAfterLaunch', value);
      },
      toggleDock(value) {
        api.settingsApi.setItem('dockIcon', value);
      },
      toggleLogin(value) {
        console.log('cscscs', value);
        api.settingsApi.setItem('startAtLogin', value);
      },
    },
  };
</script>
<style lang="less">
  .volume-adjust {
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    border-bottom: 1px solid rgba(86, 86, 86, 0.31);
  }

  .volume-adjust img {
    width: 1.5rem;
    height: 1.5rem;
  }

  .volume-adjust .slider {
    width: 100%;
    padding: 0 15px;
  }

  .setting-bar {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    align-items: center;
    height: 4rem;
    border-bottom: 1px solid rgba(86, 86, 86, 0.31);
  }

  /*.switch_btn {*/
    /*width: 48px;*/
    /*height: 24px;*/
    /*display: inline-block;*/
    /*line-height: 22px;*/
    /*border-radius: 24px;*/
    /*border: 1px solid #ccc;*/
    /*background-color: #ccc;*/
    /*position: relative;*/
    /*cursor: pointer;*/
    /*user-select: none;*/
    /*transition: all .2s ease-in-out;*/
  /*}*/

  /*.switch_btn::after {*/
    /*content: "";*/
    /*width: 20px;*/
    /*height: 20px;*/
    /*border-radius: 20px;*/
    /*background-color: #fff;*/
    /*position: absolute;*/
    /*left: 1px;*/
    /*top: 1px;*/
    /*cursor: pointer;*/
    /*transition: left .2s ease-in-out, width .2s ease-in-out;*/
  /*}*/

  /*.switch_btn_selected {*/
    /*background-color: #00f0c8;*/
  /*}*/

  /*.switch_btn_selected::after{*/
    /*left: 25px;*/
  /*}*/
</style>
