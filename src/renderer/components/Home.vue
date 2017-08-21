<template>
  <div>
    <Navbar :go-back="false" :settings="false"></Navbar>
    <div style="padding-bottom: 3.5rem; padding-top: 4rem">
      <sound-item v-for="(sound, index) in sounds" :key="1" :sound="sound" :index="index"></sound-item>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
  import Navbar from './Nav/Navbar';
  import SoundItem from './SoundItem/SoundItem';
  import FooterBar from './Footer/FooterBar';

  export default {
    name: 'home',
    components: { Navbar, SoundItem, FooterBar },
    computed: {
      sounds() {
        console.log('sounds', this.$store.state.Sounds.sings);
        return this.$store.state.Sounds.sings;
      },
    },
    methods: {

    },
  };
</script>

<style lang="less">

</style>
