<template>
  <div id="app">
    <button @click="show = !show">MENU</button>
    <img alt="Vue logo" src="./assets/logo.png">
    <DolphinDialog @closeDialog="show = false" :visible="show">
      <h3>Menu Content</h3>
    </DolphinDialog>
  </div>
</template>

<script>
import DolphinDialog from './components/DolphinDialog.vue';

export default {
  name: 'app',
  components: {
    DolphinDialog,
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
  background: #fff;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
</style>
