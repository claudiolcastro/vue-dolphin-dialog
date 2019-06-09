<template>
  <div class="dolphin-menu-wrapper">
    <transition>
      <div class="dolphin-menu-background" v-show="visible" @click="closeMenu()"></div>
    </transition>
    <div class="dolphin-menu" :class="{dolphinMenuShow: visible, dolphinMenuHide: !visible}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DolphinMenu',

  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    closeMenu() {
      this.$emit('closeMenu', false);
    }
  },
};
</script>

<style scoped lang="scss">
.dolphin-menu {
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  height: 50vh;
  transition: .5s;
  position: fixed;
  width: 100%;
  z-index: 1;
}

.dolphin-menu-background {
  background-color: #000;
  bottom: 0;
  height: 100vh;
  position: fixed;
  opacity: .4;
  transition: .2s;
  width: 100%;
}

.dolphinMenuShow {
  bottom: 0 !important;
}
.dolphinMenuHide {
  bottom: -70% !important;
}
</style>
