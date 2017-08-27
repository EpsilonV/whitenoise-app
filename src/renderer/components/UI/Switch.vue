<template>
  <div>
    <label class="cmn-switch">
      <input class="cmn-toggle cmn-toggle-round" type="checkbox" v-model="checked"/>
      <i></i>
    </label>
  </div>
</template>
<script>
  export default {
    name: 'switch',
    props: {
      value: Boolean,
      text: String,
    },
    data() {
      return {
        checked: this.value,
      };
    },
    watch: {
      checked(newVal, oldVal) {
        if (newVal !== oldVal) {
          console.log('emit', newVal);
          this.$emit('on-change', newVal);
        }
      },
    },
  };
</script>
<style lang="less">
  .switch_btn {
    display: inline-block;
    line-height: 1rem;
  }
  .cmn-toggle {
    position: absolute;
    margin-left: -9999px;
    visibility: hidden;
  }
  .cmn-toggle + i {
    display: inline-block;
    position: relative;
    cursor: pointer;
    outline: none;
    user-select: none;
  }

  input.cmn-toggle-round + i {
    padding: 2px;
    width: 3rem;
    height: 1.5rem;
    background-color: #dddddd;
    border-radius: .8rem;
  }
  input.cmn-toggle-round + i:before,
  input.cmn-toggle-round + i:after {
    display: block;
    position: absolute;
    top: 1px;
    left: 1px;
    bottom: 1px;
    content: "";
  }
  input.cmn-toggle-round + i:before {
    right: 1px;
    background-color: #f1f1f1;
    border-radius: 1.5rem;
    transition: background 0.4s;
  }
  input.cmn-toggle-round + i:after {
    width: 1.4rem;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    transition: margin 0.4s;
  }
  input.cmn-toggle-round:checked + i:before {
    background-color: #8ce196;
  }
  input.cmn-toggle-round:checked + i:after {
    margin-left: 1.4rem;
  }
</style>
