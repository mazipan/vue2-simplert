
<template>
    <div class="simplert" role="modal"
         :class="(isShownData ? 'simplert--shown' : '')"
         @click="overlayClick">

        <div class="simplert__content">
            <div class="simplert__header">

                <div>
                    <div class="simplert__icon simplert__icon--info">
                        <div class="simplert__line simplert__line--info">
                        </div>
                        <div class="simplert__line simplert__line--info-2">
                        </div>
                    </div>

                    <div class="simplert__icon simplert__icon--success">
                        <div class="simplert__line simplert__line--success">
                        </div>
                        <div class="simplert__line simplert__line--success-2">
                        </div>
                    </div>

                    <div class="simplert__icon simplert__icon--warning">
                        <div class="simplert__line simplert__line--warning">
                        </div>
                        <div class="simplert__line simplert__line--warning-2">
                        </div>
                    </div>

                    <div class="simplert__icon simplert__icon--error">
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
                <button class="simplert__close">
                    Close
                </button>
            </div>
        </div>
    </div>

</template>


<script>

  const DEFAULT_SIMPLERT_BTN_COLOR = "#068AC9";
  const DEFAULT_SIMPLERT_TYPE = "info";

  export default {

    props:{
        isUseRadius : false,
        isUseIcon   : false,
        isShown     : Boolean,
    },

    data() {
      return {
          isShownData: false,
          title      : "",
          message    : "",
          /*
           * type enum : info (default), success, warning, error
           * */
          type       : DEFAULT_SIMPLERT_TYPE,
          colorBtn   : DEFAULT_SIMPLERT_BTN_COLOR
      };
    },

    watch:{
        isShown(val){
            this.isShownData = true;
        }
    },

    methods: {
        overlayClick(event){
            if(event.target.className === 'simplert simplert--shown'){
                this.changeShown(false);
            }
        },

        openSimplert(title, message, type){

            this.isShownData = true;
            this.title = title;
            this.message = message;
            if(type === ''){
                // reset to default setting when empty
                this.type = (DEFAULT_SIMPLERT_TYPE);
            }else{
                this.type = type;
            }
            // reset to default setting
            this.colorBtn = (DEFAULT_SIMPLERT_BTN_COLOR);
        },

        changeShown(booleanParam){
            this.isShownData = booleanParam;
        },

        setTitle(title){
            this.title = title;
        },

        setMessage(message){
            this.message = message;
        },

        setType(type){
            this.type = type;
        },

        setColorBtn(btnColor){
            this.colorBtn = btnColor;
        },
    },

  }
</script>

<style lang="scss" scoped>
    @import 'simplert.scss';
</style>
