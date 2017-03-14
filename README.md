# vue2-simplert
Vue 2 Simple Alert Component (SweetAlert Inspired)

We use icon from [SweetAlert](https://github.com/t4t5/sweetalert)

![Vue2-Simplert](https://raw.githubusercontent.com/mazipan/vue2-simplert/master/screenshoot.PNG)

## Demo
https://mazipan.github.io/vue2-simplert/

## Download
```
npm install vue2-simplert --save
-- OR --
yarn add vue2-simplert
```
Or download latest release here : https://github.com/mazipan/vue2-simplert/releases

## Component Import
```javascript
<script>
    import Simplert from './simplert.vue';
    /*
    * if you install from npm or Yarn you should import from src
    * import Simplert from 'vue2-simplert/src/app/simplert.vue';
    */
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
            //trigger open simplert
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
```
See here : https://github.com/mazipan/vue2-simplert/blob/master/src/app/app.vue

## Template Example
```javascript
....
 <button class="demo__btn open--info"
      v-on:click="open('Information!', 'Hey, I am Opened...', 'info')">
        Open Information Alert
</button>
....
<simplert isUseRadius=true
          isUseIcon=true
          :simplertData=simplertData>
</simplert>
```
See here : https://github.com/mazipan/vue2-simplert/blob/master/src/app/app.vue

## Exposed Attribute
You can add this attribute below in <SimplertComponent> :

| Attribute         	        | Parameter             	| Description                                        	|
|---------------------------	|-----------------------	|---------------------------------------------------	|
| isUseRadius         	        | Boolean                   | true : will use radius, false : not use radius     	|
| isUseIcon         	        | Boolean                   | true : will use icon, false : not use icon         	|
| :simplertData         	    | Object                    | will set all data simplert needed                  	|


## License
MIT License


Hope will usefull for you all.
Question ? please email : mazipanneh@gmail.com
