import Vue from 'vue'
import app from '@/app/app.vue'

describe('app.vue', () => {
  var vm = null
  before(() => {
    const Constructor = Vue.extend(app)
    vm = new Constructor({
    })
  })

  it('Initialized well', () => {
    vm.$mount()
  })
})
