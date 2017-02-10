
<template>
  <div>

    <h1>Vue2-Simplert</h1>
    <h5>By Irfan Maulana</h5>
    <div>
      <button class="demo__btn open--info"
              v-on:click="open('Information!', 'Hey, I am Opened...', 'info')">
            Open Information Alert
      </button>

      <button class="demo__btn open--info"
              v-on:click="open('Success!', 'Hey, I am Opened...', 'success')">
            Open Success Alert
      </button>

      <button class="demo__btn open--error"
              v-on:click="open('Error!', 'Hey, I am Opened...', 'error')">
            Open Error Alert
      </button>

      <button class="demo__btn open--warning"
              v-on:click="open('Warning!', 'Hey, I am Opened...', 'warning')">
            Open Warning Alert
      </button>

      <button class="demo__btn open--nontitle"
              v-on:click="open('', 'Hey, I am Opened, but I dont have title', '')">
            Open Alert Without Title
      </button>

      <button class="demo__btn open--customcolor"
              v-on:click="open('Custom Button', 'Hey, I am Opened...', '')">
            Open Alert With Custom Button
      </button>
    </div>
    <br/>

    <a href="https://github.com/mazipan/vue2-simplert"
       target="_blank"
       style="color: #068AC9; text-decoration: none;">
      Fork on Github
    </a>

    <simplert isUseRadius=true
              isUseIcon=true
              :simplertData=simplertData>
    </simplert>

  </div>
</template>

<script>
  import Simplert from './simplert.vue';

  export default {
    components: {
        Simplert
    },

    data(){
      return{
          simplertData    : {}
      }
    },

    methods: {
        open(title, message, type){
            var obj = {
                isShown : !this.isShown,
                title   : title,
                message : message,
                type    : type
            };

            this.simplertData = obj;
        }
    }
  };
</script>

<style scoped>
  .demo__btn{
      padding: 10px 20px;
      outline: none;
      border: none;
      text-align: center;
      cursor: pointer;
      color: #fff;
      background-color: #068AC9;
      -webkit-appearance: none;
      -moz-appearance: none;
  }
</style>

