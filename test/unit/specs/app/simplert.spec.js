import Vue from 'vue'
import simplert from 'src/app/simplert.vue'

describe('simplert.vue', () => {
  var vm = null
  before(() => {
    const Constructor = Vue.extend(simplert)
    vm = new Constructor({
    })
  })

  it('Initialized well', () => {
    vm.$mount()
  })
})
