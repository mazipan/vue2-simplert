# Example

All code example using same HTML template :

```html
<simplert :useRadius="true"
      :useIcon="true"
      ref="simplert">
</simplert>
```

See [demo page](https://mazipan.github.io/vue2-simplert/) for check interface result.

## Table of Contents

+ [Information Alert](#information-alert)
+ [Success Alert](#success-alert)
+ [Error Alert](#error-alert)
+ [Warning Alert](#warning-alert)
+ [Alert Without Title](#alert-without-title)
+ [Alert With HTML Content](#alert-with-html-content)
+ [Alert With Custom Close Text](#alert-with-custom-close-text)
+ [Alert With Custom Close Class](#alert-with-custom-close-class)
+ [Alert With Custom Close Function](#alert-with-custom-close-function)
+ [Alert With Custom Class](#alert-with-custom-class)
+ [Alert With Custom Icon](#alert-with-custom-icon)
+ [Alert With Confirm Button](#alert-with-confirm-button)
+ [Alert With Confirm Button Custom Text](#alert-with-confirm-button-custom-text)
+ [Alert With Confirm Button Custom Class](#alert-with-confirm-button-custom-class)
+ [Alert With Confirm Button Function](#alert-with-confirm-button-function)
+ [Alert With Disable Overlay Click](#alert-with-disable-overlay-click)
+ [Alert With No Button Show](#alert-with-no-button-show)
+ [Alert With onOpen Function](#alert-with-onopen-function)
+ [Alert With close X](#alert-with-close-x)

## Information Alert

```javascript
let obj = {
  title: 'Alert Title',
  message: 'Alert Message',
  type: 'info'
}
this.$refs.simplert.openSimplert(obj)
```

[back to top](#table-of-contents)

## Success Alert

```javascript
let obj = {
  title: 'Alert Title',
  message: 'Alert Message',
  type: 'success'
}
this.$refs.simplert.openSimplert(obj)
```

[back to top](#table-of-contents)

## Error Alert

```javascript
let obj = {
  title: 'Alert Title',
  message: 'Alert Message',
  type: 'error'
}
this.$refs.simplert.openSimplert(obj)
```

[back to top](#table-of-contents)

## Warning Alert

```javascript
let obj = {
  title: 'Alert Title',
  message: 'Alert Message',
  type: 'warning'
}
this.$refs.simplert.openSimplert(obj)
```

[back to top](#table-of-contents)

## Alert Without Title

```javascript
let obj = {
  message: 'Alert Message',
  type: 'info'
}
this.$refs.simplert.openSimplert(obj)
```

[back to top](#table-of-contents)

## Alert With HTML Content

```javascript
let obj = {
  title: 'Alert Title',
  message: '<span style="color:red;">I am HTML</span>',
  type: 'info'
}
this.$refs.simplert.openSimplert(obj)
```

[back to top](#table-of-contents)

## Alert With Custom Close Text

```javascript
let obj = {
  title: 'Alert Title',
  message: 'Alert Message',
  type: 'info',
  customCloseBtnText: 'I am Close Button'
}
this.$refs.simplert.openSimplert(obj)
```

[back to top](#table-of-contents)

## Alert With Custom Close Class

```javascript
let obj = {
  title: 'Alert Title',
  message: 'Alert Message',
  type: 'info',
  customCloseBtnClass: 'btn-warning'
}
this.$refs.simplert.openSimplert(obj)
```

[back to top](#table-of-contents)

## Alert With Custom Close Function

```javascript
let closeFn = function() {
  alert("I am Closed")
}
let obj = {
  title: 'Alert Title',
  message: 'Alert Message',
  type: 'info',
  onClose: closeFn
}
this.$refs.simplert.openSimplert(obj)
```

[back to top](#table-of-contents)

## Alert With Custom Class

```javascript
let obj = {
  title: 'Alert Title',
  message: 'Alert Message',
  type: 'info',
  customClass: 'popup-custom-class'
}
this.$refs.simplert.openSimplert(obj)
```

[back to top](#table-of-contents)

## Alert With Custom Icon

```javascript
let obj = {
  title: 'Alert Title',
  message: 'Alert Message',
  type: 'info',
  customIconUrl: 'https://cdn2.iconfinder.com/data/icons/social-productivity-line-art-1/128/face-sad-512.png'
}
this.$refs.simplert.openSimplert(obj)
```

[back to top](#table-of-contents)

## Alert With Confirm Button

```javascript
let obj = {
  title: 'Alert Title',
  message: 'Alert Message',
  type: 'info',
  useConfirmBtn: true
}
this.$refs.simplert.openSimplert(obj)
```

[back to top](#table-of-contents)

## Alert With Confirm Button Custom Text

```javascript
let obj = {
  title: 'Alert Title',
  message: 'Alert Message',
  type: 'info',
  useConfirmBtn: true,
  customConfirmBtnText: 'OK'
}
this.$refs.simplert.openSimplert(obj)
```

[back to top](#table-of-contents)

## Alert With Confirm Button Custom Class

```javascript
let obj = {
  title: 'Alert Title',
  message: 'Alert Message',
  type: 'info',
  useConfirmBtn: true,
  customConfirmBtnClass: 'btn-warning'
}
this.$refs.simplert.openSimplert(obj)
```

[back to top](#table-of-contents)

## Alert With Confirm Button Function

```javascript
let confirmFn = function() {
  alert("I am Confirmed")
}
let obj = {
  title: 'Alert Title',
  message: 'Alert Message',
  type: 'info',
  useConfirmBtn: true,
  onConfirm: confirmFn
}
this.$refs.simplert.openSimplert(obj)
```

[back to top](#table-of-contents)

## Alert With Disable Overlay Click

```javascript
let obj = {
  title: 'Alert Title',
  message: 'Alert Message',
  type: 'info',
  disableOverlayClick: true
}
this.$refs.simplert.openSimplert(obj)
```

[back to top](#table-of-contents)

## Alert With No Button Show

```javascript
let obj = {
  title: 'Alert Title',
  message: 'Alert Message',
  type: 'info',
  hideAllButton: true
}
this.$refs.simplert.openSimplert(obj)
```

[back to top](#table-of-contents)

## Alert With onOpen Function

```javascript
let openFn = function() {
  alert("I am Confirmed")
}
let obj = {
  title: 'Alert Title',
  message: 'Alert Message',
  type: 'info',
  onOpen: openFn
}
this.$refs.simplert.openSimplert(obj)
```

[back to top](#table-of-contents)

## Alert With Close X

```javascript
let obj = {
  title: 'Alert Title',
  message: 'Alert Message',
  type: 'info',
  showXclose: true
}
this.$refs.simplert.openSimplert(obj)
```

[back to top](#table-of-contents)

![vue2-simplert](https://mazipan.github.io/vue2-simplert/images/vue2-simplert-logo.png)

Copyright © 2017 by [Irfan Maulana](https://github.com/mazipan/)
