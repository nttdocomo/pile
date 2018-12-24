# mobile端Button组件

## 基本用法

```js
render () {
  return (
    <div>
      <Button>Normal</Button>{' '}
      <Button type='primary'>Primary</Button>{' '}
      <Button type='success'>Success</Button>{' '}
      <Button type='info'>Info</Button>{' '}
      <Button type='warning'>Warning</Button>{' '}
      <Button type='danger'>Danger</Button>{' '}
    </div>
  )
}
```

## size

```js
render () {
  return (
    <div>
      <Button type='primary' size='small'>Primary</Button>{' '}
      <Button type='primary'>Primary</Button>{' '}
      <Button type='primary' size='large'>Primary</Button>{' '}
    </div>
  )
}
```



## 反转

> 背景color和字体color互换

**场景** :清爽风格的按钮

> **note**
>
> 使用`reverse`来反转，`reverse`一般与`type`同时使用


```js
render () {
  return (
    <div>
      <Button>Normal</Button>{' '}
      <Button type='primary' reverse>Primary</Button>{' '}
      <Button type='success' reverse>Success</Button>{' '}
      <Button type='info' reverse>Info</Button>{' '}
      <Button type='warning' reverse>Warning</Button>{' '}
      <Button type='danger' reverse>Danger</Button>
    </div>
  )
}
```

## API

### props

|   参数    |   类型   |   默认  |   说明     |
|-----------|----------|------------|-------------------|
| type  |  string  |  -      | primary/dashed/success/info/warning/danger |
| reverse  |  boolean  |  false      | 将文本color与背景color反转，并设置背景color为透明 |
| dashed  | boolean | fase | 按钮设置为dashed状态，需要设置reverse=true，保证background为'#fff' |
| text  | boolean | false | 按钮设置为纯文本按钮 |
| size | one of `large`, `small`, `normal`  |  normal    | 组件的大小 |
| block | boolean  |  false  | 块状的形式占满父级元素 |
| icon | [React.Node](https://flow.org/en/docs/react/types/#toc-react-node) | - | 图标类 |
| loading  | Boolean | false  | loading效果 |
| href  | string | -  | 以`a`标签渲染组件   |
| disabled     | boolean     |  false    | 按钮的禁用状态 |
