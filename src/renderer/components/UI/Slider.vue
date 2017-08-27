<template>
  <div class="slider">
    <div class="slider-warp" ref="slider" @click.self="sliderClick">
      <div class="slider-bar" :style="barStyle" @click.self="sliderClick"></div>
      <div class="slider-button-warp" :style="{ left: position + '%' }">
        <div class="slider-button" @mousedown="onDragStart"></div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'slider',
    data() {
      return {
        draging: false,
        position: this.value,
        oldPosition: 0,
        newPos: '',
      };
    },
    computed: {
      barStyle() {
        return {
          width: `${(this.position)}%`,
        };
      },
      sliderWidth() {
        const style = window.getComputedStyle(this.$refs.slider);
        return parseInt(style.width, 10);
      },
    },
    props: {
      value: Number,
    },
    methods: {
      sliderClick(event) {
        const currentX = event.clientX;
        const sliderOffsetLeft = this.$refs.slider.getBoundingClientRect().left;
        const newPos = ((currentX - sliderOffsetLeft) / this.sliderWidth) * 100;

        this.changePosition(newPos);
      },
      onDragStart(event) {
        event.preventDefault();
        this.draging = true;
        this.startX = event.clientX;
        this.startPos = parseInt(this.position, 10);
        window.addEventListener('mousemove', this.onDraging);
        window.addEventListener('mouseup', this.onDragEnd);
      },
      onDraging(event) {
        if (this.draging) {
          this.currentX = event.clientX;
          const diff = ((this.currentX - this.startX) / this.sliderWidth) * 100;
          this.newPos = this.position + diff;
          this.startX = this.currentX;
          this.changePosition(this.newPos);
        }
      },
      onDragEnd() {
        if (this.draging) {
          this.draging = false;
          window.removeEventListener('mousemove', this.onDraging);
          window.removeEventListener('mouseup', this.onDragEnd);
        }
      },
      changePosition(pos) {
        if (pos < 0) {
          pos = 0;
        } else if (pos > 100) {
          pos = 100;
        }
        this.position = pos;
        if (this.position !== this.oldPosition) {
          this.$emit('on-change', this.position);
          this.oldPosition = this.position;
        }
      },
    },
  };
</script>
<style lang="less">
  .slider {
    position: relative;
    z-index: 1;
    display: block;
  }

  .slider-warp {
    width: 100%;
    height: 4px;
    margin: 10px 0;
    background-color: #e9eaec;
    border-radius: 0px;
    vertical-align: middle;
    position: relative;
    cursor: pointer;
  }

  .slider-bar {
    position: absolute;
    height: 4px;
    background: rgba(23, 23, 23, 0.77);
    border-radius: 0px;
  }

  .slider-button-warp {
    width: 0px;
    height: 18px;
    text-align: center;
    background-color: transparent;
    position: absolute;
    top: -4px;
  }

  .slider-button {
    height: 12px;
    border: 2px solid rgba(23, 23, 23, 0.77);
    background-color: #ffffff;
  }
</style>
