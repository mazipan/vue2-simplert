
<template>
  <div class="grid__row">

    <div class="header__title">      
      <img src="https://mazipan.github.io/vue2-simplert/images/vue2-simplert-logo.png" 
      alt="Vue2-Simplert" title="Vue2-Simplert" />

      <h5 class="header__subtitle">Vue 2 Simple Alert Component (SweetAlert Inspired) By Irfan Maulana</h5>
    </div>


    <div class="fixed-top">      
      <a class="button button--radius button--green btn-top"  href="https://github.com/mazipan/vue2-simplert/wiki"
         target="_blank">
          Docs
      </a> 
      <a class="button button--radius button--blue btn-top"  href="https://github.com/mazipan/vue2-simplert"
         target="_blank">
          Download
      </a> 
    </div>  

    <div class="grid__row content">
      <h2>Example</h2>

      <div class="grid__col-12">
        <div class="grid__col-3 example__title">Information Alert</div>
        <div class="grid__col-3">
          <button class="button button--radius button--blue"
                  @click="open('Information!', 'Hey, I am Opened...', 'info')">
                Click Me!
          </button>  
        </div>     

        <div class="grid__col-3 example__title">Success Alert</div>
        <div class="grid__col-3">
          <button class="button button--radius button--green"
                  @click="open('Success!', 'Hey, I am Opened...', 'success')">
                Click Me!
          </button>   
        </div>       
      </div>


      <div class="grid__col-12">
        <div class="grid__col-3 example__title">Error Alert</div>
        <div class="grid__col-3">
          <button class="button button--radius button--red"
                  @click="open('Error!', 'Hey, I am Opened...', 'error')">
                Click Me!
          </button>
        </div>    

        <div class="grid__col-3 example__title">Warning Alert</div>
        <div class="grid__col-3">
          <button class="button button--radius button--orange"
                  @click="open('Warning!', 'Hey, I am Opened...', 'warning')">
                Click Me!
          </button>    
        </div>   
      </div>


      <div class="grid__col-12">
        <div class="grid__col-3 example__title">Alert Without Title</div>
        <div class="grid__col-3">
          <button class="button button--radius button--blue"
                  @click="open('', 'Hey, I am Opened, but I dont have title', '')">
                Click Me!
          </button>    
        </div>     

        <div class="grid__col-3 example__title">Alert With Custom Button</div>
        <div class="grid__col-3">
          <button class="button button--radius button--green"
                  @click="open('Custom Button', 'Hey, I am Opened...', '', '#00b35e')">
                Click Me!
          </button>   
        </div>       
      </div>


      <div class="grid__col-12">
        <div class="grid__col-3 example__title">Alert With HTML</div>
        <div class="grid__col-3">
          <button class="button button--radius button--orange"
                  @click="openCustomHtml">
                Click Me!
          </button>   
        </div>    

        <div class="grid__col-3 example__title">Alert With Custom Function</div>
        <div class="grid__col-3">
          <button class="button button--radius button--red"
                  @click="openCustomFunction">
                Click Me!
          </button>   
        </div>    
      </div>

      <div class="grid__col-12">
        <div class="grid__col-3 example__title">Alert With Custom Close Text</div>
        <div class="grid__col-3">
          <button class="button button--radius button--green"
                  @click="open('Custom Close Text', 'Hey, I am Opened...', '', '', 'Custom Close Text')">
                Click Me!
          </button>   
        </div>    

        <div class="grid__col-3 example__title">Alert With Custom Close Class</div>
        <div class="grid__col-3">
          <button class="button button--radius button--blue"
                  @click="open('Custom Close Class', 'Hey, I am Opened...', '', '', '', 'custom-class')">
                Click Me!
          </button>   
        </div>    
      </div>

      <div class="grid__col-12">
        <div class="grid__col-3 example__title">Alert With Custom Class</div>
        <div class="grid__col-3">
          <button class="button button--radius button--red"
                  @click="open('Custom Class', 'Hey, I am Opened...', '', '', '', '', 'custom-class')">
                Click Me!
          </button>   
        </div>    

        <div class="grid__col-3 example__title">Alert With Custom Icon</div>
        <div class="grid__col-3">
          <button class="button button--radius button--green"
                  @click="open('Custom Icon', 'Hey, I am Opened...', '', '', '', '', '', 'https://cdn2.iconfinder.com/data/icons/social-productivity-line-art-1/128/face-sad-512.png')">
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
              ref="simplert">
    </simplert>

  </div>
</template>

<script>
  export default {
    components: {
      Simplert: require('./simplert.vue')
    },
    data(){
      return{}
    },
    methods: {
      open (title, message, type, color, customCloseBtnText, customCloseBtnClass, customClass, customIconUrl) {
        let obj = {
          title: title,
          message: message,
          type: type
        }

        if (color) {
          obj.colorBtn = color
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

        this.$refs.simplert.openSimplert(obj)
      },

      openCustomHtml () {
        let obj = {
          title: 'Custom HTML',
          message: '<h5>I am HTML<h5><ul><li>List 1<li><li>List 2<li><li>List 3<li><ul>',
          type: 'info'
        }
        this.$refs.simplert.openSimplert(obj)
      },

      onClose () {
        alert('Hey, I am Triggred')
      },

      openCustomFunction () {
        let obj = {
          title: 'Custom Function',
          message: 'Click close to trigger custom function',
          type: 'info',
          onClose: this.onClose
        }
        this.$refs.simplert.openSimplert(obj)
      },

    }
  };
</script>


<style lang="scss">
body{
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
.fixed-top{
  position: fixed;
  right: 30px;
  top: 0;
  z-index: 3;
  margin: 26px 5px 0 5px;
}
.btn-top{  
  font-weight: 500;
  text-transform: uppercase;
}
.example__title{
  font-size: 1.6rem;
  color: #a6b6b9;
}
.grid__col-12{
  margin: 20px 0;
}
.content{
  margin: 20px 0;
}
.custom-class{
  color: purple !important;
}
</style>
