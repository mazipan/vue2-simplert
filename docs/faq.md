# FAQ

### onConfirm fired immediately

**Q** : Hey I made config like this

```js
let Warning = {
  message: 'Do you really want to leave? you have unsaved changes!',
  useConfirmBtn: true,
  customCloseBtnText: 'Yes',
  customConfirmBtnText: 'No',
  onClose: this.Leave(),
  onConfirm: this.StayWhereYouAre()
}
```

But function `this.StayWhereYouAre()` was fired when I open alert, even not clicked yet.

**A** : It because you put function to be executed.
The solution is change the way you pass function, try like this:

```js
let Warning = {
  message: 'Do you really want to leave? you have unsaved changes!',
  useConfirmBtn: true,
  customCloseBtnText: 'Yes',
  customConfirmBtnText: 'No',
  onClose: this.Leave,
  onConfirm: this.StayWhereYouAre
}
```

![vue2-simplert](https://mazipan.github.io/vue2-simplert/images/vue2-simplert-logo.png)

Copyright © 2017 by [Irfan Maulana](https://github.com/mazipan/)
