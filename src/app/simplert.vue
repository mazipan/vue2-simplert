
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
                        @click="changeShown(false)">
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
        simplertData: Object
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
        simplertData(obj){
            this.isShownData = true;

            if(typeof obj !== 'undefined'){
                this.setTitle(obj.title);
                this.setMessage(obj.message);
                this.setType(obj.type);
            }
        }
    },

    methods: {
        overlayClick(event){
            if(event.target.className === 'simplert simplert--shown'){
                this.changeShown(false);
                this.setType(DEFAULT_SIMPLERT_TYPE);
            }
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
