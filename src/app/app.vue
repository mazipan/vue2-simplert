
<template>
  <div class="grid__row">

    <div class="header__title">      
      <img src="https://mazipan.github.io/vue2-simplert/images/vue2-simplert-logo.png" 
      alt="Vue2-Simplert" title="Vue2-Simplert" />

      <h5 class="header__subtitle">Vue 2 Simple Alert Component (SweetAlert Inspired) By Irfan Maulana</h5>
    </div>


    <a class="button button--radius button--blue btn-download"  href="https://github.com/mazipan/vue2-simplert"
       target="_blank">
        Download
    </a>   

    <div class="grid__row content">
      <h2>Example</h2>

      <div class="grid__col-12">
        <div class="grid__col-3 example__title">Information Alert</div>
        <div class="grid__col-3">
          <button class="button button--radius button--blue"
                  v-on:click="open('Information!', 'Hey, I am Opened...', 'info')">
                Click Me!
          </button>  
        </div>      
      </div>

      <div class="grid__col-12">
        <div class="grid__col-3 example__title">Success Alert</div>
        <div class="grid__col-3">
          <button class="button button--radius button--green"
                  v-on:click="open('Success!', 'Hey, I am Opened...', 'success')">
                Click Me!
          </button>   
        </div>         
      </div>

      <div class="grid__col-12">
        <div class="grid__col-3 example__title">Error Alert</div>
        <div class="grid__col-3">
          <button class="button button--radius button--red"
                  v-on:click="open('Error!', 'Hey, I am Opened...', 'error')">
                Click Me!
          </button>
        </div>    
      </div>

      <div class="grid__col-12">
        <div class="grid__col-3 example__title">Warning Alert</div>
        <div class="grid__col-3">
          <button class="button button--radius button--orange"
                  v-on:click="open('Warning!', 'Hey, I am Opened...', 'warning')">
                Click Me!
          </button>    
        </div>        
      </div>

      <div class="grid__col-12">
        <div class="grid__col-3 example__title">Alert Without Title</div>
        <div class="grid__col-3">
          <button class="button button--radius button--blue"
                  v-on:click="open('', 'Hey, I am Opened, but I dont have title', '')">
                Click Me!
          </button>    
        </div>        
      </div>

      <div class="grid__col-12">
        <div class="grid__col-3 example__title">Alert With Custom Button</div>
        <div class="grid__col-3">
          <button class="button button--radius button--blue"
                  v-on:click="open('Custom Button', 'Hey, I am Opened...', '')">
                Click Me!
          </button>   
        </div>    
      </div>
    </div>


    <div class="grid__row content">
      <h2>Download</h2>

      <p>        
        <a href="https://www.npmjs.com/package/vue2-simplert">
          <img src="https://img.shields.io/badge/download-npmjs-red.svg?maxAge=3600" alt="npmjs">
        </a>
        <br/><br/>
        <code>npm install vue2-simplert --save</code>
      </p>

      <p>        
        <a href="https://yarnpkg.com/en/package/vue2-simplert">
          <img src="https://img.shields.io/badge/download-yarn-blue.svg?maxAge=3600" alt="yarnpkg">
        </a>
        <br/><br/>
        <code>yarn add vue2-simplert</code>
      </p>

      <p>Or download latest release <a href="https://github.com/mazipan/vue2-simplert/releases">here</a></p>

    </div>

    <div class="grid__row content centered">
      <h2>Contribute</h2>

      <p>
        Feel free to fork Vue2-Simplert on <a href="https://github.com/mazipan/vue2-simplert"
       target="_blank">GitHub</a> if you have any features or bugs!    
      </p>      

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


<style lang="scss">
.body{
  background-color: #f2f4f6;
}
.centered{
  text-align: center;
}
.header__title{
  text-align: center;
  margin-top: 26px;
}
.header__subtitle{
  font-size: 2rem;
  font-style: italic;
  color: #a6b6b9;
  font-weight: 200;
}
.btn-download{  
    position: fixed;
    right: 30px;
    top: 0;
    font-weight: 500;
    text-transform: uppercase;
    z-index: 3;
    margin: 26px 5px 0 5px;
}
.example__title{
  margin-right: 2em;
  font-size: 1.6rem;
  color: #a6b6b9;
}
.grid__col-12{
  margin: 20px 0;
}
.content{
  margin: 20px 0;
}
</style>
