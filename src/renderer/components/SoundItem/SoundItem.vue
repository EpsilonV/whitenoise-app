<template>
  <div :class="soundClass">
    <div class="sound-type">
      <a href="#" @click.prevent.stop="selected">
        <img :src="imgSrc"/>
      </a>
    </div>
    <div class="sound-volume">
      <p>{{ sound.name }}</p>
    </div>
  </div>
</template>
<script>
  import { Howl } from 'howler/dist/howler.core.min.js';
  export default {
    name: 'sound-item',
    props: {
      sound: Object,
      index: Number,
    },
    data() {
      return {
        singInstance: '',
      };
    },
    computed: {
      imgSrc() {
        return `./src/renderer/assets/${this.sound.img}.svg`;
      },
      soundClass() {
        return [
          'sound-item',
          {
            'sound-item-selected': this.$store.state.Sounds.sings[this.index].playing,
          },
        ];
      },
    },
    mounted() {
      const soundFile = `./src/renderer/assets/Mp3/${this.sound.file}`;
      this.singInstance = new Howl({
        src: soundFile,
        html5: true,
        loop: true,
        volume: this.sound.volume,
      });
      if (this.$store.state.Sounds.sings[this.index].playing) {
        this.singInstance.play();
      }
    },
    methods: {
      selected() {
        if (this.$store.state.Sounds.sings[this.index].playing) {
          this.singInstance.pause();
        } else {
          this.singInstance.play();
        }
        this.$store.commit('TOGGLE_SELECT', { index: this.index });
      },
    },
  };
</script>
<style lang="less">
  .sound-item {
    height: 4.5rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
    border-bottom: 1px solid rgba(86, 86, 86, 0.31);
    opacity: 0.5;
  }

  .sound-item-selected {
    opacity: 1.0;
  }

  .sound-item:last-child {
    border-bottom: 0px;
  }

  .sound-type {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sound-type a {
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sound-type a img {
    height: 2.5rem;
    width: 2.5rem;
    align-self: center;
  }

  .sound-volume {
    flex: 2;
    padding-left: 5px;
  }
</style>

