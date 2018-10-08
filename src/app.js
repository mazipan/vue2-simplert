import Simplert from './Simplert.vue'

export default {
  components: {
    Simplert
  },
  data() {
    return {}
  },
  methods: {
    open(title, message, type, color, customCloseBtnText, customCloseBtnClass, customClass, customIconUrl) {
      let obj = {
        title: title,
        message: message,
        type: type
      }

      if (customCloseBtnText) {
        obj.customCloseBtnText = customCloseBtnText
      }

      if (customCloseBtnClass) {
        obj.customCloseBtnClass = customCloseBtnClass
      }

      if (customClass) {
        obj.customClass = customClass
      }

      if (customIconUrl) {
        obj.customIconUrl = customIconUrl
      }

      console.log('open simplert with obj : ', obj)
      this.$refs.simplert.openSimplert(obj)
    },

    openCustomHtml() {
      let obj = {
        title: 'Custom HTML',
        message: '<span style="color:red;">I am HTML</span>',
        type: 'info'
      }

      console.log('open simplert with obj : ', obj)
      this.$refs.simplert.openSimplert(obj)
    },

    onOpen() {
      alert("Hey, I am called when alert is opened")
    },

    onClose() {
      alert('Hey, I am Close Function')
    },

    onConfirm() {
      alert('Hey, You Confirmed')
    },

    openCustomFunction() {
      let obj = {
        title: 'Custom Function',
        message: 'Click close to trigger custom function',
        type: 'info',
        onClose: this.onClose
      }

      console.log('open simplert with obj : ', obj)
      this.$refs.simplert.openSimplert(obj)
    },

    openWithOnOpen() {
      let obj = {
        title: 'On Open Function',
        message: 'There should be an alert before you see this',
        type: 'info',
        onOpen: this.onOpen
      }

      console.log('open simplert with obj: ', obj)
      this.$refs.simplert.openSimplert(obj)
    },

    openWithConfirm(title, message, isCustomFunction, customConfirmBtnText, customConfirmBtnClass) {
      let obj = {
        title: title,
        message: message,
        type: 'info',
        useConfirmBtn: true,
      }

      if (isCustomFunction) {
        obj.onConfirm = this.onConfirm
      }

      if (customConfirmBtnText) {
        obj.customConfirmBtnText = customConfirmBtnText
      }

      if (customConfirmBtnClass) {
        obj.customConfirmBtnClass = customConfirmBtnClass
      }

      console.log('open simplert with obj : ', obj)
      this.$refs.simplert.openSimplert(obj)
    },

    openDisabledOverlayClick() {
      let obj = {
        title: 'Disable Overlay Click',
        message: 'Now You can not close me by clicking overlay',
        type: 'info',
        disableOverlayClick: true
      }

      console.log('open simplert with obj : ', obj)
      this.$refs.simplert.openSimplert(obj)
    },

    openWithHiddenButton() {
      let obj = {
        title: 'Hey, I am Title',
        message: 'I am Message',
        type: 'info',
        hideAllButton: true
      }

      console.log('open simplert with obj : ', obj)
      this.$refs.simplert.openSimplert(obj)
    },

    openWithXbtn() {
      let obj = {
        title: 'Hey, I am Title',
        message: 'I am Message',
        type: 'info',
        showXclose: true
      }

      console.log('open simplert with obj : ', obj)
      this.$refs.simplert.openSimplert(obj)
    },

    openWithStyle() {
      let obj = {
        title: 'Confirmation',
        message: 'Do you want to procced ?',
        customClass: 'custom-simplert',
        customIconUrl: '',
        customCloseBtnText: 'No, Just Close',
        customCloseBtnClass: 'no-procced-btn',
        onClose: this.onClose,
        useConfirmBtn: true,
        customConfirmBtnText: 'Yes, Procced Me',
        customConfirmBtnClass: 'procced-btn',
        onConfirm: this.onConfirm
      }

      console.log('open simplert with obj : ', obj)
      this.$refs.simplert.openSimplert(obj)
    }

  }
};
