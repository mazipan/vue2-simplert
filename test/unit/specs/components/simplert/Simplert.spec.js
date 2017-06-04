import Vue from 'vue'
import Simplert from 'components/simplert'

describe('Simplert.vue', () => {
  var vm = null
  before(() => {
    const Constructor = Vue.extend(Simplert)
    vm = new Constructor({})
  })

  it('Initialized well', () => {
    vm.$mount()
  })
  // -- UNIT TEST COMPUTED VARIABEL
  it('Computed Class Simplert', () => {
    vm.customClass = 'custom'
    expect(vm.classSimplert).to.equal('custom')
  })
  it('Computed Class Simplert When Popup Show', () => {
    vm.customClass = 'custom'
    vm.showSimplert = true
    expect(vm.classSimplert).to.equal('custom simplert--shown')
  })
  it('Computed Class Content', () => {
  	vm.useRadius = false
    expect(vm.classContent).to.equal('')
  })
  it('Computed Class Content When useRadius', () => {
  	vm.useRadius = true
    expect(vm.classContent).to.equal('simplert__content--radius')
  })
  it('Computed Class Button Close', () => {
  	vm.customCloseBtnClass = 'custom'
  	vm.useRadius = false
    expect(vm.classBtnClose).to.equal('custom')
  })
  it('Computed Class Button Close When useRadius', () => {
  	vm.customCloseBtnClass = 'custom'
  	vm.useRadius = true
    expect(vm.classBtnClose).to.equal('custom simplert__close--radius')
  })
  it('Computed Class Button Confirm', () => {
  	vm.customConfirmBtnClass = 'custom'
  	vm.useRadius = false
    expect(vm.classBtnConfirm).to.equal('custom')
  })
  it('Computed Class Button Confirm When useRadius', () => {
  	vm.customConfirmBtnClass = 'custom'
  	vm.useRadius = true
    expect(vm.classBtnConfirm).to.equal('custom simplert__confirm--radius')
  })
  // -- UNIT TEST METHOD FUNCTION
  it('Close Overlay', () => {
  	vm.showSimplert = true
    vm.closeOverlay({preventDefault: function () {}, target: {className: 'classDummy'}})
    expect(typeof vm.closeOverlay).to.equal('function')
    expect(vm.showSimplert).to.be.true
  })
  it('Close Overlay Right Class', () => {
  	vm.showSimplert = true
    vm.closeOverlay({preventDefault: function () {}, target: {className: 'simplert simplert--shown'}})
    expect(typeof vm.closeOverlay).to.equal('function')
    expect(vm.showSimplert).to.be.false
  })
  it('Default Confirm Function', () => {
  	vm.showSimplert = true
    vm.whenConfirm({preventDefault: function () {}})
    expect(vm.showSimplert).to.be.false
  })
  it('Custom Confirm Function', () => {
  	vm.showSimplert = true
  	vm.onConfirm = function(){}
    vm.whenConfirm({preventDefault: function () {}})
    expect(vm.showSimplert).to.be.false
  })
  it('Default Close Simplert', () => {
  	vm.showSimplert = true
    vm.closeSimplert({preventDefault: function () {}})
    expect(vm.showSimplert).to.be.false
  })
  it('Custom Close Simplert', () => {
  	vm.showSimplert = true
  	vm.onClose = function(){}
    vm.closeSimplert({preventDefault: function () {}})
    expect(vm.showSimplert).to.be.false
  })
  it('Open with empty config', () => {
    vm.openSimplert()
    expect(vm.showSimplert).to.be.true
  })
  it('Open with title', () => {
  	let obj = {
      title: 'title'
    }
    vm.openSimplert(obj)
    expect(vm.showSimplert).to.be.true
  })
  it('Open with message', () => {
  	let obj = {
      title: 'title',
      message: 'message'
    }
    vm.openSimplert(obj)
    expect(vm.showSimplert).to.be.true
  })
  it('Open with type', () => {
  	let obj = {
      title: 'title',
      message: 'message',
      type: 'success'
    }
    vm.openSimplert(obj)
    expect(vm.showSimplert).to.be.true
  })
  it('Open with custom class', () => {
  	let obj = {
      title: 'title',
      message: 'message',
      type: 'success',
      customClass: 'custom-class'
    }
    vm.openSimplert(obj)
    expect(vm.showSimplert).to.be.true
  })
  it('Open with custom icon', () => {
  	let obj = {
      title: 'title',
      message: 'message',
      type: 'success',
      customClass: 'custom-class',
      customIconUrl: 'url'
    }
    vm.openSimplert(obj)
    expect(vm.showSimplert).to.be.true
  })
  it('Open with custom close button text', () => {
  	let obj = {
      title: 'title',
      message: 'message',
      type: 'success',
      customClass: 'custom-class',
      customIconUrl: 'url',
      customCloseBtnText: 'close me'
    }
    vm.openSimplert(obj)
    expect(vm.showSimplert).to.be.true
  })
  it('Open with custom close button class', () => {
  	let obj = {
      title: 'title',
      message: 'message',
      type: 'success',
      customClass: 'custom-class',
      customIconUrl: 'url',
      customCloseBtnText: 'close me',
      customCloseBtnClass: 'custom-class'
    }
    vm.openSimplert(obj)
    expect(vm.showSimplert).to.be.true
  })
  it('Open with custom close function', () => {
  	let obj = {
      title: 'title',
      message: 'message',
      type: 'success',
      customClass: 'custom-class',
      customIconUrl: 'url',
      customCloseBtnText: 'close me',
      customCloseBtnClass: 'custom-class',
      onClose: function(){}
    }
    vm.openSimplert(obj)
    expect(vm.showSimplert).to.be.true
  })
  it('Open with confirm button', () => {
  	let obj = {
      title: 'title',
      message: 'message',
      type: 'success',
      customClass: 'custom-class',
      customIconUrl: 'url',
      customCloseBtnText: 'close me',
      customCloseBtnClass: 'custom-class',
      onClose: function(){},
      useConfirmBtn: true
    }
    vm.openSimplert(obj)
    expect(vm.showSimplert).to.be.true
  })
  it('Open with custom confirm button text', () => {
  	let obj = {
      title: 'title',
      message: 'message',
      type: 'success',
      customClass: 'custom-class',
      customIconUrl: 'url',
      customCloseBtnText: 'close me',
      customCloseBtnClass: 'custom-class',
      onClose: function(){},
      useConfirmBtn: true,
      customConfirmBtnText: 'confirm me'
    }
    vm.openSimplert(obj)
    expect(vm.showSimplert).to.be.true
  })
  it('Open with custom confirm button class', () => {
  	let obj = {
      title: 'title',
      message: 'message',
      type: 'success',
      customClass: 'custom-class',
      customIconUrl: 'url',
      customCloseBtnText: 'close me',
      customCloseBtnClass: 'custom-class',
      onClose: function(){},
      useConfirmBtn: true,
      customConfirmBtnText: 'confirm me',
      customConfirmBtnClass: 'custom-class'
    }
    vm.openSimplert(obj)
    expect(vm.showSimplert).to.be.true
  })
  it('Open with custom confirm function', () => {
  	let obj = {
      title: 'title',
      message: 'message',
      type: 'success',
      customClass: 'custom-class',
      customIconUrl: 'url',
      customCloseBtnText: 'close me',
      customCloseBtnClass: 'custom-class',
      onClose: function(){},
      useConfirmBtn: true,
      customConfirmBtnText: 'confirm me',
      customConfirmBtnClass: 'custom-class',
      onConfirm: function(){}
    }
    vm.openSimplert(obj)
    expect(vm.showSimplert).to.be.true
  })
})
