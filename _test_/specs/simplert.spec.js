import Vue from 'vue'
import sinon from 'sinon'
import Simplert from '../../src/app/simplert.vue'

describe('Simplert', () => {
  let app
  beforeEach(() => {
    app = new Vue({
      template: `<div>
										<simplert useRadius=true
                              useIcon=true
                              ref="simplert">
                    </simplert>
								 </div>`,
      components: {
        Simplert
      }
    }).$mount()
  })

  afterEach(() => {
    app.$destroy()
    app = null
  })

})
