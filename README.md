# vue2-simplert
Vue 2 Simple Alert Component (SweetAlert Inspired)

[![License](https://img.shields.io/github/license/mazipan/vue2-simplert.svg?maxAge=3600)](https://github.com/mazipan/vue2-simplert) 
[![Github Issue](https://img.shields.io/github/issues/mazipan/vue2-simplert.svg?maxAge=3600)](https://github.com/mazipan/vue2-simplert/issues) 
[![GitHub Fork](https://img.shields.io/github/forks/mazipan/vue2-simplert.svg?maxAge=3600)](https://github.com/mazipan/vue2-simplert/network) 
[![GitHub Star](https://img.shields.io/github/stars/mazipan/vue2-simplert.svg?maxAge=3600)](https://github.com/mazipan/vue2-simplert/stargazers) 
[![GitHub Contributors](https://img.shields.io/github/contributors/mazipan/vue2-simplert.svg?maxAge=3600)](https://github.com/mazipan/vue2-simplert/network/members)

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

## Install to your Project

+ Using import from node_modules, just import like
```javascript
import Simplert from '~vue2-simplert/src/app/simplert.vue'
```

+ Using copy source manual, after `npm install vue2-simplert --save`

    - Copy [simplert.vue](https://github.com/mazipan/vue2-simplert/blob/master/src/app/simplert.vue) from **node_modules/vue2-simplert/src/app/simplert.vue** to your vue component file
    - Sample using **vue-cli**, I copy to **src/simplert.vue**
    
+ Then import to your component like below :

## Component Import
```javascript
<script>
    export default {
        components: {
            Simplert: Simplert
            // or if you copy manual
            // Simplert: require('./simplert.vue')
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

## Template Usage Example
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
