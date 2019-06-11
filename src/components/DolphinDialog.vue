<template>
  <div class="dolphin-dialog-wrapper">
    <transition>
      <div class="dolphin-dialog-background" v-show="visible" @click="closeDialog()"></div>
    </transition>
    <div class="dolphin-dialog" :class="{dolphinDialogShow: visible, dolphinDialogHide: !visible}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DolphinDialog',

  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    closeDialog() {
      this.$emit('closeDialog', false);
    }
  },
};
</script>

<style scoped lang="scss">
.dolphin-dialog {
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  height: 50vh;
  transition: .5s;
  position: fixed;
  width: 100%;
  z-index: 1;
}

.dolphin-dialog-background {
  background-color: #000;
  bottom: 0;
  height: 100vh;
  position: fixed;
  opacity: .4;
  transition: .2s;
  width: 100%;
}

.dolphinDialogShow {
  bottom: 0 !important;
}
.dolphinDialogHide {
  bottom: -70% !important;
}
</style>
