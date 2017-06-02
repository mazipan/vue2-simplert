import Vue from 'vue'
import sinon from 'sinon'

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
