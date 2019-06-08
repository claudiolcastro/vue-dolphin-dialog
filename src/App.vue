<template>
  <div id="app">
    <button @click="show = !show">Open Menu</button>
    <img alt="Vue logo" src="./assets/logo.png">
    <DolphinMenu :class="{show: show, hide: !show}"/>
  </div>
</template>

<script>
import DolphinMenu from './components/DolphinMenu.vue';

export default {
  name: 'app',
  components: {
    DolphinMenu,
  },
  data() {
    return {
      show: false,
    }
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}

button {
  border: 1px solid #ccc;
}

img {
  display: block;
  margin: 0 auto;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.show {
  bottom: 0 !important;
}
.hide {
  bottom: -50% !important;
}
</style>
