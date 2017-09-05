<template>
  <div class="simplert" role="modal" :class="classSimplert" @click="closeOverlay">
    <div class="simplert__content" :class="classContent">
      <div class="simplert__header">
        <div class="simplert__x" v-if="showXclose" @click="justCloseSimplert">&#9587;</div>
        <div v-if="useIcon">
          <div class="simplert__icon simplert__icon--info" v-if="type === 'info'">
            <div class="simplert__line simplert__line--info">
            </div>
            <div class="simplert__line simplert__line--info-2">
            </div>
          </div>
          <div class="simplert__icon simplert__icon--success" v-if="type === 'success'">
            <div class="simplert__line simplert__line--success">
            </div>
            <div class="simplert__line simplert__line--success-2">
            </div>
          </div>
          <div class="simplert__icon simplert__icon--warning" v-if="type === 'warning'">
            <div class="simplert__line simplert__line--warning">
            </div>
            <div class="simplert__line simplert__line--warning-2">
            </div>
          </div>
          <div class="simplert__icon simplert__icon--error" v-if="type === 'error'">
            <div class="simplert__line simplert__line--error">
            </div>
            <div class="simplert__line simplert__line--error-2">
            </div>
          </div>
          <div class="simplert__icon" v-if="customIconUrl !== ''">
            <img :src="customIconUrl" />
          </div>
        </div>
        <b class="simplert__title">{{ title }}</b>
      </div>
      <div class="simplert__body">
        <div v-html="message"></div>
      </div>
      <div class="simplert__footer">
        <button :class="classBtnConfirm" v-if="useConfirmBtn && !hideAllButton"  @click="whenConfirm">
          {{ customConfirmBtnText }}
        </button>
        <button :class="classBtnClose" v-if="!hideAllButton" @click="closeSimplert">
          {{ customCloseBtnText }}
        </button>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
/*!
* Vue2-Simplert
* @author : Irfan Maulana (https://github.com/mazipan)
**/
export default {
  name: 'Simplert',
  props: {
    useRadius: {
      type: Boolean,
      default: true
    },
    useIcon: {
      type: Boolean,
      default: true
    }
  },

  data: function () {
    return {
      DEFAULT_TYPE: 'info',
      DEFAULT_BTN_CLOSE_TEXT: 'Close',
      DEFAULT_BTN_CONFIRM_TEXT: 'Confirm',
      INVALID_TYPE: 'INVALID_TYPE',
      // hide/show alert
      showSimplert: false,
      // basic setup
      title: '',
      message: '',        
      type: this.DEFAULT_TYPE, // info (default), success, warning, error
      customClass: '',
      customIconUrl: '',
      // open event
      onOpen: null,
      // close button
      customCloseBtnText: this.DEFAULT_BTN_CLOSE_TEXT,
      customCloseBtnClass: '',
      onClose: null,
      // confirm button
      useConfirmBtn: false,
      customConfirmBtnText: this.DEFAULT_BTN_CONFIRM_TEXT,
      customConfirmBtnClass: '',
      onConfirm: null,
      // disabled overlay
      disableOverlayClick: false,
      hideAllButton: false,
      // x close
      showXclose: false
    }
  },

  computed: {
    classSimplert: function () {
      var clasz = this.customClass
      if (this.showSimplert) {
        clasz = this.customClass + ' simplert--shown'
      } 
      return clasz
    },

    classContent: function () {
      var clasz = ''
      if (this.useRadius) {
        clasz = 'simplert__content--radius'
      } 
      return clasz
    },

    classBtnClose: function () {
      var clasz = 'simplert__close'
      if (this.useRadius) {
        clasz = 'simplert__close simplert__close--radius'
      }
      if (this.customCloseBtnClass) {
        clasz = this.customCloseBtnClass
      }
      return clasz
    },

    classBtnConfirm: function () {
      var clasz = 'simplert__confirm'
      if (this.useRadius) {
        clasz = 'simplert__confirm simplert__confirm--radius'
      }
      if (this.customConfirmBtnClass) {
        clasz = this.customConfirmBtnClass
      }
      return clasz
    }
  },

  methods: {
    justCloseSimplert: function () {
      this.showSimplert = false
    },

    closeOverlay: function (e) {
      var _self = this
      if (e.target.className.indexOf('simplert--shown') > 0 && !_self.disableOverlayClick) {
        _self.showSimplert = false
      }
    },

    whenConfirm: function (e) {
      var _self = this
      e.preventDefault()

      _self.showSimplert = false

      if (_self.onConfirm !== null) {
        _self.onConfirm()
      }
    },

    closeSimplert: function (e) {
      var _self = this
      e.preventDefault()

      _self.showSimplert = false

      if (_self.onClose !== null) {
        _self.onClose()
      }
    },

    openSimplert: function (obj) {
      var _self = this

      if (typeof obj !== 'undefined') {
        _self.showSimplert = true
        _self.title = obj.title

        if (typeof obj.message !== 'undefined') {
          _self.message = obj.message
        } else {
          _self.message = ''
        }

        if (typeof obj.type !== 'undefined') {
          _self.type = obj.type
        } else {
          _self.type = _self.DEFAULT_TYPE
        }

        if (typeof obj.customClass !== 'undefined') {
          _self.customClass = obj.customClass
        } else {
          _self.customClass = ''
        }

        if (typeof obj.customIconUrl !== 'undefined' && obj.customCloseBtnText !== '') {
          _self.customIconUrl = obj.customIconUrl
          _self.type = _self.INVALID_TYPE
        } else {
          _self.customIconUrl = ''
        }

        // close button setup
        if (typeof obj.customCloseBtnText !== 'undefined' && obj.customCloseBtnText !== '') {
          _self.customCloseBtnText = obj.customCloseBtnText
        } else {
          _self.customCloseBtnText = _self.DEFAULT_BTN_CLOSE_TEXT
        }

        if (typeof obj.customCloseBtnClass !== 'undefined') {
          _self.customCloseBtnClass = obj.customCloseBtnClass
        } else {
          _self.customCloseBtnClass = ''
        }

        if (typeof obj.onClose !== 'undefined' && obj.onClose !== null) {
          _self.onClose = obj.onClose
        } else {
          _self.onClose = null
        }

        // confirm button setup
        if (typeof obj.useConfirmBtn !== 'undefined') {
          _self.useConfirmBtn = obj.useConfirmBtn
        } else {
          _self.useConfirmBtn = false
        }

        if (typeof obj.customConfirmBtnText !== 'undefined' && obj.customConfirmBtnText !== '') {
          _self.customConfirmBtnText = obj.customConfirmBtnText
        } else {
          _self.customConfirmBtnText = _self.DEFAULT_BTN_CONFIRM_TEXT
        }

        if (typeof obj.customConfirmBtnClass !== 'undefined') {
          _self.customConfirmBtnClass = obj.customConfirmBtnClass
        } else {
          _self.customConfirmBtnClass = ''
        }

        if (typeof obj.onConfirm !== 'undefined' && obj.onConfirm !== null) {
          _self.onConfirm = obj.onConfirm
        } else {
          _self.onConfirm = null
        }

        if (typeof obj.disableOverlayClick !== 'undefined') {
          _self.disableOverlayClick = obj.disableOverlayClick
        } else {
          _self.disableOverlayClick = false
        }

        if (typeof obj.hideAllButton !== 'undefined') {
          _self.hideAllButton = obj.hideAllButton
        } else {
          _self.hideAllButton = false
        }

        if (typeof obj.showXclose !== 'undefined') {
          _self.showXclose = obj.showXclose
        } else {
          _self.showXclose = false
        }

        if (typeof obj.onOpen !== 'undefined') {
          _self.onOpen = obj.onOpen
        } else {
          _self.onOpen = null
        }

        if (_self.onOpen !== null) {
          _self.onOpen()
        }
      }
    }
  }
}
</script>
<style lang="css" src="./simplert.css"></style>
