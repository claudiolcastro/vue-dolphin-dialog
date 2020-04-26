<template>
  <div class="dolphin-dialog-wrapper">
    <transition>
      <div class="dolphin-dialog-background" v-show="visible" @click="closeDialog()"></div>
    </transition>
    <div
      :style="{backgroundColor, height: dialogSize}"
      class="dolphin-dialog"
      :class="{dolphinDialogShow: visible, dolphinDialogHide: !visible}"
    >
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
    backgroundColor: {
      type: String,
      default: '#fff',
    },
    size: {
      type: Number,
      default: 50,
    },
  },

  computed: {
    dialogSize() {
      const validSizes = [20, 30, 40, 50, 60, 70, 80, 90];
      if (validSizes.includes(this.size)) {
        return `${this.size}vh`;
      }
      return '50vh';
    },
  },

  methods: {
    closeDialog() {
      this.$emit('closeDialog', false);
    },
  },


};
</script>

<style scoped lang="scss">
.dolphin-dialog {
  border-radius: 10px 10px 0 0;
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
  bottom: -90% !important;
}
</style>
