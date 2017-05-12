
<template>
  <div class="grid__row">

    <img src="https://mazipan.github.io/vue2-simplert/images/vue2-simplert-logo.png" 
    alt="Vue2-Simplert" title="Vue2-Simplert" />

    <h1>Vue2-Simplert</h1>
    <h5>By Irfan Maulana</h5>

    <a class="button button--radius button--blue"  href="https://github.com/mazipan/vue2-simplert"
       target="_blank">
        Download
    </a>   

    <div class="grid__row">
      <h2>Example</h2>

      <div class="grid__col-12">
        <div class="example__title">Information Alert</div>
        <button class="button button--radius button--blue"
                v-on:click="open('Information!', 'Hey, I am Opened...', 'info')">
              Click Me!
        </button>        
      </div>

      <div class="grid__col-12">
        <div class="example__title">Success Alert</div>
        <button class="button button--radius button--green"
                v-on:click="open('Success!', 'Hey, I am Opened...', 'success')">
              Click Me!
        </button>        
      </div>

      <div class="grid__col-12">
        <div class="example__title">Error Alert</div>
        <button class="button button--radius button--red"
                v-on:click="open('Error!', 'Hey, I am Opened...', 'error')">
              Click Me!
        </button>
      </div>

      <div class="grid__col-12">
        <div class="example__title">Warning Alert</div>
        <button class="button button--radius button--orange"
                v-on:click="open('Warning!', 'Hey, I am Opened...', 'warning')">
              Click Me!
        </button>        
      </div>

      <div class="grid__col-12">
        <div class="example__title">Alert Without Title</div>
        <button class="button button--radius button--blue"
                v-on:click="open('', 'Hey, I am Opened, but I dont have title', '')">
              Click Me!
        </button>        
      </div>

      <div class="grid__col-12">
        <div class="example__title">Alert With Custom Button</div>
        <button class="button button--radius button--blue"
                v-on:click="open('Custom Button', 'Hey, I am Opened...', '')">
              Click Me!
        </button>        
      </div>
    </div>

    <div class="grid__row">
      <h2>Contribute</h2>

      <span>
        Feel free to fork Vue2-Simplert on <a href="https://github.com/mazipan/vue2-simplert"
       target="_blank">GitHub</a> if you have any features or bugs!        
      </span>

    </div>

    <!-- Vue2-Simplert DOM start -->
    <simplert isUseRadius=true
              isUseIcon=true
              :simplertData=simplertData>
    </simplert>

  </div>
</template>

<script>
  export default {
    components: {
      Simplert: require('./simplert.vue')
    },
    data(){
      return{
        simplertData: {}
      }
    },
    methods: {
      open(title, message, type){
        var obj = {
          isShown: !this.isShown,
          title: title,
          message: message,
          type: type
        }
        this.simplertData = obj
      }
    }
  };
</script>

