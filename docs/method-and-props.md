# Methods And Props

## Available Props

You can add props in `simplert` component, example :

```html
<simplert :useRadius="true"
          :useIcon="true"
          ref="simplert">
</simplert>
```

| Attribute         	        | Value Type            |Default Value| Description                          	|
|---------------------------	|-----------------------|-------------|--------------------------------------	|
| :useRadius         	        | Boolean               | true | Setting useRadius to true will make Simplert's message box and buttons have rounded corners    	|
| :useIcon         	          | Boolean               | true | true : will use SweatAlert icon based on `type`, false : not use icon         	|
| ref                         | String                | -           | child reference, [read here]         	|

## Available Methods

You can call available methods in `simplert` with `this.$refs.simplert.someMethod()`, example : 

```javascript
var obj = {
  isShown: true,
  title: 'test',
  message: 'message',
  type: 'success',
  onClose: this.onClose
}
this.$refs.simplert.openSimplert(obj)
```

| Method Name                   | Parameter             | Description                                        	|
|-----------------------------	|-----------------------|---------------------------------------------------	|
| closeOverlay                  | -                     | close overlay and simplert (internal method : do not call) |
| justCloseSimplert             | -                     | close simplert without fired `onClose` method        	|
| whenConfirm                   | -                     | fired `onConfirm` and close simplert popup            |
| closeSimplert                 | -                     | close simplert popup                                  |
| openSimplert         	        | Object                | open simplert popup with predifined object passed     |

## Object Parameter Simplert

| Property                   | Type - Default       | Description                                        	|
|--------------------------- |----------------------|---------------------------------------------------	|
| title                      | string - empty       | Title of alert                                      |
| message                    | string - empty       | Message of alert                                    |
| type                       | string - 'info'      | Type of icon will used                              |
| customClass                | string - empty       | Adding extra class in parent simplert               |
| customIconUrl              | string - empty       | Using custom icon instead of default                |
| customCloseBtnText         | string - empty       | Using custom text in button close                   |
| customCloseBtnClass        | string - empty       | Change default class in button close                |
| onClose                    | func - undefined     | Function will fired when close button clicked       |
| useConfirmBtn              | boolean - false      | Using two button with close and confirm             |
| customConfirmBtnText       | string - empty       | Using custom text in button confirm                 |
| customConfirmBtnClass      | string - empty       | Change default class in button confirm              |
| onConfirm                  | func - undefined     | Function will fired when confirm button clicked     |
| disableOverlayClick        | string - empty       | Prevent click overlay will close alert              |
| hideAllButton              | boolean - false      | Hide both button close and confirm                  |
| onOpen                     | func - undefined     | Function will fired when open alert                 |
| showXclose                 | boolean - false      | Show X close button in right corner of alert        |

```javascript
{
  title: 'test', //string -- title alert
  message: 'message', //string -- message alert
  type: 'success', //string -- type : info (default), success, warning, error
  customClass: '', //string -- custom class in simplert div
  customIconUrl: '', //string -- custom url custom image icon
  customCloseBtnText: '', //string -- close button text
  customCloseBtnClass: '', //string -- custom class for close button
  onClose: this.onClose, //function -- when close triggered
  useConfirmBtn: false, //boolean -- using confirm button
  customConfirmBtnText: '', //string -- confirm button text
  customConfirmBtnClass: '', //string -- custom class for confirm button
  onConfirm: this.onConfirm, //function -- when confirm button triggered
  disableOverlayClick: false, //boolean -- set to true if you want disable overlay click function
  hideAllButton: false, //boolean -- set to true if you want hide all button
  onOpen: null, //function -- when simplert open will fire this method if available
  showXclose: true //boolean -- show x close button
}
```

[read here]: https://vuejs.org/v2/guide/components.html#Child-Component-Refs

![vue2-simplert](https://mazipan.github.io/vue2-simplert/images/vue2-simplert-logo.png)

Copyright © 2017 by [Irfan Maulana](https://github.com/mazipan/)