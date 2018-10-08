# Usage

## Add Simplert from CDN (Not supported again from v1.1.0)

Just add this script link, replace `latest` with spesific version you want, ex : 0.5.1

```html
<script src="https://unpkg.com/vue2-simplert@latest/dist/simplert.bundle.js"></script>
```

## Import from node_modules

You need run `npm install vue2-simplert --save` first, then import `simplert` to your component like

```javascript
import Simplert from 'vue2-simplert'
require('vue2-simplert/dist/simplert.css')
```

## Refer Simplert to components

```javascript
<script>
export default {
   components: { Simplert }
};
</script>
```

## Template

```html
<simplert :useRadius="true"
          :useIcon="true"
          ref="simplert">
</simplert>
```

## Open Simplert

```javascript
let obj = {
   title: 'Custom Function',
   message: 'Click close to trigger custom function',
   type: 'info',
   onClose: this.onClose
}
this.$refs.simplert.openSimplert(obj)
```

![vue2-simplert](https://mazipan.github.io/vue2-simplert/images/vue2-simplert-logo.png)

Copyright © 2017 by [Irfan Maulana](https://github.com/mazipan/)