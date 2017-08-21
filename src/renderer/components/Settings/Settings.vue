<template>
    <div>
      <Navbar go-back="true" settings="true"></Navbar>
    </div>
</template>

<script>
  import Navbar from '../Nav/Navbar';

  export default{
    name: 'settings',
    components: {
      Navbar,
    },
  };
</script>
