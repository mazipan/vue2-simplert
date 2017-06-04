<template>
    <div class="simplert" role="modal"
         :class="classSimplert"
         @click="closeOverlay">

        <div class="simplert__content"
             :class="classContent">

            <div class="simplert__header">

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
                <button class="simplert__confirm"
                        v-if="useConfirmBtn"
                        :class="classBtnConfirm"
                        @click="whenConfirm">
                    {{ customConfirmBtnText }}
                </button>
                <button class="simplert__close"
                        :class="classBtnClose"
                        @click="closeSimplert">
                    {{ customCloseBtnText }}
                </button>  
            </div>
        </div>
    </div>

</template>


<script src="./simplert.js"></script>


<style lang="scss">
// Non-Scope style
@mixin box-sizing($box-size)
{
    -webkit-box-sizing: $box-size;
       -moz-box-sizing: $box-size;
            box-sizing: $box-size;
         -o-box-sizing: $box-size;
        -ms-box-sizing: $box-size;
}

html {
    @include box-sizing(border-box);
    font-size: 62.5%;
}

*, *:before, *:after {
  box-sizing: inherit;
}

</style>

<style lang="scss" src="./simplert.scss" scoped></style>
