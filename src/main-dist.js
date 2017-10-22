import Simplert from './Simplert.vue'

const plugin = {
  install: Vue => {
    Vue.component(Simplert.name, Simplert)
  }
}

Simplert.install = plugin.install

export default Simplert
