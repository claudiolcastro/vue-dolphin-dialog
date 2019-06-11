import VueDolphinDialog from './components/DolphinDialog.vue';

const install = Vue => Vue.component(VueDolphinDialog.name, VueDolphinDialog);

if (typeof window !== 'undefined' && window.Vue) {
  window.VueDolphinDialog = VueDolphinDialog;
  window.Vue.use(VueDolphinDialog);
}

VueDolphinDialog.install = install;

export default VueDolphinDialog;
export { VueDolphinDialog };
