正则

理解以下代码的意思

```ts
const reg0 = /\{([a-z,]+)\}/g;
const reg1 = new RegExp(`(?<![a-z}])${reg0.source}(?![a-z{])`, 'g');
const reg2 = new RegExp(`(${reg0.source}){2,}|[a-z]+(${reg0.source})+|(${reg0.source})+[a-z]+`, 'g');
```

数组去重

对象判空

数组遍历

对象遍历

