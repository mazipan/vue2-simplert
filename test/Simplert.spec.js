import {
  createLocalVue,
  shallowMount
} from '@vue/test-utils'
import Simplert from '../src/Simplert.vue'

describe('Simplert.vue', () => {
  // -- UNIT TEST COMPUTED VARIABEL
  it('Computed Class Simplert', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    vm.customClass = 'custom'
    expect(vm.classSimplert).toEqual('custom')
  })

  it('Computed Class Simplert When Popup Show', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    vm.customClass = 'custom'
    vm.showSimplert = true
    expect(vm.classSimplert).toEqual('custom simplert--shown')
  })
  it('Computed Class Content', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    vm.useRadius = false
    expect(vm.classContent).toEqual('')
  })
  it('Computed Class Content When useRadius', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    vm.useRadius = true
    expect(vm.classContent).toEqual('simplert__content--radius')
  })
  it('Computed Class Button Close', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    vm.useRadius = false
    expect(vm.classBtnClose).toEqual('simplert__close')
  })
  it('Computed Class Button Close When useRadius', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    vm.useRadius = true
    expect(vm.classBtnClose).toEqual('simplert__close simplert__close--radius')
  })
  it('Computed Class Button Close When customCloseBtnClass', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    vm.customCloseBtnClass = 'custom'
    expect(vm.classBtnClose).toEqual('custom')
  })
  it('Computed Class Button Confirm', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    vm.useRadius = false
    expect(vm.classBtnConfirm).toEqual('simplert__confirm')
  })
  it('Computed Class Button Confirm When useRadius', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    vm.useRadius = true
    expect(vm.classBtnConfirm).toEqual(
      'simplert__confirm simplert__confirm--radius'
    )
  })
  it('Computed Class Button Confirm When customConfirmBtnClass', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    vm.customConfirmBtnClass = 'custom'
    expect(vm.classBtnConfirm).toEqual('custom')
  })
  // -- UNIT TEST METHOD FUNCTION
  it('Close Overlay Wrong Class', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    vm.showSimplert = true
    vm.disableOverlayClick = false
    vm.closeOverlay({
      preventDefault: function () {},
      target: {
        className: 'classDummy'
      }
    })
    expect(typeof vm.closeOverlay).toEqual('function')
    expect(vm.showSimplert).toBe(true)
  })
  it('Close Overlay Wrong Class And NOT disableOverlayClick', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    vm.showSimplert = true
    vm.disableOverlayClick = true
    vm.closeOverlay({
      preventDefault: function () {},
      target: {
        className: 'classDummy'
      }
    })
    expect(typeof vm.closeOverlay).toEqual('function')
    expect(vm.showSimplert).toBe(true)
  })
  it('Close Overlay Right Class', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    vm.showSimplert = true
    vm.disableOverlayClick = false
    vm.closeOverlay({
      preventDefault: function () {},
      target: {
        className: 'simplert simplert--shown'
      }
    })
    expect(typeof vm.closeOverlay).toEqual('function')
    expect(vm.showSimplert).toBe(false)
  })
  it('Close Overlay Right Class And NOT disableOverlayClick', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    vm.showSimplert = true
    vm.disableOverlayClick = true
    vm.closeOverlay({
      preventDefault: function () {},
      target: {
        className: 'simplert simplert--shown'
      }
    })
    expect(typeof vm.closeOverlay).toEqual('function')
    expect(vm.showSimplert).toBe(true)
  })
  it('Default Confirm Function', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    vm.showSimplert = true
    vm.whenConfirm({
      preventDefault: function () {}
    })
    expect(vm.showSimplert).toBe(false)
  })
  it('Custom Confirm Function', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    vm.showSimplert = true
    vm.onConfirm = function () {}
    vm.whenConfirm({
      preventDefault: function () {}
    })
    expect(vm.showSimplert).toBe(false)
  })
  it('Default Close Simplert', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    vm.showSimplert = true
    vm.closeSimplert({
      preventDefault: function () {}
    })
    expect(vm.showSimplert).toBe(false)
  })
  it('Custom Close Simplert', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    vm.showSimplert = true
    vm.onClose = function () {}
    vm.closeSimplert({
      preventDefault: function () {}
    })
    expect(vm.showSimplert).toBe(false)
  })
  it('Open with empty config', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    vm.openSimplert()
    expect(vm.showSimplert).toBe(false)
  })
  it('Open with title', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    let obj = {
      title: 'title'
    }
    vm.openSimplert(obj)
    expect(vm.showSimplert).toBe(true)
    expect(vm.title).toEqual('title')
  })
  it('Open with message', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    let obj = {
      title: 'title',
      message: 'message'
    }
    vm.openSimplert(obj)
    expect(vm.showSimplert).toBe(true)
    expect(vm.title).toEqual('title')
    expect(vm.message).toEqual('message')
  })
  it('Open with type', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    let obj = {
      title: 'title',
      message: 'message',
      type: 'success'
    }
    vm.openSimplert(obj)
    expect(vm.showSimplert).toBe(true)
    expect(vm.title).toEqual('title')
    expect(vm.message).toEqual('message')
    expect(vm.type).toEqual('success')
  })
  it('Open with custom class', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    let obj = {
      title: 'title',
      message: 'message',
      customClass: 'custom-class'
    }
    vm.openSimplert(obj)
    expect(vm.showSimplert).toBe(true)
    expect(vm.title).toEqual('title')
    expect(vm.message).toEqual('message')
    expect(vm.customClass).toEqual('custom-class')
  })
  it('Open with custom icon', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    let obj = {
      title: 'title',
      message: 'message',
      customIconUrl: 'url'
    }
    vm.openSimplert(obj)
    expect(vm.showSimplert).toBe(true)
    expect(vm.title).toEqual('title')
    expect(vm.message).toEqual('message')
    expect(vm.type).toEqual('INVALID_TYPE')
    expect(vm.customIconUrl).toEqual('url')
  })
  it('Open with custom close button text', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    let obj = {
      title: 'title',
      message: 'message',
      customCloseBtnText: 'close me'
    }
    vm.openSimplert(obj)
    expect(vm.showSimplert).toBe(true)
    expect(vm.title).toEqual('title')
    expect(vm.message).toEqual('message')
    expect(vm.customCloseBtnText).toEqual('close me')
  })
  it('Open with custom close button class', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    let obj = {
      title: 'title',
      message: 'message',
      customCloseBtnClass: 'custom-class'
    }
    vm.openSimplert(obj)
    expect(vm.showSimplert).toBe(true)
    expect(vm.title).toEqual('title')
    expect(vm.message).toEqual('message')
    expect(vm.customCloseBtnClass).toEqual('custom-class')
  })
  it('Open with custom close function', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    let obj = {
      title: 'title',
      message: 'message',
      onClose: function () {}
    }
    vm.openSimplert(obj)
    expect(vm.showSimplert).toBe(true)
    expect(vm.title).toEqual('title')
    expect(vm.message).toEqual('message')
    expect(vm.onClose).not.toBe(null)
  })
  it('Open with confirm button', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    let obj = {
      title: 'title',
      message: 'message',
      useConfirmBtn: true
    }
    vm.openSimplert(obj)
    expect(vm.showSimplert).toBe(true)
    expect(vm.title).toEqual('title')
    expect(vm.message).toEqual('message')
    expect(vm.useConfirmBtn).toBe(true)
  })
  it('Open with custom confirm button text', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    let obj = {
      title: 'title',
      message: 'message',
      useConfirmBtn: true,
      customConfirmBtnText: 'confirm me'
    }
    vm.openSimplert(obj)
    expect(vm.showSimplert).toBe(true)
    expect(vm.title).toEqual('title')
    expect(vm.message).toEqual('message')
    expect(vm.useConfirmBtn).toBe(true)
    expect(vm.customConfirmBtnText).toEqual('confirm me')
  })
  it('Open with custom confirm button class', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    let obj = {
      title: 'title',
      message: 'message',
      useConfirmBtn: true,
      customConfirmBtnClass: 'custom-class'
    }
    vm.openSimplert(obj)
    expect(vm.showSimplert).toBe(true)
    expect(vm.title).toEqual('title')
    expect(vm.message).toEqual('message')
    expect(vm.useConfirmBtn).toBe(true)
    expect(vm.customConfirmBtnClass).toEqual('custom-class')
  })
  it('Open with custom confirm function', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    let obj = {
      title: 'title',
      message: 'message',
      useConfirmBtn: true,
      onConfirm: function () {}
    }
    vm.openSimplert(obj)
    expect(vm.showSimplert).toBe(true)
    expect(vm.title).toEqual('title')
    expect(vm.message).toEqual('message')
    expect(vm.useConfirmBtn).toBe(true)
    expect(vm.onConfirm).not.toBe(null)
  })
  it('Open with disabled overlay click', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    let obj = {
      title: 'title',
      message: 'message',
      disableOverlayClick: true
    }
    vm.openSimplert(obj)
    expect(vm.showSimplert).toBe(true)
    expect(vm.title).toEqual('title')
    expect(vm.message).toEqual('message')
    expect(vm.disableOverlayClick).toBe(true)
  })
  it('Open with all button hidden', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    let obj = {
      title: 'title',
      message: 'message',
      hideAllButton: true
    }
    vm.openSimplert(obj)
    expect(vm.showSimplert).toBe(true)
    expect(vm.title).toEqual('title')
    expect(vm.message).toEqual('message')
    expect(vm.hideAllButton).toBe(true)
  })
  it('Open with showXclose', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    let obj = {
      title: 'title',
      message: 'message',
      showXclose: true
    }
    vm.openSimplert(obj)
    expect(vm.showSimplert).toBe(true)
    expect(vm.title).toEqual('title')
    expect(vm.message).toEqual('message')
    expect(vm.showXclose).toBe(true)
  })
  it('Open with onOpen function', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    let obj = {
      title: 'title',
      message: 'message',
      onOpen: function () {}
    }
    vm.openSimplert(obj)
    expect(vm.showSimplert).toBe(true)
    expect(vm.title).toEqual('title')
    expect(vm.message).toEqual('message')
    expect(vm.onOpen).not.toBe(null)
  })
  it('Call justCloseSimplert', () => {
    let localVue = createLocalVue()
    let wrapper = shallowMount(Simplert, {
      localVue
    })
    const vm = wrapper.vm

    vm.showSimplert = true
    vm.justCloseSimplert()
    expect(vm.showSimplert).toBe(false)
  })
})
