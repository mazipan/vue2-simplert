
<template>
    <div class="simplert" role="modal"
         :class="(isShownData ? 'simplert--shown' : '')"
         @click="overlayClick">

        <div class="simplert__content"
             :class="(isUseRadius ? 'simplert__content--radius': '')">

            <div class="simplert__header">

                <div v-if="isUseIcon">
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
                </div>

                <b class="simplert__title">{{title}}</b>

            </div>
            <div class="simplert__body">
                <p>{{ message }}</p>
            </div>
            <div class="simplert__footer">
                <button class="simplert__close"
                        v-bind:style="{'background-color': colorBtn}"
                        :class="(isUseRadius ? 'simplert__close--radius': '')"
                        @click="close">
                    Close
                </button>
            </div>
        </div>
    </div>

</template>


<script>
  const DEFAULT_SIMPLERT_BTN_COLOR = "#068AC9"
  const DEFAULT_SIMPLERT_TYPE = "info"

  export default {
    props: {
      isUseRadius: false,
      isUseIcon: false,
      simplertData: Object
    },
    data () {
      return {
        isShownData: false,
        title: "",
        message: "",
        //type enum: info (default), success, warning, error
        type: DEFAULT_SIMPLERT_TYPE,
        colorBtn: DEFAULT_SIMPLERT_BTN_COLOR
      };
    },
    watch: {
      simplertData (obj) {
        let _self = this
        _self.isShownData = true

        if (typeof obj !== 'undefined') {
          _self.title = obj.title
          _self.message = obj.message

          if (typeof obj.type !== 'undefined') {
            _self.type = obj.type
          } else {
            _self.type = DEFAULT_SIMPLERT_TYPE
          }

          if (typeof obj.colorBtn !== 'undefined') {
            _self.colorBtn = obj.colorBtn
          } else {
            _self.colorBtn = DEFAULT_SIMPLERT_BTN_COLOR
          }

        }
      }
    },

    methods: {
      overlayClick: function (e) {
        let _self = this
        if (e.target.className === 'simplert simplert--shown') {
          _self.isShownData = false
          _self.type = DEFAULT_SIMPLERT_TYPE
        }
      },
      close: function (e) {
        let _self = this
        e.preventDefault()
        _self.isShownData = false
        _self.type = DEFAULT_SIMPLERT_TYPE
      },
      changeShown: function (booleanParam) {
        let _self = this
        _self.isShownData = booleanParam;
      }
    }
  }
</script>

<style lang="scss" scoped>

@mixin border-radius($radius)
{
  -webkit-border-radius: $radius;
  -moz-border-radius: $radius;
  border-radius: $radius;
}

@mixin appearance($appearance)
{
  -webkit-appearance: $appearance;
  -moz-appearance: $appearance;
}

$simplertInfo       : #C9DAE1 !default;
$simplertSuccess		: #A5DC86 !default;
$simplertWarning 		: #F8BB86 !default;
$simplertError   		: #F27474 !default;
$simplertDefaultBtn : #068AC9 !default;

%baseSetting
{
  line-height: 1.15;
  font-size: 1.3rem;

  *, *:before, *:after {
    box-sizing: inherit;
  }
}

.simplert
{
    @extend %baseSetting;

    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    overflow: auto;
    width: 100%;
    height: 100%;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,.4);
    text-align: center;
    display: none;

    &--shown{
      display: flex;
      align-items: center;

      .simplert__content{
        animation-duration: .5s;
        animation-fill-mode: both;
        animation-name: zoomIn;        
      }
    }

    &__header
    {
        padding: 2em 0 0;
    }

    &__title
    {
      display: block;
      font-size: 30px;
    }

    &__content
    {
        position: relative;
        width: 90%;
        max-width: 400px;
        margin: 0 auto;
        padding: 0;
        background-color: #fff;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);

        @media only screen and (min-width: 768px) {
          width: 30%;
        }

        &--radius{
          @include border-radius(.3em);
        }

    }

    &__body
    {

    }

    &__icon
    {
      margin: 10px auto;
      width: 80px;
      height: 80px;
      position: relative;
      @include border-radius(50%);

      &--info
      {
        border: 4px solid $simplertInfo;
      }
      &--success
      {
        border: 4px solid $simplertSuccess;
      }
      &--warning
      {
        border: 4px solid $simplertWarning;

      }
      &--error
      {
        border: 4px solid $simplertError;
      }

    }

    &__line
    {
      height: 5px;
      display: block;
      border-radius: 2px;
      position: absolute;
      z-index: 2;

      &--info
      {
        background-color: $simplertInfo;
        position: absolute;
        width: 7px;
        height: 7px;
        left: 50%;
        top: 19px;
        border-radius: 50%;
        margin-left: -3px;

        &-2
        {
          background-color: $simplertInfo;
          position: absolute;
          width: 5px;
          height: 29px;
          border-radius: 2px;
          margin-left: -2px;
          left: 50%;
          bottom: 15px;
        }
      }

      &--success {
        background-color: $simplertSuccess;
        width: 25px;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        left: 6px;
        top: 44px;

        &-2 {
          background-color: $simplertSuccess;
          width: 47px;
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
          right: 6px;
          top: 38px;
        }
      }

      &--warning
      {
        position: absolute;
        width: 5px;
        height: 35px;
        left: 50%;
        top: 10px;
        -webkit-border-radius: 2px;
        border-radius: 2px;
        margin-left: -2px;
        background-color: $simplertWarning;

        &-2
        {
          position: absolute;
          width: 7px;
          height: 7px;
          -webkit-border-radius: 50%;
          border-radius: 50%;
          margin-left: -3px;
          left: 50%;
          bottom: 10px;
          background-color: $simplertWarning;
        }
      }

      &--error
      {
        background-color: $simplertError;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        left: 13px;
        width: 47px;
        top: 35px;

        &-2
        {
          background-color: $simplertError;
          -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
          right: 13px;
          width: 47px;
          top: 35px;
        }
      }
    }

    &__footer
    {
        padding: 1em 0;
    }

    &__close{
      display: inline-block;
      padding: 10px 20px;
      outline: none;
      border: none;
      text-align: center;
      cursor: pointer;

      background-color: $simplertDefaultBtn;
      color: #fff;

      @include appearance(none);

      &--radius{
        @include border-radius(.3em);
      }
    }
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale3d(.3, .3, .3);
  }

  50% {
    opacity: 1;
  }
}
</style>
